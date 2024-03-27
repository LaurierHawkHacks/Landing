import { Routes, Route, HashRouter } from 'react-router-dom'
import { Landing } from '@pages'

const Router = () => (
  <HashRouter basename='/Landing'>
    <Routes>
      <Route path="/" element={<Landing />} />
    </Routes>
  </HashRouter>
);

export { Router };