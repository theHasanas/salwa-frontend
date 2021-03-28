import { useState } from "react";
//modal
import Modal from "react-modal";

//style
import { ThemeButton } from ".././styles";
import App from "../App";
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

const SignIn = ({ closeModal, isOpen }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  //handle change
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  //handle submit
  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signin(user);

    // only close if successful
    closeModal();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Sign In Modal"
    >
      <h3>Sign In</h3>
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
        <ThemeButton className="btn float-right" type="submit">
          Sign in
        </ThemeButton>
      </form>
    </Modal>
  );
};

export default SignIn;
