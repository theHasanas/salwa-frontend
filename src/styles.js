//styled-components
import styled, { createGlobalStyle } from "styled-components";

//link
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor}

  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 0.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.pink};
`;

export const Description = styled.h4`
  text-align: center;
  font-family: Papyrus;
`;

export const ShopImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 45%;
`;

export const ListWrapper = styled.div`
  margin-top: 5%;

  align-items: center;
  justify-content: center;
  display: flex;
`;

export const CookieWrapper = styled.div`

margin-left: 1%;

  img {
    width: 250px;
    height: 200px;
   margin-left: 10%
  }
  p{

 text-align: center;
  }
  .cookie-price{
    font-weight: bold;
    text-align: center;
    color: ${(props) => props.theme.pink}
  }

  }
`;

export const Logo = styled(Link)`
  padding: 0.25em;

  img {
    width: 5rem;
    border-radius: 100%;
  }
`;
export const ToCookieList = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.backgroundColor};
`;

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const DetailWrapper = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 80%;

  img {
    width: 40%;
    float: left;
  }

  p {
    vertical-align: middle;
  }
`;
