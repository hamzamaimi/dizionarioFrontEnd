import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Authentication} from "./screens/Authentication";

function App() {
    return (
        <>
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
        </>
    )
}

export default App;
