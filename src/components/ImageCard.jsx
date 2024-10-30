import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const ImageCard = ({ title, images, text }) => {
  return (
    <Card style={{ width: '100%', marginBottom: '20px' }}> 
      <Card.Body>
        <Card.Title style={{ fontSize: '2.5em', fontStyle: 'italic' }}>{title}</Card.Title> 
        <Carousel>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
                className="d-block"
                style={{ width: '90%' }} 
                src={image.src}
                alt={image.alt || `Slide ${index + 1}`}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <Card.Text style={{ fontSize: '1.2em' }}>{text}</Card.Text> 
        <Button variant="primary" style={styles.button}>Reservar</Button> 
      </Card.Body>
    </Card>
  );
};



const styles = {
  button: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
    fontSize: '1em',
    padding: '10px 20px',
    borderRadius: '5px',
    marginTop: '10px',
  },
};

export default ImageCard;


