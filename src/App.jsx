import styled from "styled-components";

const H1 = styled.h1`
  color: red;
  font-size: 25px;
`;

const Button = styled.button`
  background-color: green;
  color: white;
`;

function App() {
  return (
    <div>
      <H1>hello</H1>
      <Button>OK</Button>
    </div>
  );
}

export default App;
