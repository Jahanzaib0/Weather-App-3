import Main from './components/Main'
import NavBar from './components/NavBar';
import { useState } from 'react';
function App() {
  const [search, setSearch] = useState("karachi")
  console.log(search)
  return (
    <div className="App">
      <NavBar SearchFunc = {search => setSearch(search)}/>
     <Main city={search}/>
    </div>
  );
}

export default App;
