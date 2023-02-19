import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { LogoWithLogOut } from "../components/LogoWithLogOut";


export const ManageTables = () => {
  const [translations, setTranslation] = useState(null);
  const [groupName, setGroupName] = useState("");


  useEffect (() => {
      if(translations === null){
      axios.get("/manageTranslation", {params: {"GroupName": groupName} , withCredentials: true}).then((resp)=>{
        setTranslation(resp.data.translations)
      })
    }
  }, [])

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
          <div className="col-8">ciao</div>
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
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                  <td>@twitter</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
