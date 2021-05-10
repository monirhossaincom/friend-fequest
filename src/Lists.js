import React, { useState } from 'react';
import './App.css';
import List from './List';
import data from './data';

const Lists = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <section className='container'>
      <h3 className='title'> {people.length} Friend Request</h3>
      <List people={people} removeItem={removeItem}></List>
      <button type='button' className='btn' onClick={() => setPeople([])}>
        Delete All
      </button>
    </section>
  );
};

export default Lists;
