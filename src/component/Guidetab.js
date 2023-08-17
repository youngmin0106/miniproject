import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Guidetab.css";
import guide1 from '../img/초보자가이드1.png';
import guide2 from '../img/초보자가이드2.png';
import skill1 from '../img/전투스킬1.png';
import skill2 from '../img/전투스킬2.png';
import skill3 from '../img/전투스킬3.png';
import skill4 from '../img/전투스킬4.png';

function Guidetab() {
  return (
    <Tabs 
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >     
      <Tab eventKey="guide" title="초보자 가이드">
        <h1>장비 아이템 및 캐릭터 세팅하기</h1>
        <h4>①각인 장착하기</h4>
        <p>우측 하단 메뉴 원정대 ☞ 각인효과 를 활성화 하여,<br/>캐릭터 정보창 각인 슬롯으로 각인을 드래그하거나, 장착할 각인을 우클릭하여 장착할 수 있다.</p>
        <img src={guide1}/>
        <h1>스킬 포인트 세팅</h1>
        <p>스킬 포인트와 트라이포드를 새롭게 설정하실 수 있습니다.</p>
        <img src={guide2}/>
        <div className='change'>최근 수정일 23-08-17</div>
      </Tab>
      <Tab eventKey="profile" title="전투">
        <h1>전투 스킬</h1>
        <p>전투 스킬은 각 클래스에 어울리는 독특한 조작 방법과 특징을 지니고 있습니다.<br/>
           전투 스킬은 게임 하단 HUD 좌측에 위치한 <span className='color'>스킬 단축키 슬롯</span> 에 스킬을 등록해야만, 단축키 활성화 및 사용이 가능합니다</p>
        <h4>전투 스킬 타입</h4>
        <img src={skill1}/>
        <img src={skill2}/>
        <img src={skill3}/>
        <img src={skill4}/>
      </Tab>
      <Tab eventKey="longer-tab" title="생활">
        생활
      </Tab>
      <Tab eventKey="contact" title="보스">
        보스
      </Tab>
     
    </Tabs>
  );
}

export default Guidetab;