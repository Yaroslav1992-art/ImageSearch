import React from 'react';

const Section = props => (
  <>
    <h2>{props.title}</h2>
    {props.children}
  </>
);

export default Section;
