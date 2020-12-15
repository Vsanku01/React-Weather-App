import React from 'react';
import Card from './Card';
import CardStatus from './CardStatus';
import CardVisibility from './CardVisibility';
import HumidityCard from './HumidityCard';
import AirStatus from './AirStatus';
import '../../styles/main.css';

// flex justify-around items-center mt-14 flex-wrap

const RightAside = ({ weatherInfo }) => {
  let currentWeather = weatherInfo[0];
  return (
    <>
      <div className='flex-col justify-center items-center text-white'>
        <div
          className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-5 mt-14 gap-2 p-2'
          style={{ marginTop: '3.5rem' }}
        >
          {weatherInfo.map((info, index) => {
            if (index !== weatherInfo.length - 1) {
              return <Card info={info} key={index} />;
            }
          })}
        </div>

        {/* Down */}
        <div
          className='flex justify-start items-center'
          style={{ marginTop: '1.5rem', marginLeft: '10px' }}
        >
          <p className='text-4xl font-bold'>Today's Highlights</p>
        </div>

        {/* Card */}
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 m-2'>
          <CardStatus info={currentWeather} />
          <HumidityCard info={currentWeather} />
          <CardVisibility info={currentWeather} />
          <AirStatus info={currentWeather} />
        </div>
      </div>
    </>
  );
};

export default RightAside;
