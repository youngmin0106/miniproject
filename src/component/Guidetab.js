import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./Guidetab.css";

function Guidetab() {
  return (
    <Tabs 
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >     
      <Tab eventKey="guide" title="초보자 가이드">
        초보자 가이드
      </Tab>
      <Tab eventKey="profile" title="전투">
        전투
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