import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store';
import PeopleList from './people/list';
import AddPeople from '../components/people/add';

// State will "flow" down from here thanks to the Provider component
const Application = () => (
  <div>
    <PeopleList />
    <AddPeople />
  </div>
)

export default Application;