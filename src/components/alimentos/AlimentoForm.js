
import styled from 'styled-components';
import {useState} from 'react';
import { createAlimento } from "../../services/alimento";
import { message } from "antd"
import{ Link as LinkR } from 'react-router-dom';




const FormH1 = styled.h1`
margin-bottom: 10px;
font-family: 'Montserrat', sans-serif;
color: #333333;
font-size: 20px;
font-weight: 400;
text-align: center;
`;

const FormBtnLink = styled.button`
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

const Select = styled.select`
  padding: 10px 10px;
  margin-bottom: 32px;
  border-width: thin;
  font-family: 'Montserrat', sans-serif;
  outline:none;
  border-radius: 4px

       option {
         color: black;
         background: white;
         font-weight: small;
         display: flex;
         white-space: pre;
         min-height: 20px;
         padding: 0px 2px 1px;
       }
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

function AlimentoForm() {
    const [alimentoData, setAlimentoData] = useState({})
    
    const handleChange =(e)=>{
     setAlimentoData({
       ...alimentoData,[e.target.name]:e.target.value
     })
    }
    async function handleSubmit(e) {
       e.preventDefault()
        console.log(e)
        try {
          await createAlimento(alimentoData)
          message.success("Alimento creado")
        } catch (error) {
          console.log("hay un error",error.response)
        }
      }
      console.log (alimentoData)
    return (
           
            <Form onSubmit={handleSubmit}>
            <FormH1>Agrega un alimento</FormH1>
            <FormLabel htmlFor= 'for'>Nombre</FormLabel>
            <FormInput
                    id='name'
                    name='name' 
                    label='name' 
                    onChange={handleChange}
                    placeholder="Nombre..."
            />
             <FormLabel htmlFor= 'for'>Calorias</FormLabel>
             <FormInput
                    id='kcal'
                    name='kcal' 
                    label='kcal'
                    placeholder="Calorías"
                    onChange={handleChange}
                    
            />
             <FormLabel htmlFor= 'for'>Grupo alimenticio</FormLabel>
            <Select 
                    id='grupo_alimenticio'
                    name='grupo_alimenticio' 
                    label='grupo alimenticio'
                    placeholder="Selecciona"
                    >
                    <option name="Carbohidratos" onChange={handleChange}>Carbohidratos</option>
                    <option name= "Grasas" onChange={handleChange}>Grasas</option>
                    <option name= "Frutas" onChange={handleChange}>Frutas</option>
                    <option name= "Verduras" onChange={handleChange}>Verduras</option>
                    <option name= "Cereales" onChange={handleChange}> Cereales</option>

            </Select>
            <FormLabel htmlFor= 'for'>Cantidad</FormLabel>
             <FormInput
                    id='quantity'
                    name='quantity' 
                    label='quantity'
                    onChange={handleChange}
            />
              <FormBtnLink type='submit' to="/all"> Crear </FormBtnLink>
            </Form>
           
    )
}

export default AlimentoForm;