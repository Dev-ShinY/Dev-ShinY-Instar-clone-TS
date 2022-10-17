import { FunctionComponent } from 'react'
import { isLoggendInVar } from './apollo';

const Home: FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => isLoggendInVar(false)}>LogOut</button>
    </div>
  )
}
export default Home;