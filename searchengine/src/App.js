import './App.css';
import { useState } from 'react';
import MOCK_DATA from './Mock-Data/MOCK_DATA.json'

function App() {
  const [search, setSearch] = useState("")
  return(
      <>
      <div className='container'>
          <h1>Filter Search</h1>
          <input className='input' type="text" placeholder='search....' onChange={(e)=>{setSearch(e.target.value)}} />
         {MOCK_DATA.user.filter((data)=>{
          if(search == ""){
              return data
          }
          else if(data.first_name.toLowerCase().includes(search.toLowerCase())){
              return data
          }
         }).map((MOCK_DATA)=>{
          return(
              <h4>{MOCK_DATA.first_name}</h4>
          )
         })}
         </div>
      </>
  )
}

export default App;
