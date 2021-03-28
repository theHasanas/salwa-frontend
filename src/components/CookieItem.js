import React from "react";

// Styling
import { CookieWrapper } from "../styles";

//observer
import { observer } from "mobx-react";

const CookieItem = (props) => {
  const cookie = props.cookie;
  const alertCookieName = () => alert(cookie.name);

  return (
    <CookieWrapper>
      <img
        alt={cookie.name}
        src={cookie.image}
        onClick={() => alertCookieName}
      />
      <p>{cookie.name}</p>
      <p className="cookie-price">{cookie.price} KD</p>
    </CookieWrapper>
  );
};

export default observer(CookieItem);
