import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    fetch('/api').then((res) => res.json()).then((data) => console.log(data));
  })
  return (
    <BrowserRouter>
      <CssBaseline />
      <Routing />
    </BrowserRouter>
  );
};

export default App;
