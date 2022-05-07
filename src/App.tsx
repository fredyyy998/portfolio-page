import './App.scss';
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';
import TopNavigation from './topNavigation/TopNavigation';
import { useLocation } from 'react-router';

function App() {

  const { hash } = useLocation();
  const activePageIndex = parseInt(hash[hash.length-1]) - 1;
    return (
      <div>
        <TopNavigation activeIndex={activePageIndex}/>
          <Navigation/>
          <section id={"section1"}>
              <h1>About</h1>
          </section>
          <section id={"section2"} style={{backgroundColor: 'grey'}}>
            <h1>Portfolio</h1>
          </section>
          <section id={"section3"}><h1>Resume</h1>
          </section>
          <Footer />
      </div>
    );
}

export default App;
