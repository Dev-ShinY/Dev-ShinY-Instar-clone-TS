import { SetStateAction, Dispatch, FunctionComponent } from 'react'

interface LoginProps {
  setIsLoggendIn: Dispatch<SetStateAction<boolean>>;
}

const Home: FunctionComponent<LoginProps> = ({setIsLoggendIn}: LoginProps) => {
  return (
    <div>
      <h1>Home</h1>
      <button onClick={ ()=> setIsLoggendIn(false)}>LogOut</button>
    </div>
  )
}
export default Home;