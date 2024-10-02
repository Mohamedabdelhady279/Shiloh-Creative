import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const Webflow = () => {
  return (
    <div id='webfolw' className='secweb'> 
    <h3>Why Webflow.</h3>
    <Container>
    <Row>

    <Col md={4} sm={12} className="reason wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.1s">
   <div>
   <h5>REASON 1</h5>
    <h2>Next-Level Storytelling</h2>
    <img src="images\62966934fc028e3715017571_undraw_mobile_development_re_wwsn 1.svg" alt="" />
    <p>Unleash the best visuals and experiences that modern web design has to offer. Webflow turns your wildest of ideas into strategic customer-experiences.</p>
   </div>
    </Col>


    <Col md={4} sm={12}  className="reason wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.3s">
     <div>
     <h5>REASON 2</h5>
    <h2>Unbelievable Performance    </h2>
    <img src="images\62966cbb57bfa16e79fe8406_undraw_data_re_80ws 1 (1).svg" alt="" />
    <p>Hosted on an ultra-fast global CDN, Webflow goes full steam ahead with load speed, uptime, asset optimization, and SEO. All without ever needing to install a patch or upload a server configuration.</p>
     </div>

    </Col>


    <Col md={4} sm={12} className="reason wow bounceInUp" data-wow-duration="2s" data-wow-delay="0.5s">
     <div>
     <h5>REASON 3</h5>
    <h2>Developer-Free Tweaks    </h2>
    <img src="images\62966cd0f71f4f702ab6febd_undraw_asset_selection_re_k5fj 1 (1).svg" alt="" />
    <p>Webflow’s ‘Editor Mode’ allows any team member to update content as they please without wreaking havoc or paying people like us to fix it.</p>
     </div>

    </Col>
    </Row>





    </Container>


    </div>
  )
}

export default Webflow