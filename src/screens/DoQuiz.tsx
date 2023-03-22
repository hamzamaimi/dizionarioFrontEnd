import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { LogoWithLogOut } from "../components/LogoWithLogOut";
import { WorldFlags } from "../microComponents/WorldFlags";

export const DoQuiz = () => {
    const [translations, setTranslation] = useState({});
    const [groupName, setGroupName] = useState("");

    $( document ).ready(function() {
        const availableHeight = (window.innerHeight - Number($('#logoWithLogOut').height()) - Number($('#worldFlags').height()));
        $('#quizRow').height(availableHeight);
    });

    useEffect(() => {
        if(groupName === ""){
            axios.get("/manageTranslation", {withCredentials: true}).then((resp)=>{
                setTranslation(resp.data.translations);
                setGroupName(resp.data.groupNames);
            })
        }   
    })

    return(<>
        <div className={"customContainer container-fluid"}>
            <LogoWithLogOut />
            <div id="quizRow" className="row">
                <div className="col-12">
                    <div className="text-center mb-5">parola1</div>
                    <div className="text-center mb-5">parola2</div>
                    <div className="text-center mb-5">
                        <button type="button" className="btn btn-primary">Primary</button>
                    </div>
                </div>
            </div>
            <WorldFlags />
        </div>
    </>)
}