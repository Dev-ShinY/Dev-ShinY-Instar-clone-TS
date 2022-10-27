import styled from "styled-components";
import Header from "./Header";

type Props = {
    children: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
    </>
  );
}

export default Layout;

const Content = styled.main`
  margin: 0 auto;
  margin-top: 45px;
  max-width: 930px;
  width: 100%;
`;
