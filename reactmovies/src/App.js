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

height: 100vh;
`

export default App;
