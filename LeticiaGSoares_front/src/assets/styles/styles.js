import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'

const colors = {
    white: "#fff",
    darkGray: "#161616",
    red: "#C60E0E"
}


export const PrimaryBtn = styled(Button)`
    background-color: ${colors.darkGray};
    border-color: ${colors.darkGray};
    
`
export const SecondaryBtn = styled(Button)`
    background-color: transparent;
    border-color: ${colors.darkGray};
    color: ${colors.darkGray};
`

export const Logo = styled.h2`
    font-family: 'Concert One';
    
`
export const Footer = styled.footer`
    background-color: ${colors.darkGray};
    padding: 20px 60px;
    display:flex;
    justify-content: space-between;
    align-items:center;

    h2{
        width: 180px
    }

    *{
        color: ${colors.white}
    }
`
export const SocialMedia = styled.div`
    display:flex;
    gap: 40px;

    img{
        height: 25px;
    }
`
export const Header = styled.header`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 30px;
    border-bottom: 1px solid ${colors.darkGray};

    button {
        padding: 5px 70px;
    }
`
export const Menu = styled.nav`
    display:flex;
    align-items:center;
    justify-content:center;
    padding: 20px;
    border-bottom: 1px solid ${colors.darkGray};
    
    a{
        color: ${colors.darkGray};
        text-decoration: none
    }
`
export const MenuLink = styled.a`

`
export const GalleryGrid = styled.div`
    min-height: 100vh;
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    gap: 10px;
    padding: 15px;

    img:nth-child(1),
    img:nth-child(6),{
        grid-column: span 2
    }

    img:nth-child(2),
    img:nth-child(5){
        grid-row: span 2;
    }
`
export const Post = styled.img`
    background-color: red;
    min-height:400px;
`

export const Modal = styled.div`
    background-color: rgba(0,0,0, .5);
    overflow: auto;
    height: 100%;
    width: 100%;
    position:fixed;
    display:flex;
    align-items:center;
    justify-content: center;
`
export const ModalContent = styled.div`
    background-color: ${colors.white};
    height: 350px;
    width: 500px;
    display:flex;
    flex-direction: column;
    text-align: center;

    h3{
        padding: 15px;
        text-align: center;
        width: 100%;
        border-bottom: 1px solid ${colors.darkGray};
    }
`
export const Form = styled.div`
    display:flex;
    flex-direction: column;
    text-align: start;
    padding: 30px 60px;

    input {
        border: 1px solid ${colors.darkGray};
        border-radius: 8px;
        padding: 8px;
    }

    div{
        width: 100%;
        display:flex;
        justify-content: space-between;

        button{
            width: 45%;
        }
    }
`