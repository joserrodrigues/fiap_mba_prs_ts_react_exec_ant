import React, { useState, useContext } from 'react';
import useAPI, { useApiReturnType } from '../../Services/APIs/Common/useAPI';
import auth from '../../Services/APIs/Auth/Auth';
import LoginView from './LoginView';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { FormikHelpers } from 'formik';

export type FormDataType = {
  email: string;
  password: string;  
};

const LoginController = () => {

    const authLoginAPI: useApiReturnType = useAPI(auth.login);
    const [connectMessage, setConnectMessage] = useState<string>("");
    const [connectCode, setConnectCode] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const navigate:NavigateFunction = useNavigate();

    const onSubmit = (values: FormDataType, formikHelpers: FormikHelpers<FormDataType>) => {
        
        console.log(values);

        let infoSend = {
            email: values.email,
            password: values.password,            
        }

        setIsLoading(true);
        authLoginAPI
          .requestPromise(infoSend)
          .then((info: any) => {
            // console.log(info);
            setIsLoading(false);
            navigate("/main");
            // setConnectCode(1);
            // setConnectMessage("Colaborador logado com sucesso");
          })
          .catch((error: string) => {
            setIsLoading(false);
            setConnectCode(-1);
            setConnectMessage(
              "O servidor retornou um erro= " + error
            );
          });
    }

    const signInSchema = Yup.object().shape({
        email: Yup.string().email().required("O email é obrigatório"),
        password: Yup.string().required("A senha é obrigatório").min(4, "A senha está muito curta"),        
    });

    return (
        <LoginView 
            onSubmit={onSubmit}
            signInSchema={signInSchema}
            isLoading={isLoading}
            connectMessage={connectMessage}
            connectCode={connectCode}/>
    );
};

export default LoginController;