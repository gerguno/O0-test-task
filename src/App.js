import React, { useState, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, [])

  useEffect(() => {
    document.body.style.background = 'linear-gradient(180deg, #FFF 0%, #F2F2F2 100%)'
    
    if (scrollPosition > 1500 && scrollPosition < 2250) {
      document.body.style.background = 'linear-gradient(180deg, #CCCD96 0%, #F2F2F2 100%)'
    }
  }, [scrollPosition]);

  return (
    <main>
      {/* <div id="sp">
        {scrollPosition}
      </div> */}
      <div id="menu">
        {(scrollPosition > -1 && scrollPosition < 560) && <img src="menu1.png" width="212" />}
        {(scrollPosition > 560 && scrollPosition < 1440) && <img src="menu2.png" width="212" />}
        {(scrollPosition > 1440 && scrollPosition < 2250) && <img src="menu3.png" width="212" />}
        {(scrollPosition > 2250 && scrollPosition < 3800) && <img src="menu4.png" width="212" />}
        {(scrollPosition > 3800 && scrollPosition < 4700) && <img src="menu5.png" width="212" />}
        {(scrollPosition > 4700 && scrollPosition < 10000) && <img src="menu6.png" width="212" />}
      </div>

      <div id="content">
        <img src="content.png" width="1341" />
      </div>
    </main>
  );
}

export default App;
