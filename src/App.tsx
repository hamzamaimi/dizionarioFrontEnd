import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Authentication} from "./screens/Authentication";
import { CookiesProvider, useCookies } from 'react-cookie';
import { HomePage } from './screens/HomePage';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);

    if(localStorage.getItem("authenticated")){setisLoggedIn(true)}

    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    {!isLoggedIn ? (<>
                            <Route path="/"
                                    element={<Authentication title={"Bentornato a WordsMemo"} action={"Fai il login al tuo account."}
                                                            formType={"login"}/>} />
                            <Route path="/registration"
                                    element={<Authentication title={"Benvenuto a WordsMemo"} action={"Crea il tuo account."}
                                                            formType={"registration"}/>} />
                        </>):(<>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/activateAccount"
                                    element={<Authentication title={"WordsMemo"} action={"Attiva il tuo account."}
                                                            formType={"activateAccount"}/>} />
                        </>)  } 
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    )
}

export default App;
