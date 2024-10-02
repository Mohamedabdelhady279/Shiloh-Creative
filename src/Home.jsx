import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { HashLink } from 'react-router-hash-link';
import { NavLink } from 'react-router-dom';

import Contact from './Contact'


const Home = () => {
  return (
<>

<section className='secone'>
    <Container >
      <Row>
        <Col md={7} sm={12}           className="partone wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.1s">
        <p>WEB DESIGN <span>//</span> WEBFLOW DEVELOPMENT <span>//</span> SEO</p>
        <h1>Welcome</h1>   
        <h5>We build marketing websites that help you sell on autopilot.        </h5>     
        <HashLink to="/#contact"><button>Let's talk</button></HashLink>

          </Col>




        <Col md={5} sm={12} className="bannarimgs wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s" >

        <img src="images/623503637e979197919c6c03_Topology-1 (1).svg" alt="" className="waves" />
              <img src="images/623a183aa76fb537cbc5dc0e_Group 8-p-500.png" alt="" className="laptop" />

              <div className="imgbox gimg">
                <img src="images/62324067d42bfc263ee547ff_image 4 (Traced).svg" alt="" />
              </div>
              <div className="imgbox uimg">
                <img src="images/6232406724bd9b36622aed48_image 3 (Traced).svg" alt="" />
              </div>
              <div className="imgbox wimg">
                <img src="images/623240674411e07510215b6f_image 2 (Traced).svg" alt="" />
              </div>
             
        </Col>
      </Row>

    </Container>
    
    

    </section>




    <section className='sectwo'>

    <Container>
      <Row>
        <Col md={6} sm={12}className=" wow slideInLeft" data-wow-duration="2s" data-wow-delay="0.3s"        >
         <div className="secimg">
              <img src="images/623506fac432155edb494f48_Topology-2 (1).svg" alt="" className="waves" />
              <img src="images/6297dd8a74746c61110b1aaa_undraw_team_collaboration_re_ow29 1 (2).svg" alt="" className="people" />
              </div>
             
        

        
        </Col>
        <Col md={6} sm={12}  className="sec2text wow slideInRight" data-wow-duration="2s" data-wow-delay="0.1s"   >
        
        <button>the dream</button>
        <p>Imagine having your sales team on the job 24/7, interacting with an endless stream of ready-to-buy visitors.</p>
        
        
          </Col>



      </Row>
    </Container>

    </section>





</>
    


  )}

export default Home




