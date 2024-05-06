"use client"

import { jwtDecode  } from "jwt-decode";

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("token");
    return token || null;
  }
  return null;
};

export const getTokenInfo = (): { id: any; name: any; mail: any, number: any } | null => {
  const token = getToken();
  if (token) {
    try {
      const decodedToken: any = jwtDecode(token);
      const { id, client_name, client_mail, client_number } = decodedToken;
      return {
        id: id || "",
        name: client_name || "",
        mail: client_mail || "",
        number: client_number || ""

      };
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  }
  return null;
};


// userUtils.ts

import { useEffect, useState } from 'react';

export const useUserToken = () => {
  const [UserLoged, setUserLoged] = useState<boolean>(false);
  const [UserName, setUserName] = useState<string>('')
  const [UserMail, setUserMail] = useState<string>('')
  const [UserID, setUserID] = useState<string>('')
  const [UserPhone, setUserPhone] = useState<string>('')

  useEffect(() => {
    try {
      const tokenInfo = getTokenInfo();
      if (!tokenInfo) {
        setUserLoged(false);
      } else {
        setUserLoged(true);
        setUserName(tokenInfo.name);
        setUserID(tokenInfo.id);
        setUserPhone(tokenInfo.number);
        setUserMail(tokenInfo.mail);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return { UserLoged, UserName, UserPhone, UserID, UserMail};
};
