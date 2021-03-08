import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 300px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
        `;

        export const FormWrap = styled.div`
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 300px) {
        }
        `;

        export const Icon = styled(Link)`
            margin-left: 32px;
            margin-top: 32px;
            text-decoration: none;
            color: #fff;
            font-weight: 700;
            font-size: 32px;
            @media screen and (max-width: 480px) {
                margin-keft: 16px;
                margin-top: 8px;
            }
        `;

        export const FormContent = styled.div`
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            @media screen and (max-width: 480px) {
                padding: 10px;
            }
        `;

        export const Form = styled.form`
        background: #ffff;
        max-width: 400px;
        height: auto;
        width: 100%;
        z-index: 1;
        display: grid;
        margin: 0 auto;
        padding: 10px 32px;
        border-radius: 20px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
        @media screen and (max-width: 400px) {
            padding: 32px 32px;
        }
        `;

        export const FormH1 = styled.h1`
            font-family:'Montserrat', sans-serif;
            margin-bottom: 40px;
            color: #333333;
            font-size: 20px;
            font-weight: 400;
            text-align: center;
        `;

        export const FormLabel = styled.label`
        margin-bottom: 8px;
        font-size: 13px;
        font-family: 'Montserrat', sans-serif;
        color: #red;
        `;

        export const FormInput = styled.input`
        padding: 10px 10px;
        margin-bottom: 32px;
        font-family: 'Montserrat', sans-serif;
        border-radius: 4px;
        `;

        export const FormButton = styled.button`
            background: #c6aa8e;
            max-width: 130px;
            padding: 16px 0;
            border: none;
            border-radius: 50px;
            color: #fff;
            font-size: 12px;
            font-family:'Montserrat', sans-serif;
            outline:none;
            border:none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            &:hover {
                transition: all 0.2s ease-in-out;
                background: rgb(211,232,186);
                color: #010606;
            }
            `;

        export const Text = styled.span`
            text-align: ClientRect;
            font-family:'Montserrat', sans-serif;
            margin-top: 24px;
            color: #333333;
            font-size: 13px;
        `;

        const SignIn = () => {
            return (
                <>
                    <Container>
                        <FormWrap>
                            <Icon to="/">NutriSmart</Icon>
                            <FormContent>
                                <Form action="#">
                                    <FormH1>Inicia sesión</FormH1>
                                    <FormLabel htmlFor= 'for'>Email</FormLabel>
                                    <FormInput type='email' required />
                                    <FormLabel htmlFor= 'for'>Password</FormLabel>
                                    <FormInput type='password' required />
                                    <FormButton type='submit'>Continuar</FormButton>
                                    <Text>¿Olivdaste tu contraseña?</Text>
                                </Form>
                            </FormContent>
                        </FormWrap>
                    </Container>   
                </>
            )
        }
        
        export default SignIn;
