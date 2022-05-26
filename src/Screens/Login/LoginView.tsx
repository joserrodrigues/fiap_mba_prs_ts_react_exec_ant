import { FC, ReactElement } from 'react';
import { Grid, Typography, Stack, CircularProgress, Alert, AlertProps } from '@mui/material';
import { Formik, Form, ErrorMessage, FormikHelpers } from "formik";
import CustomTextField from '../../Components/CustomTextField/CustomTextField';
import CustomButton from '../../Components/CustomButton/CustomButton'
import {If, Then} from 'react-if'
import { AssertsShape, ObjectShape, TypeOfShape } from "yup/lib/object";
import { ObjectSchema } from "yup";
import { AnyObject } from "yup/lib/types";


import './Login.css';
import { FormDataType } from './LoginController';

type IProps = {  
  onSubmit: ( values: FormDataType,formikHelpers: FormikHelpers<FormDataType>) => void | Promise<any>;
  signInSchema: ObjectSchema<ObjectShape, AnyObject,TypeOfShape<ObjectShape>, AssertsShape<ObjectShape>>;
  isLoading: boolean;
  connectCode: number;
  connectMessage: string;
};

const LoginView:FC<IProps> = ({ onSubmit, signInSchema, isLoading, connectCode, connectMessage }) => {
    let message:ReactElement<AlertProps> | undefined;

    if (connectMessage !== "") {
        message = (
            <Alert severity="error" variant="filled"> {connectMessage} </Alert>
        );
    }    

    let initialDataForm: FormDataType = {
        email: "",
        password: "",    
    };
    return (
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item md={12}>
          <Formik
            initialValues={initialDataForm}
            validationSchema={signInSchema}
            onSubmit={onSubmit}
          >
            {(formik) => {
              const { values, setFieldValue, submitForm } = formik;
              return (
                <Form>
                  <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                    className="box"
                  >
                    <Grid item xs={12} md={6} className="boxLogin">
                      {message}
                      <Typography gutterBottom variant="h6" className="text">
                        Bem-vindo ao Sistema de Colaboradores
                      </Typography>
                      <div>
                        <CustomTextField
                          label="Email"
                          defaultValue={values.email}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFieldValue("email", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <ErrorMessage
                          name="email"
                          component="span"
                          className="infoError"
                        />
                      </div>
                      <div>
                        <CustomTextField
                          label="Senha"
                          type="password"
                          defaultValue={values.password}
                          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            setFieldValue("password", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <ErrorMessage
                          name="password"
                          component="span"
                          className="infoError"
                        />
                      </div>

                      <Stack
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={5}
                        className="divButtons"
                      >
                        <If condition={isLoading}>
                          <Then>
                            <CircularProgress />
                          </Then>
                        </If>
                        <If condition={!isLoading && connectCode !== 1}>
                          <Then>
                            <>
                              <CustomButton type="submit" onClick={submitForm}>
                                Logar
                              </CustomButton>
                            </>
                          </Then>
                        </If>
                      </Stack>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    );
};

export default LoginView;