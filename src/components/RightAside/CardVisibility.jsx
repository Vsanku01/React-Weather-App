import React from 'react';

const CardVisibility = ({ info }) => {
  return (
    <div className='bg-blue-lighter rounded-lg px-auto py-4'>
      <div className='flex-col text-center'>
        <p>Visibility</p>
        <div className='flex justify-center items-center p-3'>
          <span className='text-5xl font-bold'>
            {Math.round(info ? info.visibility : '')}
            <span>
              <sub className='ml-2 text-gray-300'>miles</sub>{' '}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardVisibility;
