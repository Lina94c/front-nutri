import { message } from "antd"
import { signupFn } from "../services/auth";
import {useState} from 'react'
import styled from 'styled-components';
import img from '../images/nature.png';

    const Container = styled.div`
    background-image: url(${img});
    position:inherit;
    left: 0;
    right: 0;
        `;

    const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media screen and (max-width: 300px) {
    }
    `;
    
    const FormContent = styled.div`
        margin-top:40px;
        margin-bottom:40px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        @media screen and (max-width: 480px) {
            padding: 10px;
        }
    `;

    const Form = styled.form`
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

    const FormH1 = styled.h1`
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #333333;
        font-size: 20px;
        font-weight: 400;
        text-align: center;
    `;

    const FormLabel = styled.label`
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

  const [userData, setUserData] = useState({})

  const handleChange =(e)=>{
   setUserData({
     ...userData,[e.target.name]:e.target.value
   })
  }
  async function handleSubmit(e) {
     e.preventDefault()
      console.log(e)
      try {
        await signupFn(userData)
        message.success("Usuario creado")
      } catch (error) {
        console.log("hay un error",error.data.response)
      }
    }
 console.log (userData)
  return (
    <Container>
      <FormWrap>
      <FormContent>
        <Form onSubmit={handleSubmit}>
        <FormH1>Crea tu usuario</FormH1>
        <FormLabel htmlFor= 'for'>Nombre usuario</FormLabel>
        <FormInput
        id='username'
        name='username' 
        label='username' 
        onChange={handleChange}
        required />

        <FormLabel htmlFor= 'for'>e-mail</FormLabel>
        <FormInput
        id='email'
        type='email'
        name='email' 
        label='email'
        onChange={handleChange}
        required />
        <FormLabel htmlFor= 'for'>Password</FormLabel>
        <FormInput 
        id='password'
         type='password' 
         name='password'
         onChange={handleChange}
         required />
        <FormButton type='submit'>Registrar</FormButton>
        </Form>
        </FormContent>
      </FormWrap>
    </Container>
  )
}

export default Signup