
import styled from 'styled-components';
import tw from 'twin.macro';
import './App.css';
import { HomePage } from './app/containers/HomePage';

const AppContainers = styled.div`
${tw`
  w-full
  h-full
  flex
  flex-col

`}
`;

function App() {
  return <AppContainers>
    <HomePage/>
  </AppContainers>
}

export default App;
