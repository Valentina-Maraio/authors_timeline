import './App.css';
import data from './data/authors_names_1900s.json'

function App() {
  return (
    <div className="App">
      <h2>English Autors List</h2>
      <ul>
        {Object.values(data.Name).map((author, index) => (
          <li key={index}>{author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
