import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  const firstName=''
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Menu</Card.Title>
        <Card.Text>
        {firstName?`Hello ${firstName} `:'welcome to our menu!'}
        </Card.Text>
        <Button variant="primary"></Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;