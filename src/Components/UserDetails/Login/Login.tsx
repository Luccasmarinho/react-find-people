import type { LoginTypes } from "../../../interfaces/interfaces";

const Login = ({ username }: LoginTypes) => {
  return (
    <ul>
      <li>
        <h3>Username</h3>
        <p>{username}</p>
      </li>
    </ul>
  );
};

export default Login;
