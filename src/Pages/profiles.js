import { useEffect, useState } from "react";
import './Profiles.css';

const key =  'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAzMDUwNTkifQ.EIRSkijoNye07HvBZEBVL-RPXP3tc9EAM1V4QNxFmNBFS0DWM3KuDZT6UNrxiugSViOQ6mfP_0bnvuCt4dz5bAgTeU1DKWIuOXNkqXnnfzjoONHQTUT0VWLX_dwsUbUKfLt2xSNx5hsT7BfOFEDkt7lSYj8m2svDHURV8TxQmG26KGU2m83ckja5qRH-Yn3NY_BJtEwMGz-zHQMfAicv4HbA-HvWDHNqX8r6YpwCEVl0OTaaMF-DmVgS72fi2LT5hFvu5Dpa3YXCRspkdv0ye9D-8RCPhIDxiF4QPlx3Ntu1P_SJuMgq43DzkVZ_CG_BZfm-mkoqPbXO7aN3wKNpgA';


const Profiles = () => {
  const [characterName, setCharacterName] = useState('');
  const [isPending, setIsPending] = useState(true);
  const [profiles, setprofiles] = useState({})

  

  function changeHandler(e) {
    setCharacterName(e.target.value);
  };
 
 


const Click = () => {
    const url = `https://developer-lostark.game.onstove.com/armories/characters/${characterName}/profiles`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        authorization: 'bearer ' + key
      }
    }
    fetch(url, options)
    .then((response) => response.json())
    .then((data) => { 
    
      console.log(data)
      // let img = data.CharacterImage;
      // let className = data.CharacterClassName;
      // let charactername = data.characterName;
      // let Characterlevel = data.CharacterLevel;
      // let guildname = data.GuildName;
      // let Townname = data.TownName;
      
      // let pTag = document.createElement('p');
      // pTag.innerText = `캐릭터이미지${img}
      //                   클래스닉네임${className}
      //                   캐릭터닉네임${charactername}
      //                   캐릭터레벨${Characterlevel}
      //                   길드명${guildname}
      //                   영지명${Townname}`
      // Box.append(pTag); 
      // document.getElementById("characterNames").innerHTML =
      // JSON.stringify(data)    
      // let temp = JSON.stringify(data);   
      // console.log('temp', temp)   
      setprofiles(data)
      
    })
    .catch(() => {
      console.log('에러')
    })
  }
 
  return (
    <div className="container">
      <h1 className="search">검색할 닉네임을 입력해주세요🔍</h1>
      <div className="inpbtn">
      <input id="q" type="text" placeholder="닉네임을 입력하세요" onChange={changeHandler} className="input"/>
      <button className="searchbtn" onClick={Click}>프로필 검색</button>
      </div>

      <div  className="profiles"/>
      <h3>👇</h3><br/>  
      <span><span>닉네임 : </span>{profiles.CharacterName}</span><br/>
      <span><span>서버 이름: </span>{profiles.ServerName}</span><br/>
      <span><span>클래스 : </span>{profiles.CharacterClassName}</span><br/>
    
      <img src={profiles.CharacterImage}/>
      <div>
      <span>전투 레벨</span>
      <span><small>Lv.</small>{profiles.CharacterLevel}</span><br/>
      <span>원정대 레벨</span>
      <span><small>Lv.</small>{profiles.ExpeditionLevel}</span><br/>
      <span>아이템 레벨</span>
     
      <span><small>Lv.</small>{profiles.ItemAvgLevel}</span><br/>
      <span>길드 이름 : </span>
      <span>{profiles.GuildName}</span><br/>
      <span>길드 직급 : </span>
      <span>{profiles.GuildMemberGrade}</span>
      </div>
   

    </div>
  );
}


export default Profiles;