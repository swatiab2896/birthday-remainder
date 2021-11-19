import React, { useState } from 'react';
import data from './data';
import List from './List';
import './birtday.css';

function App() {
  const [people, updatePeople] = useState(data);
  return (
  <main className='container'>
    <h2 className='head'>{people.length} people have their Birthday's today</h2>
    <List list={people} />
    <button className='btn-box' onClick={()=>updatePeople([])}>Clear All</button>
  </main>
  )
}

export default App;
