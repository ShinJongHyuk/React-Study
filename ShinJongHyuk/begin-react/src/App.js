
import Hello from './Hello';
import React from 'react';
import Wrapper from './Wrapper';


function App() {
  return (
  <Wrapper>
    <Hello name="react" color="red"/>
    <Hello color="pink"/>
  </Wrapper>
  );
}

export default App;
