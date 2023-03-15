import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import { AddWordForm } from "../components/AddWordForm";
import { LogoWithLogOut } from "../components/LogoWithLogOut";


export const ManageTables = () => {
  const [translations, setTranslation] = useState({});
  const [groupName, setGroupName] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");


  useEffect (() => {
    axios.get("/manageTranslation", {params: {"groupName": groupName} , withCredentials: true}).then((resp)=>{
      setTranslation(resp.data.translations);
      setGroupName(resp.data.groupNames);
    })
  }, [])

  let translationsRows = Object.values(translations).map((k:any) => {
    return(
      <tr key={k.id} id={k.id}>
        <td>-</td>
        <td>{k.originalWord}</td>
        <td>{k.translatedWord}</td>
        <td>{k.groupName}</td>
      </tr>
    )
  })

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

  function addWordToTable(originalWord: string, translatedWord: string, groupName: string, wordId : string) {
    var row : string = "<tr id=\""+wordId+"\">  \
      <td>-</td> \
      <td>"+originalWord+"</td>\
      <td>"+translatedWord+"</td>\
      <td>"+groupName+"</td>\
      </tr>"
    $('#firstRow').after(row);
  }

  function insertWord() {
    let originalWord:string = (document.getElementById("parola") as HTMLInputElement).value;
    let translatedWord:string = (document.getElementById("traduzione") as HTMLInputElement).value;
    let groupName:string = (document.getElementById("group") as HTMLInputElement).value;
    axios.post('/manageTranslation', 
      {original_word:originalWord, translated_word:translatedWord, groupName:groupName},
      {withCredentials:true}).then(res => {
        if (res.data.hasOwnProperty("error")) {
          handleInsertError(res.data.error);
          return;
        }
        let wordId = res.data.wordId;
        handleInsertSuccess(originalWord, translatedWord, groupName);
        addWordToTable(originalWord, translatedWord, groupName, wordId);
      })
  }

  function checkForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    insertWord();
  }

  function handleInsertError(error: any) {
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

  function handleInsertSuccess(originalWord: string, translatedWord: string, group: string) {
      setSuccess("La parola è stata inserita correttamente.")
      setError('');
  }

}

