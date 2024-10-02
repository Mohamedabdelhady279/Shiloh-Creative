import { Col, Container, Row } from 'react-bootstrap'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
// service_y9njtjo
// template_ub0z5uh
// YS2Q1F8Ryhv233qxg
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_y9njtjo', 'template_ub0z5uh', form.current, {
        publicKey: 'YS2Q1F8Ryhv233qxg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };
  return (
    <section className="homesec6" id="contact">
    <Container>
      <h3>Contact Us</h3>
      <Row className="align-items-center">
        <Col md={6} sm={12} className="wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
          <div>
            <p><span>Email:</span> Mohamedabdelhady@gmail.com</p>
            <p><span>Phone:</span> 01068547610</p>
            <p><span>Address:</span> Mansoura</p>
          </div>
        </Col>
        <Col md={6} sm={12} className="wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s">
          <div>
            <form ref={form} onSubmit={sendEmail} >
              <div className="d-flex">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="company" placeholder="Company" />
              </div>
              <div className="d-flex">
                <input type="text" name="email" placeholder="Email" />
                <input type="text" name="phone" placeholder="Phone" />
              </div>
              <textarea name="message" placeholder="Message"></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </Col>

      </Row>
    </Container>
  </section>
  )
}

export default Contact