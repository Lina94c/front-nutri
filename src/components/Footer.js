import styled from 'styled-components';
import {Link} from 'react-router-dom';



export const FooterContainer =styled.footer`
    background-color:#c6aa8e;
`

export const FooterWrap = styled.div`
    padding: 10px 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;
    @media screen and (max-width: 820px) {
        padding-top: 20px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex; 
    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const FooterLinksItems = styled.div`
    display: flex;
    flex-direction: column;
    font-family:'Montserrat', sans-serif;
    align-items: flex-start;
    margin: 16px;
    text-aling: left;
    width: 100px;
    box-sizing: border-box;
    color: #fff;
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.h1`
    font-size: 14px;
    font-family:'Montserrat', sans-serif;
    margin-bottom: 16px;
`

export const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 12px;
    font-family:'Montserrat', sans-serif;
    &:hover {
        color: #ffe11b;
        transition: 0.3s ease-out
    }
`

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;
@media screen and (max-width: 820px){
    flex-direction: column;
}
`

export const SocialLogo = styled(Link)`
    color: #fff;
    font-family:'Montez', cursive;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
`

export const Text = styled.small`
    color: #fff;
    font-family:'Montserrat', sans-serif;
    margin-bottom: 16px;
`

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Sobre nosotros</FooterLinkTitle>
                                <FooterLink to="/signin">Testimonios</FooterLink>
                                <FooterLink to="/signin">Preguntas frecuentes</FooterLink>
                                <FooterLink to="/signin">Términos y condiciones</FooterLink>
                                <FooterLink to="/signin">Sugerencias</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>Contáctanos</FooterLinkTitle>
                                <FooterLink to="/signin">Contacto</FooterLink>
                                <FooterLink to="/signin">Suporte</FooterLink>
                                <FooterLink to="/signin">Reviews</FooterLink>
                                <FooterLink to="/signin">Asesorías</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                    <Text>Nutrismart © 2021 All rights reserved</Text>
                        <SocialLogo to='/'>
                            Nutrismart
                        </SocialLogo>
                        
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
            
        </FooterContainer>
    )
}

export default Footer