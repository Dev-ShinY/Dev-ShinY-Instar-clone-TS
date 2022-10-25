import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import AuthLayout from "../components/auth/AuthLayout";
import BottomBox from "../components/auth/BottomBox";
import Button from "../components/auth/Button";
import FormBox from "../components/auth/FormBox";
import Input from "../components/auth/Input";
import Separator from "../components/auth/Separator";
import PageTitle from "../components/PageTitle";
import routes from "./routes";

type FormData = {
  username: String;
  password: String;
};

function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmitValid = (data: any) => {
    console.log(data);
  };
  const onSubmitInvalid = (data: any) => {
    console.log(data, "invalid");
  };  

  return (
    <AuthLayout>
        <PageTitle title={'Login'}/>
        <FormBox>
          <div>
            <FontAwesomeIcon icon={faInstagram} size="3x" />
          </div>
          <form onSubmit={ handleSubmit(onSubmitValid, onSubmitInvalid) }>
            <Input {...register('username', {required: true, minLength:4})} type="text" placeholder="Username" />
            <Input {...register('password', {required: true, minLength:4})} type="password" placeholder="Password" />
            <Button type="submit" value="Log in" />
          </form>
          <Separator />
          <FacebookLogin>
            <FontAwesomeIcon icon={faFacebookSquare} />
            <span>Log in with Facebook</span>
          </FacebookLogin>
        </FormBox>
        <BottomBox cta={"Don't have an account?"} link={routes.signUp} linkText={"Sign up"} />
    </AuthLayout>
  );
}
export default Login;
const FacebookLogin = styled.div`
  color: #385285;
  span {
    margin-left: 10px;
    font-weight: 600;
  }
  cursor: pointer;
`;