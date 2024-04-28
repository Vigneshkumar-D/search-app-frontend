import './App.css';
import SearchBar from './components/searchBar/search-bar';
import UploadData from './components/UploadData/upload-data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<SearchBar />} />
          <Route path="/upload" element={<UploadData />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
