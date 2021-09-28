import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
  
const Landing = () => {
    return (
<>
<Container>


    <Row>
        <Col md={4} style={{marginTop:20}}><img src="https://www.bitsadmission.com/images1/BITS_university_logo.gif"/></Col>
        <Col md={{ span: 4, offset: 4 }}style={{marginTop:20}}><img src="https://www.bits-pilani.ac.in/images/companyBranding.gif"/></Col>

    </Row>
    <Row>

        <Col style={{marginTop: 30 }}>
            <Carousel >
                <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
        src="https://www.bitsadmission.com/images1/site%20img/121.jpg"
                    alt="Bits Pilani"
                />
                <Carousel.Caption>
                <h3>Bits Pilani</h3>
                    <p>Gandhi Marg, Bits Pilani</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
        src="https://www.bitsadmission.com/images1/site%20img/30.jpg"
                    alt="Bits Pilani"
                />
                <Carousel.Caption>
                <h3>Bits Pilani</h3>
                    <p>Clock Tower, Bits Pilani</p>
                </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
        src="https://www.bitsadmission.com/images1/site%20img/124.jpg"
                    alt="Bits Pilani"
                />
                <Carousel.Caption>
                <h3>Bits Pilani, Hydrabad</h3>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
        src="https://www.bitsadmission.com/images1/site%20img/33.jpg"
                    alt="Bits Pilani"
                />
                <Carousel.Caption>
                    <h3>Bits Goa </h3>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            </Col>

            <Col>

            <Card style={{width: 550, marginTop: 30, maxHeight:400 }}>
            <Card.Body>
                <Card.Title > Welcome to BITS, Pilani's  <cite title="Source Title" > Admissions website! </cite></Card.Title>
                <Card.Text>
                Birla Institute of Technology & Science (BITS), Pilani a leading Institute of Higher Education and a deemed University under section 3 of the UGC act offering degree programmes in Engineering, Sciences, Technology, Pharmacy, Management and Humanities. This web site describes the admission modalities for the on-campus degree programmes offered at Pilani campus, Goa Campus and Hyderabad Campus of BITS, Pilani.
                </Card.Text>
            </Card.Body>
            </Card>
            <Alert variant="primary" style={{width: 550, marginTop: 10 }}>
                    <p> <Chip label="Advisory" color="info" />  Public are advised not to fall prey to misinformation and fake admission offers. Click Here for more details.
                    </p>
                </Alert>

            </Col>
            </Row>

            <Row style={{marginTop: 10 }}>
             <Col>
            <Card>
                <Card.Body>
                    <Card.Title>  <Chip label="New" color="info" /> 28.09.2021</Card.Title>
                    <Card.Text>
                    Considering many requests regarding the online reporting of Documents Verification from candidates who missed today (28/09/2021), an exclusive session is arranged for such cases on 29/09/2021. An email regarding the schedule of the interaction has been sent to the registered email Id of the candidate. If the candidate fails to report as per the schedule, then no further alternative arrangement will be made and the admission will be cancelled.</Card.Text>

                    <footer className="blockquote-footer">
                    Admissions Team
                 <cite title="Source Title"> BITS, Pilani</cite>
                </footer>

                </Card.Body>
                </Card>
                </Col>
            </Row>


            <Row style={{marginTop: 10 }}>
             <Col>
            <Card>
                <Card.Body>
                    <Card.Title><Chip label="New" color="info" /> 28.08.2021</Card.Title>
                    <Card.Text>
                    BITSAT-2021 Scores: Please click here to view your BITSAT-2021 Marks Report using your login credentials.
                    </Card.Text>
                    <Button variant="primary" href="https://bitsat.cbexams.com/bitsatscorecard/default.aspx">BITSAT Scores</Button>

                    <footer className="blockquote-footer">
                    Admissions Team
                 <cite title="Source Title"> BITS, Pilani</cite>
                </footer>

                </Card.Body>
                </Card>
                </Col>
            </Row>


            <Row style={{marginTop: 10 }}>
             <Col>
            <Card>
                <Card.Body>
                    <Card.Title>BITSAT | 05.08.2021</Card.Title>
                    <Card.Text>
                    We have been receiving requests from some candidates for change in BITSAT exam dates/ slots/ centers due to clash with other exams etc. The exam for such cases will be conducted on 9th Aug 2021 at few select centers. All such students can download their hallticket now from the below link.
                    </Card.Text>
                    <Button variant="primary" href="https://bitsat.cbexams.com/bitsatht2021ytzto/Default.aspx">BITSAT Hallticket and Instructions</Button>

                    <footer className="blockquote-footer">
                    Admissions Team
                 <cite title="Source Title"> BITS, Pilani</cite>
                </footer>

                </Card.Body>
                </Card>
                </Col>
            </Row>

         </Container>
      
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed',bottom:20, right: 20 }}
        icon={<SpeedDialIcon />}
      >
      </SpeedDial>
         </>
    )
}

export default Landing;