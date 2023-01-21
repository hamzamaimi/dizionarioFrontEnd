import React from 'react';
import './App.css';
import {Login} from "./screens/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Registration} from "./screens/Registration";

function App() {
    // return (
    //     <>
    //         <Login/>
    //     </>
    // );
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/registration" element={<Registration />} />
                    <Route path="" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
