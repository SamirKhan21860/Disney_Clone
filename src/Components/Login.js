import styled from "styled-components";

const Login = () => {
  //   return <div>Login</div>;
  return (
    <Container>
      <Content>Content</Content>
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: relative;
`;

export default Login;
