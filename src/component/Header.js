import { Container, Navbar, Nav, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { useNavigate } from 'react-router-dom';



const Header = ({eventImg}) => {
  const navigate = useNavigate();

  return (
    <>
    <div className='header'>     
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className='container'>
          <Navbar.Brand  onClick={()=>{navigate('/')}} className='logo'/>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/info')}}>클래스</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/guide')}}>가이드</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/community')}}>모집</Nav.Link>     
            <Nav.Link onClick={()=>{navigate('/q&a')}}>Q&A</Nav.Link>
              
            <Nav.Link onClick={()=>{navigate('/profiles')}}>프로필</Nav.Link>     
          </Nav>
            <div className='btn_box'>
            <Button variant="dark" className='btn'
            onClick={()=>{navigate('/login')}}>LOGIN</Button>
            <Button  variant="secondary" className='start_btn'></Button>
            </div>
        </Container>
      </Navbar>
   
      </div>
   

    </>
  );
}

export default Header;