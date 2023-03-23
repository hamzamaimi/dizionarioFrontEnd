import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { LogoWithLogOut } from "../components/LogoWithLogOut";
import { WorldFlags } from "../microComponents/WorldFlags";



export const DoQuiz = () => {
    const [translations, setTranslation] = useState([]);
    const [groupName, setGroupName] = useState("");
    const [quizState, setQuizState] = useState("generate");
    const [chosenWord, setChosenWord] = useState({groupName:'', id:Number, originalWord:'', translatedWord:'', userId:Number});

    $( document ).ready(function() {
        const availableHeight = (window.innerHeight - Number($('#logoWithLogOut').height()) - Number($('#worldFlags').height()));
        $('#quizRow').height(availableHeight);
    });

    console.log(translations);

    useEffect(() => {
        if(groupName === ""){
            axios.get("/manageTranslation", {withCredentials: true}).then((resp)=>{
                setTranslation(resp.data.translations);
                setGroupName(resp.data.groupNames);
            })
        }   
    })

    // let word: {groupName:string, id:Number, originalWord:string, translatedWord:string, userId:Number};

    function generateTranslation(){
        let word = translations[Math.round(Math.random() * (translations.length -1))];
        console.log(Math.round(Math.random() * (translations.length - 1) ))
        if(quizState == "generate"){
            (document.getElementById('parola2') as HTMLInputElement).classList.add('d-none');
            (document.getElementById('parola2') as HTMLInputElement).innerText = '';
            (document.getElementById('parola1') as HTMLInputElement).innerText = word['originalWord'];
            (document.getElementById('parola2') as HTMLInputElement).innerText = word['translatedWord'];
            setQuizState("translation");
        } else if (quizState == "translation"){
            (document.getElementById('parola2') as HTMLInputElement).classList.remove('d-none');
            setQuizState("generate");
        }
    }

    return(<>
        <div className={"customContainer container-fluid"}>
            <LogoWithLogOut />
            <div id="quizRow" className="row align-items-center">
                <div className="col-12">
                    <div className="text-center mb-2" id="parola1"/>
                    <div className="text-center mb-2">
                        <img className="" src="images/down.png" alt="freccia giù"/>
                    </div>
                    <div className="text-center mb-5">
                        <p id="parola2"/>
                    </div>
                    <div className="text-center mb-5">
                        <button id="triggerButton" onClick={() => generateTranslation()} 
                            type="button" className="btn btn-primary">Generate</button>
                    </div>
                </div>
            </div>
            <WorldFlags />
        </div>
    </>)
}