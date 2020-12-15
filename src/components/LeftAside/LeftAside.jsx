import React, { useState, useEffect } from 'react';
import '../../styles/main.css';
const LeftAside = ({
  location,
  setLocation,
  toggle,
  setToggle,
  weatherInfo,
  loc,
}) => {
  const [temp, setTemp] = useState('');
  const [abbr, setAbbr] = useState('');
  const [inf, setInf] = useState([]);

  useEffect(() => {
    if (weatherInfo.length > 0) {
      console.log('From left Aside', weatherInfo[1]);
      setInf(weatherInfo[1]);
      const { the_temp, weather_state_abbr } = weatherInfo[1];
      setTemp(the_temp);
      setAbbr(weather_state_abbr);
    }
  }, [weatherInfo]);

  const buttonHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className={toggle ? 'hidden' : ''}>
      <div className='flex-col'>
        <div className='flex'>
          <button
            className='bg-light-gray text-white mt-10 ml-10 rounded-md p-3 focus:outline-none focus:ring focus:border-red-100'
            onClick={buttonHandler}
          >
            Search for Places
          </button>
        </div>
        <div className='flex justify-center items-center my-10'>
          <img
            src={
              abbr
                ? `https://www.metaweather.com/static/img/weather/${abbr}.svg`
                : ''
            }
            alt=''
            width='150px'
            height='50px'
          />
        </div>
        {/* 1 */}
        <div className='flex justify-center items-center text-white text-7xl'>
          <p>
            <span style={{ fontSize: '4.5rem' }} className='font-extrabold '>
              {Math.round(+temp)}
            </span>{' '}
            <span className='text-gray-400 text-3xl'>°C</span>
          </p>
        </div>
        {/* 2 */}
        <div className='flex justify-center items-center'>
          <p
            className='text-gray-400 font-bold'
            style={{ fontSize: '30px', marginTop: '10px' }}
          >
            {inf.weather_state_name}
          </p>
        </div>
        {/* 3 */}
        <div className='flex justify-center items-center'>
          <p
            className='text-gray-400 font-bold'
            style={{ fontSize: '20px', marginTop: '30px' }}
          >
            Today
          </p>{' '}
          <br />
        </div>
        {/* 4 */}
        <div className='flex justify-center items-center'>
          <p
            className='text-gray-400 font-bold'
            style={{ fontSize: '20px', marginTop: '30px' }}
          >
            <i class='material-icons'>location_on</i> {loc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeftAside;
