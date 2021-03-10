import styled from 'styled-components';
import React, {useState} from 'react';
import Video from '../images/happy.mp4';
import { Button } from './Button';


export const BannerContainer = styled.div`
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    z-index: 1;
    `


export const BannerBg = styled.div`
    top: 0;
    bottom: 0;
    width: cover;
    height: 100%;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit:cover;
    object-fit: cover;
    background: black;
`;

export const BannerContent = styled.div`
    z-index: 3;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

export const BannerH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: 768px) {
        font-size: 40px;
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const BannerP = styled.p`
    font-family: 'Montserrat', sans-serif;
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    
    
   
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const BannerBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Banner = () => {
    
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
        
        return (
        <BannerContainer>
            <BannerBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </BannerBg>
            <BannerContent>
                <BannerH1>Toma el control de tu vida</BannerH1>
                <BannerP>
                    Alcanza tus objetivos y vive más saludable
                </BannerP>
                <BannerBtnWrapper>
                    <Button to="signup" 
                    >
                        Registrate 
                    </Button>
                </BannerBtnWrapper>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner;