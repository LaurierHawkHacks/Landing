import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ComingSoon, ErrorPage, Landing } from '@pages'

/*
 *
 * @description Router component
 * @route "/": Landing page
 * @route "/coming-soon": Coming soon page
 * @route "*": Error page
 * 
 */
const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Landing /> } />
            <Route path="*" element={ <ErrorPage /> } />
            <Route path="/coming-soon" element={ <ComingSoon /> } />
        </Routes>
    </BrowserRouter>
);

export { Router };