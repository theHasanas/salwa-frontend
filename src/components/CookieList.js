import React from "react";

//store
import cookieStore from "../stores/cookieStore";

//observer
import { observer } from "mobx-react";

// Styling
import { ListWrapper } from "../styles";

//components
import CookieItem from "./CookieItem";

const CookieList = () => {
  //cookies list
  const cookieList = cookieStore.cookies
    .filter((cookie) => cookie.id > 1)
    .map((cookie) => <CookieItem cookie={cookie} key={cookie.id} />);
  const newCookie = {
    id: 4,
    name: "Baderrrrr",
    price: "2000",
    image: "🌕",
  };

  return (
    <ListWrapper>
      <button onClick={() => cookieStore.addCookie(newCookie)}>
        Add new Cookie
      </button>
      {cookieList}
    </ListWrapper>
  );
};

export default observer(CookieList);
