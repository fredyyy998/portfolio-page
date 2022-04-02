import './App.scss';
import { Navigation } from './navigation/Navigation';
import { Footer } from './footer/Footer';

function App() {

    return (
      <div>
          <Navigation/>
          <section id={"section1"}>
              <h1>Section 1</h1>
          </section>
          <section id={"section2"} style={{backgroundColor: 'grey'}}><h1>Section 2</h1>
          </section>
          <section id={"section3"}><h1>Section 3</h1>
          </section>
          <Footer />
      </div>
    );
}

export default App;
