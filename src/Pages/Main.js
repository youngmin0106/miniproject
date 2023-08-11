import { Carousel } from 'react-bootstrap';
import bg from '../img/main.png';
import event1 from '../imgs/이벤트3.jpg';
import event2 from '../imgs/이벤트1.jpg';

const Main = () => {
  return(
    <>
    <div className="main-bg"  style={{backgroundImage: 'url(' + bg + ')'}}>
    <div className='main'>
    <Carousel className='event'>
      <Carousel.Item >
      <img src={event1}  />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={event2}/>    
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
    </>
     
    )

  
}

export default Main;