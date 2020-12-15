import React from 'react';

const HumidityCard = ({ info }) => {
  return (
    <div className='bg-blue-lighter rounded-lg px-auto py-8'>
      <div className='flex-col'>
        <p className='text-center text-gray-300'>Humidity</p>
        <div className='flex justify-center items-center'>
          <span className='text-5xl font-bold'>
            {Math.round(info ? info.humidity : '')}
            <sub className='font-lighter ml-1'>%</sub>{' '}
          </span>
        </div>
        <div className='flex justify-center items-center mt-4'>
          <div className='w-9/12 h-2 bg-white rounded-full mt-2'>
            <div
              className='bg-progress-bar h-2 w-0 rounded-full'
              style={{ width: `${info ? info.humidity : ''}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumidityCard;
