import { IconDoorEnter, IconPassword, IconUser, } from "@tabler/icons-react";
import DefaultButton from "@/app/components/layout/button/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ClientDTO from "@/data/types/client";
import { client_login } from "@/data/contexts/client";
import { useUserToken } from "@/data/hooks/useSession";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AccessLoginComponent() {
    const {UserLoged, UserName} = useUserToken();
    const { register, handleSubmit } = useForm<ClientDTO>();

    const onSubmit = async (data: ClientDTO) => {
        try {
            const response = await client_login(data);

            if (response.authenticated) {
                toast.info("Seja bem vinda a melhor e mais linda amiga do João Pedro! "+UserName)
            } else {
                toast.error("Usuário ou senha incorretos! A Amanda saberia")
            }
        } catch (error) {
            console.error(error);
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
                <div className={`_input_icon`}>
                    <IconUser></IconUser>
                </div>
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
                <div className={`_input_icon`}>
                    <IconPassword></IconPassword>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5 }}className="flex gap-1">
                <input type="checkbox" name="" id="session-check"/>
                <label className="text-gray text-sm font-mono" htmlFor="session-check">Manter-me conectado</label>
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
