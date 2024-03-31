import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from '@pages'
import { ComingSoonPage } from '@components';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/comingsoon" element={<ComingSoonPage />}/>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
);

export { Router };