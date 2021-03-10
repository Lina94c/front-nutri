import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Button = styled(Link)`
    font-family:'Montserrat', sans-serif;
    border-radius: 50px;
    background:rgb(211,232,186);
    };
    padding:14px 48px;
    color: black;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;

    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff ;
        color: black;
    };
    }
`
