import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import styled from 'styled-components';

function App() {
  return (
    <AppStyles >
      <Home />
    </AppStyles>
  );
}

let AppStyles = styled.div`
background-color:black;
min-height: 100vh;
color:white;
font-family: Inter, sans-serif;
`

export default App;
