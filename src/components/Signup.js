import { Form, message } from "antd"
import { signupFn } from "../services/auth"
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    margin-top: 40px;
    left: 0;
    right: 0;
    top: 0;
        `;

        export const FormWrap = styled.div`
        height: 100%;
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

        export const Formu = styled.form`
        background: #ffff;
        max-width: 400px;
        height: auto;
        width: 50%;
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
            margin-bottom: 10px;
            font-family: 'Montserrat', sans-serif;
            color: #333333;
            font-size: 20px;
            font-weight: 400;
            text-align: center;
        `;

        export const FormLabel = styled.label`
        margin-bottom: 8px;
        font-family: 'Montserrat', sans-serif;
        font-size: 13px;
        `;

        export const FormInput = styled.input`
        padding: 10px 10px;
        margin-bottom: 32px;
        border-width: thin;
        font-family: 'Montserrat', sans-serif;
        outline:none;
        border-radius: 4px;
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

       

function Signup() {
  const [form] = Form.useForm()

  async function handleSubmit(userInfo) {
    try {
      await signupFn(userInfo)
      message.success("Account created")
    } catch (error) {
      message.error(error.response.data.message)
    }
  }

  return (
    <Container>
      <FormWrap>
      <FormContent>
        <Formu form={form}  layout='vertical'>
        <FormH1>Create your Account</FormH1>
        <FormLabel htmlFor= 'for'>Nombre usuario</FormLabel>
        <FormInput type='username' required />
        <FormLabel htmlFor= 'for'>e-mail</FormLabel>
        <FormInput type='email' required />
        <FormLabel htmlFor= 'for'>Password</FormLabel>
        <FormInput type='password' required />
        <FormButton onClick={handleSubmit}>Contraseña</FormButton>
        </Formu>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Signup