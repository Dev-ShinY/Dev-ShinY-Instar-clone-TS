import { FunctionComponent } from 'react'
import { logUserOut } from '../apollo';

const Home: FunctionComponent = () => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={ () => logUserOut()}>LogOut</button>
    </div>
  )
}
export default Home;