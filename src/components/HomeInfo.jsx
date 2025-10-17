import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, I'm
        <span className='font-semibold mx-2 text-white'>Sebastian</span>
        👋
        <br />
        A 3D technical artist and Unreal Engine developer from
          <span className="font-bold"> Colombia 🇨🇴</span>
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          I've built a strong skill set through collaborations with several companies across different industries
        </p>

        <Link to='/about' className='neo-brutalism-gray neo-btn'>
          Learn more
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
          Guided multiple projects from idea to impact, learning something new in each step <br/>
          <span className="font-bold">Want to walk through my journey?</span> 
        </p>

        <Link to='/projects' className='neo-brutalism-gray neo-btn'>
          Visit my portfolio
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Got a project in mind? <br/> Let's turn it into something amazing!
      </p>

      <Link to='/contact' className='neo-brutalism-gray neo-btn'>
        Time to connect
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
