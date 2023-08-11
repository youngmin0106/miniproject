
import Carousel from '../component/Carousel';
import './Info.css';
import woricon from '../img/전사아이콘.png'
import WorVideo from '../component/WorVideo';
import hunticon from '../img/헌터아이콘1.png'
import HuntVideo from '../component/HuntVideo';
import modoicon from '../img/무도가아이콘1.png'
import ModoVideo from '../component/ModoVideo';
import magiicon from '../img/마법사아이콘.png';
import MagiVideo from '../component/MagiVideo';


const Info = () => {
  return (
    <>

      <Carousel />
      <div className='content'>
        <div className='jobinfo'>
          <img src={woricon} />
          전사 직업 정보</div>
        <WorVideo />
        <div className='huntinfo'>
          <img src={hunticon} />
          헌터 직업 정보</div>
        <HuntVideo />
        <div className='modoinfo'>
          <img src={modoicon} />
          무도가 직업 정보</div>
        <ModoVideo />
        <div className='magiinfo'>
          <img src={magiicon} />
          마법사 직업 정보</div>
        <MagiVideo />
      </div>
    </>
  )
}


export default Info;