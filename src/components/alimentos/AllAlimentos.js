import { useEffect, useState } from "react"
import styled from 'styled-components';
import { Row, Col, Typography, Button} from "antd"
import {useHistory} from "react-router-dom"
import { getAllAlimentos} from "../../services/alimento"

const Box = styled.div`
 max-width:200px;
`;

const FormH1 = styled.h1`
        margin-bottom: 10px;
        font-family: 'Montserrat', sans-serif;
        color: #333333;
        font-size: 17px;
        font-weight: 400;
    `;
   
   export const Text = styled.span`
    text-align: ClientRect;
    font-family:'Montserrat', sans-serif;
    margin-top: 24px;
    color: #333333;
    font-size: 13px;
`;

export const Title = styled.span`
    text-align: ClientRect;
    font-family:'Montserrat', sans-serif;
    margin-top: 24px;
    color: #333333;
    font-size: 13px;
`;

const CardContent = styled.div`
background: #ffff;
    height: auto;
    margin-top:20px;
    margin-bottom:20px;
    margin-rigth:20px;
    margin-left:20px;
    padding: 10px 32px;
    border-radius: 20px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  
    `;

const CardItem = styled.div`
margin-bottom: 8px;
font-family: 'Montserrat', sans-serif;
font-size: 13px;
`;


export const CardButton = styled.button`
        background: rgb(211,232,186);
        max-width: 130px;
        padding: 10px 40px;
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

function AllAlimentos () {
  const [alimento, setAlimento] = useState([])
  const history = useHistory()
  useEffect(() => {
    async function AllAlimentos() {
      try {
      const  { data} = await getAllAlimentos()
      
      setAlimento(data.alimentos)
      console.log(data)
      } 
      catch(error){
      console.log(error)
      }
    } 
  AllAlimentos()
  },[]
  )

  return (
    <>
    {alimento.map((comida, index)=>(

    <Box>
    <CardContent>
      <CardItem>
        <FormH1>{comida.name}</FormH1>
      </CardItem>
      <CardItem>
        <Title>
          kcal: <Text type='secondary'>{comida.kcal}</Text>
        </Title>
        </CardItem>
        <CardButton 
        block type='dashed'
        >
          Edit
        </CardButton>
        <CardButton
          style={{ margin: "5px 0" }}
          block
          onClick={() => history.goBack()}
        >
          Back
        </CardButton>
    </CardContent>
    </Box>
    
  ))}</>
  )
}

export default AllAlimentos