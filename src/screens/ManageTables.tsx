import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { LogoWithLogOut } from "../components/LogoWithLogOut";


export const ManageTables = () => {
  const [translations, setTranslation] = useState({});
  const [groupName, setGroupName] = useState("");


  useEffect (() => {
    axios.get("/manageTranslation", {params: {"GroupName": groupName} , withCredentials: true}).then((resp)=>{
      setTranslation(resp.data.translations);
    })
  }, [])

  let translationsRows = Object.values(translations).map((k:any) => {
    return(
      <tr key={k.id} id={k.id}>
        <th>-</th>
        <td>{k.originalWord}</td>
        <td>{k.translatedWord}</td>
        <td>{k.groupName}</td>
      </tr>
    )
  })

  return (
    <>
      <div className={"customContainer container-fluid"}>
        <LogoWithLogOut />

        <div className="row">
          <div className="col-12">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Parola</th>
                  <th scope="col">Traduzione</th>
                  <th scope="col">Tabella</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <button className="btn btn-primary">Inserisci</button>
                  </th>
                  <td>
                    <input className="form-control" placeholder="parola" type="text"/>
                  </td>
                  <td>
                    <input className="form-control" placeholder="traduzione" type="text"/>
                  </td>
                  <td>
                    <input className="form-control" placeholder="tabella" type="text"/>
                  </td>
                </tr>

                {translationsRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
