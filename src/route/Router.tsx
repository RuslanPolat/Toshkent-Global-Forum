import React from 'react'
import { BrowserRouter, Route, Routes,  Navigate} from 'react-router-dom'
import Login from '../modules/login/Login'
import Agada from '../modules/main/agada/Agada'
import Biletlar from '../modules/main/biletlar/Biletlar'
import Comments from '../modules/main/comments/Comments'
import Fields from '../modules/main/fields/Fields'
import Foyalanuvchi from '../modules/main/foydalanuvchilar/Foyalanuvchi'
import Position from '../modules/main/positions/Position'
import Spiker from '../modules/main/spikers/Spiker'
import Settings from '../modules/settings/Settings'

//pages


export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path='login' element={<Login/>}/>
           <Route path='/foydalanuvchilar' element={<Foyalanuvchi/>}/>
           <Route path='/agada' element={<Agada/>}/>
           <Route path='/biletlar' element={<Biletlar/>}/>
           <Route path='/commnets' element={<Comments/>}/>
           <Route path='/fields' element={<Fields/>}/>
           <Route path='/positions' element={<Position/>}/>
           <Route path='/spikers' element={<Spiker/>}/>
           <Route path='/settings' element={<Settings/>}/>
        </Routes>
    </BrowserRouter>
  )
}
