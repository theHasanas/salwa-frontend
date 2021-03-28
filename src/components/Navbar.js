import React from "react";
// Styling
import { ThemeButton, Logo, ToCookieList, NavStyled } from "../styles";

//logo
import logo from "../images/cookie-logo.png";

//buttons
import SignupButton from "../buttons/SignUpButton";

//store
import authStore from "../stores/authStore";

//observer
import { observer } from "mobx-react";
import SignInButton from "../buttons/SignInButton";

const NavBar = (props) => {
  console.log(authStore.user);
  return (
    <NavStyled className="navbar navbar-expand-lg">
      <div className="navbar-nav center">
        <Logo className="navbar-brand" to="/">
          <img src={logo} alt="logo" />
        </Logo>
      </div>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          {authStore.user ? (
            <>
              <h3>Hello {authStore.user.username}</h3>
              {authStore.user.admin ? (
                <button onClick={() => authStore.secret()}>secret</button>
              ) : null}
            </>
          ) : (
            <>
              <SignInButton />
              <SignupButton />
            </>
          )}
          <ThemeButton>
            <ToCookieList className="nav-item" to="/cookies">
              Cookies
            </ToCookieList>
          </ThemeButton>
          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {props.currentTheme === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </div>
      </div>
    </NavStyled>
  );
};

export default observer(NavBar);
