import React from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from "./Home";
import Login from "./Login";
import { Register } from './Register';

function Routers() {
    return (
      
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register/>} />
            </Routes>
      
    )
}

export default Routers