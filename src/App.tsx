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
    let isScrolling: any;

// Listen for scroll events
    window.addEventListener('scroll', ( event ) => {
      // Clear our timeout throughout the scroll
      window.clearTimeout(isScrolling);

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(() => {

        if (refSection1.current) {
          if (isElementVisible(refSection1?.current)) setActivePageIndex(0);
        }
        if (refSection2.current) {
          if (isElementVisible(refSection2?.current)) setActivePageIndex(1);
        }
        if (refSection3.current) {
          if (isElementVisible(refSection3?.current)) setActivePageIndex(2);
        }
        if (refSection4.current) {
          if (isElementVisible(refSection4?.current)) setActivePageIndex(3);
        }

      }, 66);

    }, false);
  });

    return (
      <div>
        <TopNavigation activeIndex={activePageIndex} onClick={scrollTo}/>
        <Navigation activeIndex={activePageIndex} onSectionClick={scrollTo}/>
        <div className={'wrapper'}>
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

      </div>
    );
}

const isElementVisible = (el: HTMLElement) => {
  let rect     = el.getBoundingClientRect();
  return  rect.y === 0;
}

export default App;
