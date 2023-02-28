import './App.css';
import Gallery from './components/Gallery';
import items from './components/items'

function App() {
  return (
    <div className="App">
      <Gallery items={items} />
    </div>
  );
}

export default App;
