import './App.css';
import data from './data/authors_names_1900s.json'

function App() {
  return (
    <div className="App">
      <h2>English Autors List</h2>
      {data.map((index) => (
        <>
        <h3>{data.Name}</h3>
        </>
      ) )}
    </div>
  );
}

export default App;
