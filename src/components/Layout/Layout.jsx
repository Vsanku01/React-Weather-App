import React from 'react';
import '../../styles/main.css';
import cloud from '../cloud.mp4';

const Layout = ({ title, children }) => {
  return (
    <div className='h-screen overflow-x-hidden'>
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          left: '50%',
          top: '50%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(-50%,-50%)',
          zIndex: '-1',
        }}
      >
        <source src={cloud} type='video/mp4' />
      </video>
      <main className='mx-auto h-full'>{children}</main>
      <footer className='text-center font-bold  bottom-0 fixed'>
        {/* Powered by <img src='/cloud-bg.png' alt='Vercel Logo' /> */}
        Vishnu &copy; DevChallenges.io
      </footer>
    </div>
  );
};

export default Layout;
