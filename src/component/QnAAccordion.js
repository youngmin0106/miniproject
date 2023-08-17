import Accordion from 'react-bootstrap/Accordion';

function QnAAccordion() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>창모드로 플레이 하고싶어요.</Accordion.Header>
        <Accordion.Body>
          인게임에 들어가셔서 환경설정 → 그래픽 → 전체화면 에서 창모드로 바꾸시면 창모드로 플레이를 할수있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>몇레벨 부터 보스컨텐츠를 갈수 있나요 ?</Accordion.Header>
        <Accordion.Body>
          현재 보스컨텐츠는 1370부터 보스컨텐츠를 즐기실 수 있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>게임 실행이 안돼요.</Accordion.Header>
        <Accordion.Body>
          게임 실행이 안돼시면 삭제하고 다시 다운로드 해주시면 감사하겠습니다.
          그외 다른 오류가 있다면 고객센터에 문의 해주시면 감사하겠습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>모르고 장비를 분해 해버렸어요.</Accordion.Header>
        <Accordion.Body>
          장비를 실수로 분해했 을 경우 단 한번 복구를 해드립니다. 더욱 자세한 내용은 고객센터에 문의해주시길 바랍니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>2차 비밀번호를 잊어버렸어요.</Accordion.Header>
        <Accordion.Body>
          2차 비밀번호를 잊어버렸을경우 , 홈페이지 → 마이페이지 → 2차비밀번호 → 2차비밀번호 찾기 를 이용해 비밀번호를 찾아주세요.
          2차비밀번호는 1년에 한번씩 바꾸는걸 권장하고있습니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default QnAAccordion;