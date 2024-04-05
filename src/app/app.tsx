'use client'

import {BrowserRouter, Routes, Route} from "react-router-dom";
import FirstPage from "./page";
import { ErrorPage } from "./errors/error-page";

function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<FirstPage/>}></Route>
            <Route path="/products" element={<p>Products page</p>}></Route>
            <Route path="*" element={<ErrorPage/>}></Route>
        </Routes>
    </BrowserRouter>
}

export default App