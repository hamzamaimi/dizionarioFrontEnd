import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { AddWordForm } from "../components/AddWordForm";
import { LogoWithLogOut } from "../components/LogoWithLogOut";


export const ManageTables = () => {
  const [translations, setTranslation] = useState({});
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [addedNewWord, setAddedNewWord] = useState(0);


  useEffect (() => {
    axios.get("/manageTranslation", {withCredentials: true}).then((resp)=>{
      setTranslation(resp.data.translations);
      setGroupName(resp.data.groupNames);
    })
  }, [addedNewWord])

  let translationsRows = Object.values(translations).map((k:any) => {
    return(
      <tr key={k.id}>
        <td className="text-center">
          <button type="button" className="btn btn-outline-secondary">
            <img onClick={(e) => {deleteRow(e);}} id={k.id} src="images/trash3.svg" width={"24"} height={"24"}/>
          </button>
        </td>
        <td>{k.originalWord}</td>
        <td>{k.translatedWord}</td>
        <td>{k.groupName}</td>
      </tr>
    )
  }, [translations])

  function deleteRow(e: React.MouseEvent){
    axios.delete("/manageTranslation", {data:{"wordId":(e.target as HTMLInputElement).id}, withCredentials: true}).then((resp)=>{
      if (resp.data.hasOwnProperty("error")) {
        handleManageTablesError(resp.data.error);
        return;
      }
      handleManageTablesSuccess(resp.data.success);
      setAddedNewWord(Math.random())
    })
  }

  return (
    <>
      <form onSubmit={(e) => checkForm(e)} id="insertWord"/>
      <div className={"customContainer container-fluid"}>
        <LogoWithLogOut/>

        {error !== "" ? (<div className='alert alert-danger text-center' role='alert'>{error}</div>) : ''}
        {success !== "" ? (<div className='alert alert-success text-center' role='alert'>{success}</div>) : ''}

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
                <AddWordForm groupNames={groupName}/>
                {translationsRows}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );

  function insertWord() {
    let originalWord:string = (document.getElementById("parola") as HTMLInputElement).value;
    let translatedWord:string = (document.getElementById("traduzione") as HTMLInputElement).value;
    let groupName:string = (document.getElementById("group") as HTMLInputElement).value;
    axios.post('/manageTranslation', 
      {original_word:originalWord, translated_word:translatedWord, groupName:groupName},
      {withCredentials:true}).then(res => {
        if (res.data.hasOwnProperty("error")) {
          handleManageTablesError(res.data.error);
          return;
        }
        handleManageTablesSuccess(res.data.success);
        setAddedNewWord(Math.random());
        (document.getElementById("parola") as HTMLInputElement).value = '';
        (document.getElementById("traduzione") as HTMLInputElement).value = '';
        (document.getElementById("group") as HTMLInputElement).value = '';
      })
  }

  function checkForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    insertWord();
  }

  function handleManageTablesError(error: any) {
    switch(error){
      case "words error":
        setError('Tutti e tre i campi sono obbligatori!');
        setSuccess('');
        break;
      default:
        setError('Si è riscontrato un errore nel server, riprovare più tardi.');
        setSuccess('');
    }
  }

  function handleManageTablesSuccess(success : any) {
      switch(success){
        case "delete correctly done!":
          setError('');
          setSuccess("La parola è stata eliminata correttamente.")
          break;
        default:
          setSuccess("La parola è stata inserita correttamente.")
          setError('');
      }
  }
  
}