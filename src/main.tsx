import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import { Router } from '@utils'

/*
 *
 * @description Render the Router component
 * 
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Router />
    </React.StrictMode>,
);