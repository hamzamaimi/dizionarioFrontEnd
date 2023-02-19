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
          <div className="col-4">
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <div className="col-8"></div>
        </div>

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
                {translationsRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
