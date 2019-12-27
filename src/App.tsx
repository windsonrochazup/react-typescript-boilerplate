import React from 'react';
import { ThemeProvider } from 'styled-components';
import { myTheme } from './assets/styles/DefaultTheme';
import { MyGlobalStyle } from './assets/styles/Global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <>
        <MyGlobalStyle theme={myTheme} />
        <h1>Initial Commit</h1>
      </>
    </ThemeProvider>
  );
};

export default App;
