import styled from "styled-components";

const Header = (props) => {
  return (
    <>
      <Nav>Header</Nav>
    </>
  );
};

const Nav = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    background-color: #098b13;
    padding: 0 36px;
    align-items: center;
    justify-content: space-between;
`;

export default Header;
