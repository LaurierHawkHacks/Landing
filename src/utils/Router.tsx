import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComingSoon, ErrorPage, Landing } from '@pages'

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
    </BrowserRouter>
);

export { Router };