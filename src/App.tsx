import AllUsers from './Component/AllUsers';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';
import NotFound from './Component/NotFound'; 
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Root from './Component/Root';
import store from './store';

const THEME = createTheme({
  typography: {
   "fontFamily": `"circular","Helvetica", "Arial", sans-serif`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={THEME}>
      <Root />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
  );
}

export default App;
