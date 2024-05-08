import { IconDoorEnter, IconPassword, IconSquare, IconSquareCheck, IconUser, } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ClientDTO from "@/data/types/client";
import { client_login } from "@/data/contexts/client";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TooltipComponent from "@/layout/tooltip";
import { useState } from "react";
import DefaultButton from "@/layout/button/button";

export default function AccessLoginComponent() {
    const { register, handleSubmit } = useForm<ClientDTO>();
    const [isLocal, setLocal] = useState<boolean>(false)

    const onSubmit = async (data: ClientDTO) => {
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
        }
    };


    return (
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 items-center w-full ">
            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
            >
                <input 
                placeholder="E-mail"
                type="text" 
                className={`_input`} 
                {...register("client_mail", {
                    required: "Este campo é obrigatório",
                })}/>
                <TooltipComponent description="Digite o seu E-mail"  className={`_input_icon`}>
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
                {...register("client_password", {
                    required: "Este campo é obrigatório",
                })}/>
                <TooltipComponent description="Digite a sua Senha"  className={`_input_icon`}>
                    <IconPassword></IconPassword>
                </TooltipComponent>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5 }}className="flex gap-1">
                <input type="checkbox" name="" id="session-check" className="hidden" checked={isLocal}/>
                <div className="flex gap-2 items-center justify-center text-gray text-sm font-mono cursor-pointer" onClick={() => setLocal(!isLocal)}>
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
                className="w-full"
            >
                <DefaultButton
                    rounded="md"
                    wide="full"
                    type="submit"
                    variant="blue"
                >
                    Entrar
                </DefaultButton>
            </motion.div>
        </form>
    );
}
