import { FunctionComponent } from 'react'
import { isLoggendInVar } from './apollo';

const Login: FunctionComponent = () => {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={ () => isLoggendInVar(true)}>LogIn</button>
    </div>
  );
}
export default Login;