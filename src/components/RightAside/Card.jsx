import React from 'react';

const Card = ({ info }) => {
  return (
    <div className='bg-blue-lighter p-6 rounded-lg'>
      <div className='flex-col'>
        <p>{info.applicable_date}</p>
        <div className='flex justify-center items-center'>
          <img
            src={
              info
                ? `https://www.metaweather.com/static/img/weather/${info.weather_state_abbr}.svg`
                : ''
            }
            alt=''
            width='50px'
            height='50px'
          />
        </div>
        <div className='flex justify-between'>
          <span>{Math.round(info.min_temp) + '°c'}</span>
          <span className='text-gray-400'>
            {Math.round(info.max_temp) + '°c'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
