import styled from "styled-components";

interface IBtnProps {
    type: string,
    value: string
};

function Button(props: IBtnProps) {
    return <SButton {...props} />
}

export default Button;

const SButton = styled.input`
  width: 100%;
  border: none;
  border-radius: 3px;
  margin-top: 12px;
  background-color: ${(props) => props.theme.accent};
  color: white;
  text-align: center;
  padding: 8px 0px;
  font-weight: 600;
  cursor: pointer;
`;