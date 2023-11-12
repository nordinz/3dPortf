import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btntext }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text}</p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btntext}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1
      className={
        'sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-4 text-white mx-5'
      }
    >
      Hi, I am <span className="font-bold">Nordin</span> 👋
      <br />
      WebDev from Swe
    </h1>
  ),
  2: (
    <InfoBox
      text={'Lots of skills lol'}
      link={'/about'}
      btntext={'LearnMore'}
    />
  ),
  3: (
    <InfoBox
      text={'Lots of projects lol, many years and whatnot...'}
      link={'/projects'}
      btntext={'Portfolio'}
    />
  ),
  4: (
    <InfoBox
      text={'Contact is very nice lol.'}
      link={'/contact'}
      btntext={`Let's talk`}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
