import React from "react";
import { LogoWithLogOut } from "../components/LogoWithLogOut";
import { WorldFlags } from "../microComponents/WorldFlags";
import "../styles/Application.css"
import { useNavigate } from 'react-router-dom';

export const HomePage = () => {
    const navigate = useNavigate();

    return(<>
        <div className={"customContainer container-fluid"}>
            <LogoWithLogOut />

            <div className="row">
                <div className="col-12 col-md-2"></div>
                <div className="col-12 col-md-8 text-center">
                    <div className="row">
                        <div className="card col-12 mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Gestisci tabelle</h5>
                                <p className="card-text">Inserisci, modifica o elimina parole e tabelle.</p>
                                <button onClick={() => navigate('/manageTables', {replace:true})} className="btn btn-primary">Gestisci</button>
                            </div>
                        </div>

                        <div className="card col-12 mt-5">
                            <div className="card-body">
                                <h5 className="card-title">Fai un quiz</h5>
                                <p className="card-text">Esercitati utilizzando le parole che hai inserito nelle tue tabelle.</p>
                                <button onClick={() => navigate('/doQuiz', {replace:true})} className="btn btn-primary">Esercitati</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-2"></div>
            </div>
            <WorldFlags />
        </div>
    </>)
}