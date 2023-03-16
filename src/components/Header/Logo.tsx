import styled from "styled-components";
import logoImage from "../../assets/images/logo.png"

const LogoWrapper = styled.div`
    width: 100px;
    padding: 5px;
    
    img {
        height: 50px;
    }
`

const Logo = () => {
    return (
        <LogoWrapper>
            <img src={logoImage} alt="" />
        </LogoWrapper>
    )
}

export default Logo;