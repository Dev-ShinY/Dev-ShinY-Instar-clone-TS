import styled from "styled-components";

interface IInput {
  type: string,
  placeholder: string
}

function Input(props: IInput) {
    return <SInput {...props}/>
}
export default Input;

const SInput = styled.input`
  width: 100%;
  border-radius: 3px;
  padding: 7px;
  background-color: #fafafa;
  border: 0.5px solid ${(props) => props.theme.borderColor};
  margin-top: 5px;
  box-sizing: border-box;
  &::placeholder {
    font-size: 12px;
  }
`;