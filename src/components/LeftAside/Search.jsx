import React from 'react';
import '../../styles/main.css';

const Search = ({
  toggle,
  setToggle,
  setLocation,
  tempHandler,
  location,
  setLoc,
}) => {
  const buttonHandler = () => {
    setToggle(!toggle);
  };

  const searchButtonHandler = () => {
    tempHandler();
    setToggle(!toggle);
    setLocation('');
  };

  return (
    <div className={!toggle ? 'hidden' : ''}>
      <div className='flex justify-end m-3'>
        <button
          onClick={buttonHandler}
          className='text-white text-xl focus:outline-none'
        >
          &#10005;
        </button>
      </div>
      <div className='flex items-baseline justify-center'>
        <input
          type='text'
          name='places'
          id='places'
          placeholder='Search for places'
          className='mt-10 ml-2 p-3 w-auto focus:outline-none focus:ring focus:border-red-100'
          value={location}
          onChange={(e) => {
            setLocation(e.target.value);
            setLoc(e.target.value);
          }}
        />
        <button
          className='bg-blue-200 p-2 mx-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 hover:bg-gray-600 hover:text-white transition duration-300 ease-in-out text-black'
          onClick={searchButtonHandler}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
