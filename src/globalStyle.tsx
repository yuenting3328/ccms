import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const NavBarContainer = styled.div`
    z-index: 1;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`

// export const FooterContainer = styled.div`
//     z-index: 1;
//     width: 100%;
//     margin-left: auto;
//     margin-right: auto;
// `

export default GlobalStyle;