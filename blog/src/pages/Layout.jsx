import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout() {
  return (
    <>
      <Header />
      <div className='pt-5 pb-5'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
