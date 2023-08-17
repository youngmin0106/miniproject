import { Button } from "react-bootstrap";
import QnAAccordion from "../component/QnAAccordion";
import './QnA.css';
import { useNavigate } from "react-router-dom";

const QnA = () =>{
  const navigate = useNavigate();
  return(
    <>

    <QnAAccordion/>
    <Button variant="danger" className="qnabtn" onClick={()=>{navigate('/customer')}}>그외 문의하러 가기</Button>
  
    </>
  );
}

export default QnA;