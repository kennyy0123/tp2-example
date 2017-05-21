import React from 'react';
import { Provider } from 'react-redux';
import Store from '../store';
import PeopleList from './people/list';
import AddPeople from '../components/people/add';

const Application = () => (
  <div>
    <PeopleList />
    <AddPeople />
  </div>
)

export default Application;