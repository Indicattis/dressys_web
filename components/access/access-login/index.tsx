import { IconDoorEnter, IconPassword, IconSquare, IconSquareCheck, IconUser, } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ClientDTO from "@/data/types/client";
import { client_login, client_login_google_oauth } from "@/data/contexts/client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TooltipComponent from "@/layout/tooltip";
import { useState } from "react";
import DefaultButton from "@/layout/button/button";
import useLoading from "@/data/hooks/useLoading";
import LoadComponent from "@/layout/load";
import { handleEmailChange } from "@/utils/formatter";

export default function AccessLoginComponent() {
    const { loading, loadInit, loadEnd } = useLoading();
    const { register, handleSubmit } = useForm<ClientDTO>();
    const [isLocal, setLocal] = useState<boolean>(false)
    const [email, setEmail] = useState<string>("");
    const [mailErrorMessage, setMailErrorMessage] = useState("");

    const onSubmit = async (data: ClientDTO) => {
        loadInit();
        data.client_mail = email;
        try {
            const response = await client_login(data, isLocal);

            if (response.authenticated) {
                toast.info("Seja bem vinda a melhor e mais linda amiga do João Pedro! ")
            } else {
                toast.error("Usuário ou senha incorretos!")
            }
        } catch (error: any) {
            console.error(error);
            toast.error("Erro! "+ error.message);
        } finally {
            loadEnd();
        }
    };


    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center w-full ">
            {loading && <LoadComponent/>}
            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
            >
                <input
                    onChange={(event) =>
                        handleEmailChange(event, setEmail, setMailErrorMessage)
                    }
                    placeholder="E-mail"
                    value={email}
                    type="text"
                    required
                    className={`_input ${
                        mailErrorMessage == "E-mail inválido"
                            ? "focus:text-blue"
                            : "focus:text-green-500"
                    }`}
                />
                <TooltipComponent description="Digite o seu E-mail"  className={`_input_icon_2`}>
                    <IconUser></IconUser>
                </TooltipComponent>
            </motion.div>

            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.3 }}
            >
                <input 
                placeholder="Senha"
                type="password" 
                className={`_input`} 
                required
                {...register("client_password")}/>
                <TooltipComponent description="Digite a sua Senha"  className={`_input_icon_2`}>
                    <IconPassword></IconPassword>
                </TooltipComponent>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5 }}className="flex gap-1">
                <div className="flex gap-2 items-center justify-center text-blue text-xs font-jetbrains cursor-pointer" onClick={() => setLocal(!isLocal)}>
                    {!isLocal ? <IconSquare width={20} height={20}/> : <IconSquareCheck width={20} height={20}/>}
                    <label className="" htmlFor="session-check"
                    >Manter-me conectado</label>
                </div>
                
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.7 }}
                className="w-full flex justify-center"
            >
                <DefaultButton
                    rounded="full"
                    wide="lg"
                    type="submit"
                    variant="pink"
                >
                    Entrar
                </DefaultButton>
            </motion.div>
        </form>
    );
}
