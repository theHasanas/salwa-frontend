import React from "react";
import { useState } from "react";
import { ThemeButton } from ".././styles";
import SignIn from "../modals/SignIn";

const SignInButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <ThemeButton onClick={openModal}>Sign in</ThemeButton>
      <SignIn isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignInButton;
