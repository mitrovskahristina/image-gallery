import './App.css';
import Gallery from './components/Gallery';
import ImageGallaryComponent from './components/ImageGalleryComponent';
import items from './components/items'

function App() {
  return (
    <div className="App">
      <Gallery items={items} />
      {/* <ImageGallaryComponent /> */}
    </div>
  );
}

export default App;
