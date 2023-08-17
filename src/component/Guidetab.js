import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Guidetab.css";
import guide1 from '../img/초보자가이드1.png';
import guide2 from '../img/초보자가이드2.png';
import skill1 from '../img/전투스킬1.png';
import skill2 from '../img/전투스킬2.png';
import skill3 from '../img/전투스킬3.png';
import skill4 from '../img/전투스킬4.png';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import YouTube from 'react-youtube';
import valtan from '../img/발탄.png';
import valtaninfo from '../img/발탄설명.png';



function Guidetab() {
  const navigate = useNavigate();
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
        <p>우측 하단 메뉴 원정대 ☞ 각인효과 를 활성화 하여,<br />캐릭터 정보창 각인 슬롯으로 각인을 드래그하거나, 장착할 각인을 우클릭하여 장착할 수 있다.</p>
        <img src={guide1} />
        <h1>스킬 포인트 세팅</h1>
        <p>스킬 포인트와 트라이포드를 새롭게 설정하실 수 있습니다.</p>
        <img src={guide2} />
        <div className='change'>최근 수정일 23-08-17</div>
      </Tab>
      <Tab eventKey="fight" title="전투">
        <h1>전투 스킬</h1>
        <p>전투 스킬은 각 클래스에 어울리는 독특한 조작 방법과 특징을 지니고 있습니다.<br />
          전투 스킬은 게임 하단 HUD 좌측에 위치한 <span className='color'>스킬 단축키 슬롯</span> 에 스킬을 등록해야만, 단축키 활성화 및 사용이 가능합니다</p>
        <h4>전투 스킬 타입</h4>
        <p>전투 스킬은 <span className='color'>'조작 방법'</span> 에 따라 다양한 스킬 타입으로 분류됩니다.</p>
        <span className='title'>일반</span>

        <p>● 스킬 단축키를 한 번 만 입력하여 스킬을 발동시킵니다.</p>
        <p>● 단축키 입력 시 즉시 재사용 대기시간이 적용됩니다.</p>
        <p>●<span className='color'> 트라이포드 설정에 따라 차지, 콤보, 지점 등 다른 타입의 스킬로 변경될 수 있습니다.</span> </p>

        <img src={skill1} />
        <h1>
          <span className='title'>콤보</span>
        </h1>
        <p>● 스킬 단축키 입력 후 동작이 끝나기 전에 단축키를 재입력하면, 연계 동작이 발생합니다.</p>
        <p>● 콤보 스킬을 중단하거나 마지막 연계 동작이 완료되면, 재사용 대기시간이 적용됩니다.</p>
        <img src={skill2} />
        <h1>
          <span className='title'>캐스팅</span>
        </h1>
        <p>● 스킬 단축키를 입력하면 스킬을 준비하며, 지정된 시간이 경과하면 스킬을 발동시킵니다.</p>
        <p>● 스킬 발동 직후 재사용 대기시간이 적용됩니다.</p>
        <p><span className='color'>※ 캐스팅 스킬은 시전 도중에 취소하더라도 자원이 소모되거나 재사용 대기시간이 적용되지 않습니다.</span> </p>
        <img src={skill3} />
        <h1>
          <span className='title'>홀딩</span>
        </h1>
        <p>● 스킬 단축키를 키다운 할시, 게이지가 채워지면 채워질수록 더 강력한 스킬이 나갑니다.</p>
        <p>● 스킬 사용중 캔슬 할시, 쿨타임이 적용 됩니다.</p>
        <p><span className='color'>※ 퍼펙트 존 도달 여부(Success/Fail)에 따라 스킬의 위력이 다르게 적용됩니다.</span></p>
        <img src={skill4} />
        <div className='change'>최근 수정일 22-05-20</div>
      </Tab>
      <Tab eventKey="boss" title="보스 공략">
        <div className='bg'>
          <h4>※공략을 보지않고 트라이 하실분은 <Button onClick={() => { navigate('/') }}>뒤로가기</Button> 버튼을 눌러주세요.</h4>
          <div className='boss1'>
            <img className='valtan' src={valtan} />
          </div>
          <img className='valtan' src={valtaninfo} /><br/>
          <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/YNf2my7id-A" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           allowfullscreen></iframe>
           <iframe className='video' width="560" height="315" src="https://www.youtube.com/embed/LakcTJ7lmgw" title="YouTube video player" 
           frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           allowfullscreen></iframe>
           </div>


      </Tab>

    </Tabs>
  );
}

export default Guidetab;