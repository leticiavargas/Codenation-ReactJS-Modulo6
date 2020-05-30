import React, { useState, useEffect } from 'react';
import './App.scss';
import Topbar from './components/Topbar';
import Filters from './components/Filters';
import Contacts from './components/Contacts';

const App = (props) => {

  const [contacts, setContacts] = useState([]);
  const [filterAttr, setFilterAttr] = useState();
  const [sortAttr, setSortAttr] = useState();

  useEffect(() => { 
    const loadContacts = async () => {
      const response = await fetch('https://5e82ac6c78337f00160ae496.mockapi.io/api/v1/contacts');
      setContacts(await response.json());
    };
    loadContacts();
  }, []);
  
  return (
    <div className='app' data-testid="app">
      <Topbar />
      <Filters filterAttr={filterAttr} onFilter={setFilterAttr} sortAttr={sortAttr} onSort={setSortAttr} />
      <Contacts contacts={filterAndSortContacts(contacts, filterAttr, sortAttr)} />
    </div>
  )
};

function filterAndSortContacts(contacts, filter, sort) {
  let result = [ ...contacts ];

  if (filter)
    result = result.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  if (sort)
    result = result.sort((contact1, contact2) => contact1[sort].localeCompare(contact2[sort]));

    return result;
}

export default App;
