import { SetStateAction, Dispatch, FunctionComponent } from 'react'

interface LoginProps {
  setIsLoggendIn: Dispatch<SetStateAction<boolean>>;
}

const Login: FunctionComponent<LoginProps> = ({setIsLoggendIn}: LoginProps) => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={ ()=> setIsLoggendIn(true)}>LogIn</button>
    </div>
  );
}
export default Login;