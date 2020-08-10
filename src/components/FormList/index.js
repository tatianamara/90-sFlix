import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  position: relative;
  margin-top: 2em; 
  padding:0;
  
  textarea {
    min-height: 150px;
  }
  input[type="color"] {
    padding-left: 56px;
  }
`;

const ListItem = styled.li`
  text-decoration: none;
  list-style-type: none;
  padding: 5px 10px;
  &:nth-child(odd) {
    background-color: #111;
  }
  
  span {
    display: inline-block;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    margin-right: 10px;
  }
`;

function FormList({ values }) {
  return (
    <List>
      {values.map((category, index) => (
        <ListItem key={`${category.title + index}`}>
          <span style={{ backgroundColor: category.color }} />
          {category.title}
        </ListItem>
      ))}
    </List>
  );
}

export default FormList;