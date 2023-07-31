import Lottie from 'lottie-react';
import animation from '../../../public/desktop_pc/animation.json';

function Portfolio() {
  return (
    <div className='w-[680px] h-[20px]  m-auto pt-60'>
      <div style={{ backgroundColor: 'transparent' }}>
        <Lottie loop={true} animationData={animation} />
      </div>
    </div>
  );
}

export default Portfolio;