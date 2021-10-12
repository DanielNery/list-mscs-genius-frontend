
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header.jsx';
import Search from './components/Search/Search.jsx';


function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
      </div>

      <div className="row">
        <Search />
      </div>

    </div>
  );
}

export default App;
