import React from 'react';
import { connect } from 'react-redux';
import { remove as removePeople } from '../../actions/people';
import Button from '../button';

const PeopleButtonRemove = ({ id, dispatch }) => (
  <Button
    symbol={"-"}
    onClick={() => dispatch(removePeople(id))}
    color={"red"}
  />
);

export default connect()(PeopleButtonRemove);