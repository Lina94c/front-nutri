import React from "react";
import styled from 'styled-components';
import { loginFn } from "../services/auth";
import {useState} from 'react'
import img from '../images/nature.png'

export const Container = styled.div`
    background-image: url(${img});
    position:inherit;
    left: 0;
    right: 0;
    
        `;

        export const FormWrap = styled.div`
        padding:40px;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 300px) {
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
        border-width: thin;
        font-family: 'Montserrat', sans-serif;
        border-radius: 4px;
        outline:none;
        `;

        export const FormButton = styled.button`
            background: rgb(211,232,186);
            max-width: 130px;
            padding: 16px 0;
            border: none;
            border-radius: 50px;
            color: black;
            font-size: 12px;
            font-family:'Montserrat', sans-serif;
            border:none;
            cursor: pointer;
            transition: all 0.2s ease-in-out;
            text-decoration: none;
            &:hover {
            transition: all 0.2s ease-in-out;
            background: #c6aa8e;
            color: white;
        }
        `;

        export const Text = styled.span`
            text-align: ClientRect;
            font-family:'Montserrat', sans-serif;
            margin-top: 24px;
            color: #333333;
            font-size: 13px;
        `;

        function SignIn () {
            const [userData, setUserData] = useState({})

            const handleChange =(e)=>{
            setUserData({
                ...userData,[e.target.name]:e.target.value
            })
            }
            async function handleSubmit(e) {
                e.preventDefault()
                loginFn(userData)
                }
            console.log (userData)

            return (
                <>
                    <Container>
                        <FormWrap>
                            <FormContent>
                                <Form onSubmit={handleSubmit}>
                                    <FormH1>Inicia sesión</FormH1>
                                    <FormLabel htmlFor= 'for'>Email</FormLabel>
                                    <FormInput 
                                    type='email' 
                                    name= 'email'
                                    onChange={handleChange}
                                    required />
                                    <FormLabel htmlFor= 'for'>Password</FormLabel>
                                    <FormInput 
                                    type='password'
                                    name='password'
                                    onChange={handleChange}
                                    required />
                                    <FormButton type='submit'>Continuar</FormButton>
                                    <Text>¿Olvidaste tu contraseña?</Text>
                                </Form>
                            </FormContent>
                        </FormWrap>
                    </Container>   
                </>
            )
        }
        
        export default SignIn;
