import { useEffect, useState } from "react";
const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAzMDUwNTkifQ.EIRSkijoNye07HvBZEBVL-RPXP3tc9EAM1V4QNxFmNBFS0DWM3KuDZT6UNrxiugSViOQ6mfP_0bnvuCt4dz5bAgTeU1DKWIuOXNkqXnnfzjoONHQTUT0VWLX_dwsUbUKfLt2xSNx5hsT7BfOFEDkt7lSYj8m2svDHURV8TxQmG26KGU2m83ckja5qRH-Yn3NY_BJtEwMGz-zHQMfAicv4HbA-HvWDHNqX8r6YpwCEVl0OTaaMF-DmVgS72fi2LT5hFvu5Dpa3YXCRspkdv0ye9D-8RCPhIDxiF4QPlx3Ntu1P_SJuMgq43DzkVZ_CG_BZfm-mkoqPbXO7aN3wKNpgA';


const Best =() =>{
  const [person , setPerson] = useState({
    value : ' '
  });

  function changeHandler(e){
    let value = e.target.value;
    let targetName = e.target.name;
    
    let copy = {...person};
    copy[targetName] = value;
  
    setPerson(copy);
  }

  useEffect(() => {
    const url = 'https://developer-lostark.game.onstove.com/characters/'+document.getElementById("q").value+'/siblings'
    const options = {
      method: 'GET',
    headers: {
      accept : 'application/json',
    authorization : 'bearer '+ key
              }
          }
    fetch(url, options)
          .then((response) => response.json())
          .then((data) => {
      console.log(data)
              document.getElementById("characterNames").innerHTML =
    JSON.stringify(data)
          })
  }, [])
  return (
    <div>
      <h1> 아이디 입력 </h1>
      <input id="q" type="text" value={'카아안'} onChange={changeHandler}/>
      <button onclick="Best()">아이디 검색</button>
      <p id="characterNames"></p>

    </div>
  );
}


export default Best;