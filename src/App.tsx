import './App.scss';
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import TopNavigation from './topNavigation/TopNavigation';
import { useEffect, useRef, useState } from 'react';

function App() {
  const refSection1 = useRef<HTMLElement>(null);
  const refSection2 = useRef<HTMLElement>(null);
  const refSection3 = useRef<HTMLElement>(null);
  const refSection4 = useRef<HTMLElement>(null);
  const [activePageIndex, setActivePageIndex] = useState(0);
  let lastScrollTop = 0;
  let isScrolling = false;
  const scrollTo = (index: number) => {
    setActivePageIndex(index);
    switch (index) {
      default:
      case 0:
        refSection1.current?.scrollIntoView();
        break;
      case 1:
        refSection2.current?.scrollIntoView();
        break;
      case 2:
        refSection3.current?.scrollIntoView();
        break;
      case 3:
        refSection4.current?.scrollIntoView();
        break;
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', (ev) => {
      console.log(true);
      ev.preventDefault();
      let scrollTop = document.documentElement.scrollTop;
      let newIndex = activePageIndex;
      if (scrollTop > lastScrollTop){
        // scroll down
        if (activePageIndex < 4) {
          newIndex = activePageIndex + 1;
        }
      } else {
        // scroll up
        if (activePageIndex > 0) {
          newIndex = activePageIndex - 1;
        }
      }
      scrollTo(activePageIndex);
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    })
  })

    return (
      <div>
        <TopNavigation activeIndex={activePageIndex} onClick={scrollTo}/>
        <Navigation activeIndex={activePageIndex} onSectionClick={scrollTo}/>
        <section id={"section1"} ref={refSection1}>
          <div className={'section-content'}>
            <h1>About</h1>
          </div>
        </section>
        <section id={"section2"} ref={refSection2}>
          <div className={'section-content'} style={{backgroundColor: 'grey'}}>
            <h1>Portfolio</h1>
          </div>
        </section>
        <section id={"section3"} ref={refSection3}>
          <div className={'section-content'}>
            <h1>Resume</h1>
          </div>
        </section>
        <section id={"section4"} ref={refSection4}>
          <div className={'section-content'}>
            <Footer />
          </div>
        </section>

      </div>
    );
}

export default App;
