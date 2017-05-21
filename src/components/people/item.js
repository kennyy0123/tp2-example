import React from 'react';
import PeopleButtonRemove from './remove';

const PeopleItem = ({ data }) => (
  <li>
    <PeopleButtonRemove id={data.id} />
    <span>{data.name}</span>
  </li>
);

export default PeopleItem;