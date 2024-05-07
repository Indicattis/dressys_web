import {
    IconCalendarMonth,
    IconCheck,
    IconDoorEnter,
    IconLockX,
    IconMan,
    IconPassword,
    IconPhone,
    IconPlus,
    IconUser,
    IconWoman,
    IconWriting,
} from "@tabler/icons-react";
import DefaultButton from "@/app/components/layout/button/button";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import ClientDTO from "@/data/types/client";
import { useUserToken } from "@/data/hooks/useSession";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { client_sign } from "@/data/contexts/client";
import { useState } from "react";
import {
    checkPasswordStrength,
    checkRepeatPassword,
    convertToISOString,
    handleDateChange,
    handleEmailChange,
    handlePhoneChange,
} from "@/utils/formatter";
import ProgressBarDefault from "@/layout/progressbar_levels";
import { IconLockCheck } from "@tabler/icons-react";

export default function AccessSignComponent() {
    const { register, handleSubmit } = useForm<ClientDTO>();
    const [phone, setPhone] = useState<string>("");
    const [birth, setBirth] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const [mailErrorMessage, setMailErrorMessage] = useState("");
    const [passErrorMessage, setPassErrorMessage] = useState(0);
    // const [genre, setGenre] = useState(0);

    const onSubmit = async (data: ClientDTO) => {
        data.client_birthday = convertToISOString(birth);
        data.client_phone = phone;
        data.client_password = password;
        data.client_mail = email;
        try {
            const response = await client_sign(data);
            if (response != undefined) {
                toast.info("Usuário cadastrado com sucesso! ");
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
            className="flex flex-col gap-3 items-center w-full"
        >
            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 }}
            >
                <input
                    placeholder="Nome"
                    type="text"
                    className={`_input`}
                    required
                    {...register("client_name", {
                        required: "Este campo é obrigatório",
                    })}
                />
                <div className={`_input_icon_2`}>
                    <IconWriting></IconWriting>
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
                    onChange={(event) =>
                        handleEmailChange(event, setEmail, setMailErrorMessage)
                    }
                    placeholder="E-mail"
                    value={email}
                    type="text"
                    required
                    className={`_input ${
                        mailErrorMessage == "E-mail inválido"
                            ? "focus:text-red-500"
                            : "focus:text-green-500"
                    }`}
                />
                <div className={`_input_icon_2`}>
                    <IconUser></IconUser>
                </div>
            </motion.div>
            {mailErrorMessage && (
                <div
                    className={`font-mono text-sm ${
                        mailErrorMessage == "E-mail inválido" && "text-red-500"
                    }`}
                >
                    {mailErrorMessage}
                </div>
            )}
            {/* <motion.div
                className={" flex gap-3 justify-center items-center w-full"}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.5 }}
            >
                <label
                    htmlFor="genre-m"
                    className={`transition-all  cursor-pointer p-2 rounded-full hover:scale-110  ${
                        genre == 1
                            ? "bg-gradient-to-tr from-[#4F7D95b1] to-blue text-white"
                            : "text-gray"
                    }`}
                    onClick={() => setGenre(1)}
                >
                    <IconMan />
                </label>
                <input
                    className={"hidden"}
                    type="radio"
                    id="genre-m"
                    value={`M`}
                    {...register("client_genre", {})}
                />
                <label
                    htmlFor="genre-f"
                    className={`transition-all  cursor-pointer p-2 rounded-full hover:scale-110  ${
                        genre == 2
                            ? "bg-gradient-to-tr from-red-400 to-pink text-white"
                            : "text-gray"
                    }`}
                    onClick={() => setGenre(2)}
                >
                    <IconWoman />
                </label>
                <input
                    className={"hidden"}
                    type="radio"
                    id="genre-f"
                    value={`O`}
                    {...register("client_genre", {})}
                />
                <label
                    htmlFor="genre-others"
                    className={`transition-all  cursor-pointer p-2 rounded-full hover:scale-110  ${
                        genre == 3 ? "bg-gray text-white" : "text-gray"
                    }`}
                    onClick={() => setGenre(3)}
                >
                    <IconPlus />
                </label>
                <input
                    className={"hidden"}
                    type="radio"
                    id="genre-others"
                    value={`O`}
                    {...register("client_genre", {})}
                />
            </motion.div> */}

            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.7 }}
            >
                <input
                    onChange={(event) => handlePhoneChange(event, setPhone)}
                    placeholder="Telefone"
                    value={phone}
                    type="text"
                    required
                    className={`_input`}
                />
                <div className={`_input_icon_2`}>
                    <IconPhone></IconPhone>
                </div>
            </motion.div>

            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.9 }}
            >
                <input
                    onChange={(event) => handleDateChange(event, setBirth)}
                    placeholder="Data de nascimento"
                    type="text"
                    required
                    className={`_input`}
                    value={birth}
                />
                <div className={`_input_icon_2`}>
                    <IconCalendarMonth></IconCalendarMonth>
                </div>
            </motion.div>
            <motion.div
                className={`_input_wide flex w-full`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1.1 }}
            >
                <div className="w-full">
                <ProgressBarDefault color={passErrorMessage}></ProgressBarDefault>

                </div>
                <div className=" flex items-end justify-center">
                    {passErrorMessage == 5 ? (
                        <IconLockCheck color="rgb(34, 197, 94)"></IconLockCheck>
                    ) : (
                        <IconLockX color="rgb(254, 240, 244)"></IconLockX>
                    )}
                </div>
                {/* {passErrorMessage != 0 ? (
                    <div
                        className={`flex flex-col justify-end items-center w-full max-w-1/3 text-nowrap
                ${passErrorMessage === 3 && "text-green-500"}
                ${passErrorMessage === 2 && "text-yellow-400"}
                ${passErrorMessage === 1 && "text-red-500"}
                ${passErrorMessage === 4 && "text-red-500"}
                ${passErrorMessage === 5 && "text-green-500"}
                font-mono text-sm`}
                    >
                        {passErrorMessage == 4 && "As senhas não coincidem!"}
                        {passErrorMessage == 5 && "As senhas coincidem!"}
                    </div>
                ) : (
                    ""
                )} */}
            </motion.div>
            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1.3 }}
            >
                <input
                    onChange={(event) =>
                        checkPasswordStrength(
                            event,
                            setPassword,
                            setPassErrorMessage
                        )
                    }
                    placeholder="Senha"
                    type="password"
                    value={password}
                    required
                    className={`_input`}
                />
                <div className={`_input_icon_2`}>
                    <IconPassword></IconPassword>
                </div>
            </motion.div>
            <motion.div
                className={`_input_wide`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1.5 }}
            >
                <input
                    onChange={(event) =>
                        checkRepeatPassword(
                            event,
                            password,
                            setPassErrorMessage
                        )
                    }
                    placeholder="Repetir senha"
                    type="password"
                    className={`_input`}
                    required
                />
                <div className={`_input_icon_2`}>
                    <IconPassword></IconPassword>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 1.7 }}
                className="w-full"
            >
                <DefaultButton
                    rounded="md"
                    wide="full"
                    type="submit"
                    variant="pink"
                >
                    Confirmar<IconCheck />
                </DefaultButton>
            </motion.div>
        </form>
    );
}
