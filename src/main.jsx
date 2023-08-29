import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FirstApp from './FirstApp'
import { Suma } from './suma'
import { Functions } from './Functions'
import { ComponentApp } from './ComponentApp'
import { InputTag } from './InputTag'
import { Compra } from './Compra'/*imput texto y cantidad*/
import {Tienda} from './Tienda' /* con botones para agrerar cantidad>*/
import {CarritoCompra} from './CarritoCompras'
import { Loteria } from './Loteria'/*Loteria con nombre, nuemro, precio*/

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<FirstApp  title= 'Pruebita 3' sum={200}/>*/}
    {/*<Suma/>*/}
   {/* <Functions p={0}/>*/}
   {/* <ComponentApp/>*/}
   {/* <InputTag/>*/}
   <Compra/>
  </React.StrictMode>,
)
