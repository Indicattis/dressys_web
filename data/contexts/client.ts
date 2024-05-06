import { serverUrl } from "@/data/config";
import ClientDTO from "@/data/types/client";
import axios from "axios";


export const client_login = async (infos: ClientDTO) => {
    const data = {
        client_mail: infos.client_mail,
        client_password: infos.client_password
    }
    try {
        const response = await axios.post(`${serverUrl}/client-access`, data);
        
        sessionStorage.setItem('token', response.data.token);

        return response.data

    } catch (error) {
        throw error;
    }
};

export async function client_sign(data: any) {
    try {
        const response = await axios.post(`${serverUrl}/client-insert`, data);
        console.log(response.data);
        return response.data; // Retorna os dados do cliente cadastrado
    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao cadastrar cliente - Status:", error.response.status);
            console.error("Mensagem de erro:", error.response.data);
            throw new Error(error.response.data.error); // Lança apenas a mensagem de erro
        } else if (error.request) {
            // A requisição foi feita, mas não houve resposta do servidor
            console.error("Não foi recebida resposta do servidor.");
            throw new Error("Não foi possível conectar ao servidor."); // Lança o erro para tratamento no front-end
        } else {
            // Ocorreu um erro durante a requisição
            console.error("Erro ao fazer a requisição:", error.message);
            throw new Error("Erro durante a requisição."); // Lança o erro para tratamento no front-end
        }
    }
}



export const getToken = () => {
    return sessionStorage.getItem('token');
};