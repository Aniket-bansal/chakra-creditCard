import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Form from './components/Form';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
      <div className="card"><Card /></div>
      <div className="form"><Form /></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
