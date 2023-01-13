import './css/App.css';
import HomeSliderCard from './components/home/homeSliderCard';
import HomeArticle from './components/home/homeArticle';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <main>
      <figure>
        <img src='img/img.jpg' alt='Plaatje'/>
      </figure>
      <div>{/*Slider*/}
        <HomeSliderCard/>
      </div>
      <div>{/*Slider nav*/}
        {/*array with bolletjes*/}
        <button>
          <span>{/*active*/}
          
          </span>
        </button>
        <button>
          <span>
          
          </span>
        </button>
        <button>
          <span>
          
          </span>
        </button>
      </div>
      <section>
        <HomeArticle/>
        <HomeArticle/>
      </section>
    </main>
  );
}

export default App;
