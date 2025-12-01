import { StrictMode } from 'react'
import {Hearder} from "./App.jsx"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <di>
            <Hearder/>
            <App/>
        </di>
    </StrictMode>,
);
