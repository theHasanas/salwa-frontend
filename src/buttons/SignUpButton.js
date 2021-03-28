import React from "react";
import { useState } from "react";
import { ThemeButton } from ".././styles";
import Signup from "../modals/Signup";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <ThemeButton onClick={openModal}>Sign up</ThemeButton>
      <Signup isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
