import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { brasilGTM as Gtm, PI as Pi } from './teste.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <p>{PI}</p> */}
    {/* <p>{brasilGTM}</p> */}
    <p>{Gtm}</p>
    <p>{Pi}</p>
  </React.StrictMode>,
)
