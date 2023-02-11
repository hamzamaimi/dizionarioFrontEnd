import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import {Authentication} from "./screens/Authentication";
import { CookiesProvider, useCookies } from 'react-cookie';
import { HomePage } from './screens/HomePage';
import { PrivateRoutes } from './utils/PrivateRoutes';

function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false);
    const [isAccountActive, setisAccountActive] = useState(true);

    if(localStorage.getItem("authenticated") && !isLoggedIn){setisLoggedIn(true)};
    if(localStorage.getItem("isAccountActive") == 'false' && isAccountActive){
        setisAccountActive(false);
    }
    

    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"
                            element={<Authentication title={"Bentornato a WordsMemo"} action={"Fai il login al tuo account."}
                                                    formType={"login"} setIsAccountActive={setisAccountActive}/>} />
                    <Route path="/registration"
                            element={<Authentication title={"Benvenuto a WordsMemo"} action={"Crea il tuo account."}
                                                    formType={"registration"} setIsAccountActive={setisAccountActive}/>} />
                    <Route path="*" element={<Navigate to="/login" />} />
                    
                    <Route element={<PrivateRoutes/>}>
                        <Route path="/activateAccount" element={<Authentication title={"WordsMemo"} action={"Attiva il tuo account."}
                                formType={"activateAccount"} setIsAccountActive={setisAccountActive}/>} />
                        <Route index path="/homePage" element={<HomePage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    )
}

export default App;
