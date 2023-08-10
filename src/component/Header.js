import { Container, Navbar, Nav, Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';


const Header = ({eventImg}) => {
  return (
    <>
    <div className='header'>     
       <Navbar bg="light" >
        <Container className='container'>
          <Navbar.Brand href="#home" className='logo'/>
          <Nav className="me-auto">
            <Nav.Link href="#home">게임정보</Nav.Link>
            <Nav.Link href="#features">가이드</Nav.Link>
            <Nav.Link href="#pricing">커뮤니티</Nav.Link>      
          </Nav>
            <div className='btn_box'>
            <Button variant="light" className='btn'>LOGIN</Button>
            <Button  variant="secondary" className='start_btn'></Button>
            </div>
        </Container>
      </Navbar>
   
      </div>
   

    </>
  );
}

export default Header;