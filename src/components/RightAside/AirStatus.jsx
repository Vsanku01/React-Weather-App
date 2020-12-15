import React from 'react';

const AirStatus = ({ info }) => {
  return (
    <div className='bg-blue-lighter rounded-lg px-auto py-4'>
      <div className='flex-col text-center'>
        <p>Air Pressure</p>
        <div className='flex justify-center items-center p-3'>
          <span className='text-5xl font-bold'>
            {Math.round(info ? info.air_pressure : '')}
            <span>
              <sub className='ml-2 text-gray-300'>mb</sub>{' '}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AirStatus;
