import React from 'react';
import { connect } from 'react-redux';
import PeopleItem from '../../components/people/item';

// pick useful properties from application state
const mapStateToProps = (state, ownProps) => ({
  people: state.people,
});

const PeopleList = ({ people }) => (
  <ul
    style={{ listStyle: 'none', padding: 0 }}
  >
    {
      people.map(p => <PeopleItem key={p.id} data={p} />)
    }
  </ul>
);


// "enhance" layout with properties inherited from application state
export default connect(mapStateToProps)(PeopleList);