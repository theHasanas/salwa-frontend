import { observer } from "mobx-react";
import { useState } from "react";
//modal
import Modal from "react-modal";

//style
import { ThemeButton } from ".././styles";
import authStore from "../stores/authStore";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Signup = ({ closeModal, isOpen }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [passwordmsg, setPasswordmsg] = useState("");

  //handle change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });

    //check username
    if (event.target.name === "username") {
      authStore.checkUsername(user.username);
    }

    //check password
    if (event.target.name === "password") {
      if (event.target.value === "") setPasswordmsg("");
      else checkPasswordStrenth(event.target.value);
    }
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    closeModal();
  };

  //Check password strength
  const checkPasswordStrenth = (password) => {
    //I know ugly
    const hasOneNumber = /\d/.test(password); //has at least 1 number
    const hasOneSpecialCharacter = /[ !@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
      password
    ); //has at least 1 special character

    if (password.length < 5) {
      setPasswordmsg("too short");
    } else if (password.length > 7 && hasOneNumber && hasOneSpecialCharacter) {
      setPasswordmsg("Strong");
    } else if (hasOneNumber || hasOneSpecialCharacter) {
      setPasswordmsg("Moderate");
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Signup Modal"
    >
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <label>{authStore.checkUsername.message}</label>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <label>{passwordmsg}</label>
        <ThemeButton className="btn float-right" type="submit">
          Sign up
        </ThemeButton>
      </form>
    </Modal>
  );
};

export default observer(Signup);
