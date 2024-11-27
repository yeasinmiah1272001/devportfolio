import React from 'react';
import { Outlet } from 'react-router-dom';
import Fotter from '../Footer/Footer';

const Root = () => {
      return (
            <div className='bg-[#0A192F]'>
                  <Outlet></Outlet>
                  <Fotter />
            </div>
      );
};

export default Root;