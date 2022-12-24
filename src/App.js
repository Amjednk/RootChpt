import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@trimbleinc/modus-react-bootstrap/css/dist/modus-react-bootstrap-dark.min.css';
import {useState} from 'react';
import MovieList from './Components/MovieList';
import AddItem from './Components/AddItem';
import FilterSearch from './Components/FilterSearch';
import data from './Components/data';


/*main App*/
function App() {

  const [newData, setNewData] = useState(data); //New movie data 
  const addMovie = (newMovie) => {setNewData([...newData, newMovie])}; // Add movie 
  const [titleSearch, setTitleSearch] = useState(""); //searching by title
  const [ratingSearch, setRatingSearch] = useState(0); //searching by rate
  
  return (
    <div className="App">
      
        {/*Filtering and comparing data for movie search into the movies list*/}
        <FilterSearch defaultRate={ratingSearch} getSearch={setTitleSearch} getRate={setRatingSearch}/>
        <AddItem addMovie={addMovie} />
        <div>
          {/*Inserating Movies into the cards list*/}
          <MovieList data ={newData.filter(
          (el) => el.title.trim().toLowerCase().includes(titleSearch) && el.rating >= ratingSearch)} />
        </div>
    </div>
  );
}

export default App;
