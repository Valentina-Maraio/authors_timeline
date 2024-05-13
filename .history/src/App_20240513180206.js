import './App.css';
import data from './data/authors_names_1900s.json'

function App() {
  return (
    <div className="App">
      <h2>English Autors List</h2>
      {data?.data?.map((index) => (
        <div key={index}>
        <li>{data.Name}</li>
        </div>
      ) )}
    </div>
  );
}

export default App;
