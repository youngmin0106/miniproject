import { Carousel } from 'react-bootstrap';
import bg from '../img/main.png';
import event3 from '../imgs/이벤트3.jpg';
import event1 from '../imgs/이벤트1.jpg';
import event2 from '../imgs/이벤트2.jpg';
import minevent1 from '../imgs/작은이벤트1.jpg';
import minevent2 from '../imgs/작은이벤트2.jpg';
import minevent3 from '../imgs/작은이벤트3.jpg';
import { useNavigate } from 'react-router-dom';
import './Main.css';


const Main = () => {
  const navigate = useNavigate();
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
      <Carousel.Item>
        <img src={event3}/>    
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='event2'>
    <Carousel>
      <Carousel.Item >
      <img src={minevent1}  />   
      </Carousel.Item>
      <Carousel.Item>
        <img src={minevent2}/>    
      </Carousel.Item>
      <Carousel.Item>
        <img src={minevent3}/>    
      </Carousel.Item>
    </Carousel>
    </div>
    <div className='main-news'>
      <h2>＊공지사항</h2>
      <ul>
        <li>-공지</li>
      </ul>
      <ul>
        <li>-공지2</li>
      </ul>
      <ul>
        <li>-공지3</li>
      </ul>
    </div>
    </div>
    <div className='footer'>
      <div className='all'>

        <img onClick={()=>{navigate('/')}} src='https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/layout/logo_rpg.png?v=20230816074219' />
      
      <ul className='footer-menu'>
        <li>회사소개 ㅣ</li>
        <li>이용약관 ㅣ</li>
        <li>개인정보처리방침 ㅣ</li>
        <li>운영정책 ㅣ</li>
        <li>청소년보호정책 ㅣ</li>
        <li>게임이용등급 ㅣ</li>
        <li>고객센터 ㅣ</li>
      </ul>
      <address className='info'>
        <span>회사명
        </span>
        ㈜스마일게이트 알피지 
        
        <span>대표이사
        </span>
        안영민  
        <span>사업자 등록번호
        </span>
        99-01-06-2023-08 
        <br/>  
        <span>통신판매업 신고번호
        </span>
        제2017-서울-0808호
        <span>E.lostark@naver.com
        </span>
        F.02-0123-4567
        <br/>    
      </address>
      <p className='copy'>
        Smilegate RPG All right reserved
      </p>
    </div>
    </div>
    </>
     
    )

  
}

export default Main;