import React from 'react';

// Wind Status
const CardStatus = ({ info }) => {
  console.log('from card status', info);
  return (
    <div className='bg-blue-lighter rounded-lg px-auto py-8'>
      <div className='flex-col'>
        <p className='text-center text-gray-300'>Wind status</p>
        <div className='flex justify-center items-center'>
          <span className='text-5xl font-bold'>
            {Math.round(info ? info.wind_speed : '')}
            <sub className='font-lighter ml-1'>mph</sub>{' '}
          </span>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <i className='material-icons'>navigation</i>
          <span className='text-gray-400'>
            {info ? info.wind_direction_compass : ''}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardStatus;
