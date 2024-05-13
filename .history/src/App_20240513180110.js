import './App.css';
import data from './data/authors_names_1900s.json'

function App() {
  return (
    <div className="App">
      <h2>English Autors List</h2>
      {data.map((index) => (
        <div key={index}>
        <h3>{data.Name}</h3>
        </div>
      ) )}
    </div>
  );
}

export default App;
