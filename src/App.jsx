import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/SearchDiv/Search';
import Jobs from './components/JobDiv/Jobs';
import Value from './components/ValueDiv/Value';
import Footer from './components/FooterDiv/Footer';

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar></NavBar>
      <Search></Search>
      <Jobs></Jobs>
      <Value></Value>
      <Footer></Footer>
    </div>
  );
};

export default App;