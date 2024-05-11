import { serverUrl } from "@/data/config";
import ClientDTO from "@/data/types/client";
import axios from "axios";


export const client_login = async (infos: ClientDTO, isLocal: boolean) => {
    const data = {
        client_mail: infos.client_mail,
        client_password: infos.client_password
    }
    try {
        const response = await axios.post(`${serverUrl}/client-access`, data);
        const token = response.data.token;
        if(isLocal) {
            localStorage.setItem('token', token);
        } else {
            sessionStorage.setItem('token', token);
        }
        return response.data

    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao realizar login - Status:", error.response.status);
            console.error("Mensagem de erro:", error.response.data);
            throw new Error(error.response.data.error);
        } else if (error.request) {
            console.error("Não foi recebida resposta do servidor.");
            throw new Error("Não foi possível conectar ao servidor.");
        } else {
            console.error("Erro ao fazer a requisição:", error.message);
            throw new Error("Erro durante a requisição.");
        }
    }
};

export const client_login_google_oauth = async (infos: any) => {
    const data = {
        client_mail: infos.client_mail
    }
    try {
        const response = await axios.post(`${serverUrl}/client-access-google-oauth`, data);
        const token = response.data.token;
            sessionStorage.setItem('token', token);
            return response.data
    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao realizar login pelo Google oAuth - Status:", error.response.status);
            console.error("Mensagem de erro:", error.response.data);
            throw new Error(error.response.data.error);
        } else if (error.request) {
            console.error("Não foi recebida resposta do servidor.");
            throw new Error("Não foi possível conectar ao servidor.");
        } else {
            console.error("Erro ao fazer a requisição:", error.message);
            throw new Error("Erro durante a requisição.");
        }
    }
};

export async function client_sign(data: any) {
    try {
        const response = await axios.post(`${serverUrl}/client-insert`, data);
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            console.error("Erro ao cadastrar cliente - Status:", error.response.status);
            console.error("Mensagem de erro:", error.response.data);
            throw new Error(error.response.data.error);
        } else if (error.request) {
            console.error("Não foi recebida resposta do servidor.");
            throw new Error("Não foi possível conectar ao servidor.");
        } else {
            console.error("Erro ao fazer a requisição:", error.message);
            throw new Error("Erro durante a requisição.");
        }
    }
}



export const getToken = () => {
    return sessionStorage.getItem('token');
};