import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import Usercontext from './context/Usercontext.jsx'
import { store } from './redux/Store.js'

createRoot(document.getElementById('root')).render(
  
    <Provider store={store}>
      <Usercontext>
        <App />
      </Usercontext>
    </Provider>
      
   
  
)
