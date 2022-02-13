import React from 'react';
import Feed from '../Components/Feed/Feed'
import Head from './Helper/Head';

const Home = () => {
  return (
  <section className='container mainContainer'>
   <Head title="Fotos" description="Home do site myPetz, veja seu feed de fotos."/>
   <Feed/>
  </section>
  );
};

export default Home;
