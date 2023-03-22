import React from "react";
import { LogoWithLogOut } from "../components/LogoWithLogOut";
import { WorldFlags } from "../microComponents/WorldFlags";

export const DoQuiz = () => {

    $( document ).ready(function() {
        const availableHeight = (window.innerHeight - Number($('#logoWithLogOut').height()) - Number($('#worldFlags').height()));
        $('#quizRow').height(availableHeight);
        console.log(Number($('#logoWithLogOut').height()))
        console.log(Number($('#worldFlags').height()))
    });

    return(<>
        <div className={"customContainer container-fluid"}>
            <LogoWithLogOut />
            <div id="quizRow" className="row">
                <div className="col-12">
                    <div className="text-center">parola1</div>
                    <div className="text-center">parola2</div>
                    <div className="text-center">
                        <button>click</button>
                    </div>
                </div>
            </div>
            <WorldFlags />
        </div>
    </>)
}