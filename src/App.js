import './App.css';
import SearchBar from './components/searchBar/search-bar';
import UploadData from './components/UploadData/upload-data';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Corrected import statement

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/user-details" element={<SearchBar />} />
          <Route exact path="/user-details/upload" element={<UploadData />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
