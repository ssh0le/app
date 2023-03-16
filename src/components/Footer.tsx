import styled from 'styled-components'
import sharedStyles from '../assets/styles/sharedStyle'
import { baseStyle } from '../assets/styles/baseStyle'

const FooterWrapper = styled.footer`
    ${sharedStyles};
    height: ${baseStyle.sizes.footer}vh;
    border: none;
    font-size: 20px;
    display: flex;
    align-items:center;
    justify-content: center;
    background: radial-gradient(circle, rgba(176,171,239,1) 0%, rgba(175,211,253,1) 100%);
    a {
        color: black;
    }
`

const Footer = () => {

    return(<FooterWrapper>
        <a href="https://github.com/ssh0le">Git link</a>, 2023
    </FooterWrapper>)
}

export default Footer;