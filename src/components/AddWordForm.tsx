import React from "react";
import axios from "../api/axios";

export const AddWordForm = (props: {groupNames : String}) => {
    function insertWord() {
        alert('ciao');
    }
    let optionValues = Object.values(props.groupNames).map((k:any) => {
        return(
            <option value={k} key={k} />
        )
      })
    return(
        <tr>
            <td>
                <button onClick={() => insertWord()} className="btn btn-primary">Inserisci</button>
            </td>
            <td>
                <input className="form-control" placeholder="parola" type="text" id="parola"/>
            </td>
            <td>
                <input className="form-control" placeholder="traduzione" type="text" id="traduzione"/>
            </td>
            <td>
                <input className="form-control" list="datalistOptions" id="exampleDataList" placeholder="tabella" />
                <datalist id="datalistOptions">
                    {optionValues}
                </datalist>
            </td>
        </tr>
    )
}