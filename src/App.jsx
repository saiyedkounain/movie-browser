import React, { useState } from 'react'
import Search from './components/Search';


const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  


  return (
    <main>
      <div className='pattern' />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner"/>
          <h1>Find <span className='text-gradient'>Movies</span> you love without any hassle</h1>
                
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          A little change

          

        </header>
      </div>

    </main>
  )
}

export default App
