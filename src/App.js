import React from 'react';
import Results from "./components/Results";
import SearchBar from "./components/SearchBar";


const App = () => {
  return (
      <div>
      <h2>Repo search</h2>
      <SearchBar/>
      <Results/>
     </div>
  );
}




export default App;
