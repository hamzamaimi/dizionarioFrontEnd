import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Authentication} from "./screens/Authentication";

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
                    <Route path="/login"
                           element={<Authentication title={"Welcome back"} action={"Log in to your account."}
                                                    formType={"login"}/>} />
                    <Route path="/registration"
                           element={<Authentication title={"Welcome to WordsMemo"} action={"Create your account."}
                                                    formType={"registration"}/>} />
                    {/*<Route path="" element={<Login />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;
