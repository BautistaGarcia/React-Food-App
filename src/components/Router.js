import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;