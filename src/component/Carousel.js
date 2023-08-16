import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css';
import wor from '../imgs/전사title.jpg'
import wor2 from '../imgs/전사.jpg'
import hunt from '../imgs/헌터title1.jpg'
import hunt2 from '../imgs/헌터2.jpg'
import mo from '../imgs/무도가title.jpg'
import mo2 from '../imgs/무도가.jpg'
import ma from '../imgs/마법사title.jpg'
import ma2 from '../imgs/마법사.jpg'

const Carousela= () => {
  return (
    <div className='carousel1'>
    <Carousel className='wor'>
      <Carousel.Item >
      <img src={wor}  />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={wor2}/>    
      </Carousel.Item>
    </Carousel>
    <Carousel className='hunt'>
      <Carousel.Item >
      <img src={hunt}  />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={hunt2}/>    
      </Carousel.Item>
    </Carousel>
    <Carousel className='mo'>
      <Carousel.Item >
      <img src={mo}  />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={mo2}/>    
      </Carousel.Item>
    </Carousel>
    <Carousel className='ma'>
      <Carousel.Item >
      <img src={ma} />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={ma2}/>    
      </Carousel.Item>
    </Carousel>
    </div>
    
  );
}

export default Carousela;