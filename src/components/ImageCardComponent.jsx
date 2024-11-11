import React from 'react';
import { Carousel, Card, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

const ImageCard = ({ title, images, text, isImageLeft }) => {
  return (
    <Card style={{ width: '100%', marginBottom: '20px' }}>
      <Card.Body>
        <Row>
          {/* Columna de la imagen */}
          <Col md={6} style={{ order: isImageLeft ? 1 : 2 }}>
            <Carousel>
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    style={{ objectFit: 'cover', borderRadius: '5px' }}
                    src={image.src}
                    alt={image.alt || `Slide ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Columna del texto */}
          <Col md={6} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', order: isImageLeft ? 2 : 1 }}>
            <Card.Title style={{ fontSize: '2.5em', fontStyle: 'italic' }}>{title}</Card.Title>
            <Card.Text style={{ fontSize: '1.2em' }}>{text}</Card.Text>
            <Button variant="primary" style={styles.button}>
              <FontAwesomeIcon icon={faCalendarAlt} style={{ marginRight: '10px' }} />
              Reservar
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

const styles = {
  button: {
    backgroundColor: '#28a745', // Cambia el color del botón
    borderColor: '#28a745',
    fontSize: '1.5em', // Tamaño de letra más grande
    padding: '10px 20px', // Ajusta el padding para que se ajuste al tamaño del texto
    borderRadius: '5px',
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default ImageCard;
