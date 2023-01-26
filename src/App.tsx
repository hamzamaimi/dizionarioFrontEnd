import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Authentication} from "./screens/Authentication";
import { CookiesProvider, useCookies } from 'react-cookie';

function App() {
    const [cookies, setCookie, removeCookie] = useCookies(['jwt', 'es2']);
    setCookie("jwt", "lll", {httpOnly: true})
    setCookie("es2", "aaa")
    return (
        <CookiesProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login"
                            element={<Authentication title={"Bentornato a WordsMemo"} action={"Fai il login al tuo account."}
                                                    formType={"login"}/>} />
                    <Route path="/registration"
                            element={<Authentication title={"Benvenuto a WordsMemo"} action={"Crea il tuo account."}
                                                    formType={"registration"}/>} />
                    <Route path="/activateAccount"
                            element={<Authentication title={"WordsMemo"} action={"Attiva il tuo account."}
                                                    formType={"activateAccount"}/>} />            
                </Routes>
            </BrowserRouter>
        </CookiesProvider>
    )
}

export default App;
