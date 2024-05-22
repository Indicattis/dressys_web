

export const handlePhoneChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
    setPhone: any,
  ) => {
    const value = event.target.value;
    const phoneNumbers = value.replace(/[^0-9]/g, '');
  
    let formattedPhone = '';

  if (phoneNumbers.length <= 2) {
    formattedPhone = phoneNumbers;
  } else if (phoneNumbers.length <= 7) {
    formattedPhone = `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(2)}`;
  } else if (phoneNumbers.length <= 11) {
    formattedPhone = `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
      2,
      7
    )}-${phoneNumbers.slice(7)}`;
  } else {
    formattedPhone = `(${phoneNumbers.slice(0, 2)}) ${phoneNumbers.slice(
      2,
      7
    )}-${phoneNumbers.slice(7, 11)}`;
  }

  setPhone(formattedPhone);

};

export const handleDateChange = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setDate: any,
) => {
  const value = event.target.value;
  const dateDigits = value.replace(/[^0-9]/g, '');

  let formattedDate = '';

  if (dateDigits.length <= 2) {
    formattedDate = dateDigits;
  } else if (dateDigits.length <= 4) {
    formattedDate = `${dateDigits.slice(0, 2)}/${dateDigits.slice(2)}`;
  } else {
    formattedDate = `${dateDigits.slice(0, 2)}/${dateDigits.slice(2, 4)}/${dateDigits.slice(4, 8)}`;
  }

  setDate(formattedDate);
};


export const handleEmailChange = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setEmail: any,
  setErrorMessage: any
) => {
  const value = event.target.value;


  // Verifica se o valor inserido contém "@" e ".com"
  if (value.includes("@") && value.includes(".com")) {
    setErrorMessage("");
  } else {
    setErrorMessage("E-mail inválido"); 
  }

  setEmail(value); 

};


export const checkPasswordStrength = async (
  event: React.ChangeEvent<HTMLInputElement>,
  setPassword: any,
  setErrorMessage: any
) => {
  const value = event.target.value;

  // Expressões regulares para verificar a presença de caracteres especiais, números e letras maiúsculas
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const numberRegex = /\d/;
  const upperCaseRegex = /[A-Z]/;

  // Inicializa a força da senha como fraca
  let strength = 1;

  // Verifica a presença de caracteres especiais, números e letras maiúsculas
  const containsSpecialChar = specialCharRegex.test(value);
  const containsNumber = numberRegex.test(value);
  const containsUpperCase = upperCaseRegex.test(value);

  // Verifica o comprimento da senha
  const length = value.length;

  // Se a senha contiver caracteres especiais, números e letras maiúsculas, considera-se forte
  if (containsSpecialChar && containsNumber && containsUpperCase && length >= 8) {
    strength = 3;
  }
  // Se a senha não for forte, mas contiver caracteres especiais, números e/ou letras maiúsculas, considera-se média
  else if ((containsSpecialChar || containsNumber || containsUpperCase) && length >= 6) {
    strength = 2;
  }

  // Define a força da senha e mensagens de erro
  setPassword(value);
  setErrorMessage(strength);
};

export const checkRepeatPassword = async (
  event: React.ChangeEvent<HTMLInputElement>,
  password: any,
  setErrorMessage: any,
) => {
  const value = event.target.value;

  // Expressões regulares para verificar a presença de caracteres especiais, números e letras maiúsculas
  if (value === password) {
    setErrorMessage(5)
  }
  else {
    setErrorMessage(4)
  }
};

export const convertToISOString = (birthString: string): string => {
  // Separando o dia, mês e ano da string
  const parts = birthString.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10) - 1; // Mês é indexado de 0 a 11 em JavaScript
  const year = parseInt(parts[2], 10);

  // Criando um objeto Date com os valores extraídos
  const birth = new Date(year, month, day);

  // Formatando a data de aniversário para o formato ISO 8601
  return birth.toISOString();
}