import React from "react";

export const AddWordForm = (props: {groupNames : String}) => {
    let optionValues = Object.values(props.groupNames).map((k:any) => {
        return(
            <option value={k} key={k} />
        )
    })

    return(<>
        <tr id="firstRow">
            <td className="text-center">
                <button type="submit" form="insertWord" className="btn btn-primary">Inserisci</button>
            </td>
            <td>
                <input form="insertWord" required className="form-control" placeholder="parola" type="text" id="parola"/>
            </td>
            <td>
                <input form="insertWord" required className="form-control" placeholder="traduzione" type="text" id="traduzione"/>
            </td>
            <td>
                <input form="insertWord" required className="form-control" list="datalistOptions" id="group" placeholder="tabella" />
                <datalist id="datalistOptions">
                    {optionValues}
                </datalist>
            </td>
        </tr>
    </>)
}