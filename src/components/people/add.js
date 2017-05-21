import React from 'react';
import { connect } from 'react-redux';
import { add as addPeople } from '../../actions/people';
import Button from '../button';

const onSubmit = (event, dispatch, input) => {
  event.preventDefault();

  if (!input.value.trim()) { return; }
  
  dispatch(addPeople(input.value));
  input.value = '';
};

const AddPeople = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Button
        onClick={e => onSubmit(e, dispatch, input)}
        color={"lightgreen"}
        symbol={"+"}
      />
      <input ref={node => { input = node }} />
    </div>
  )
};

// enhance component with dispatch etc...
export default connect()(AddPeople);