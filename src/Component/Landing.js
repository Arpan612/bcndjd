import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import CallIcon from '@mui/icons-material/Call';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import GoogleMapReact from 'google-map-react';

const Landing = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    const handleClick = () => {
        console.info('You clicked the Chip.');
      };
    
      const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
      const defaultProps = {
        center: {
          lat: 28.363313,
          lng: 75.587213
        },
        zoom: 16
      };
    
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
      };
      
    return (
<>
<Container>

<Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Contact
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              For queries related to BITSAT-2021, you may mail us at: bitsat2021@pilani.bits-pilani.ac.in or call us at below numbers during Monday-Friday 9.00AM to 1:00PM and 2:00PM to 5.00PM.
              Admissions Office, BITS-Pilani
              <Stack direction="row" spacing={2} style={{marginTop:30}}>
      <Chip
        label="01596-242205"
        color="info"
      />
            <Chip
        label="01596-255330"
        color="info"
        />
      </Stack>


            </Typography>
          </Box>
        </Fade>
      </Modal>

    <Row>
        <Col md={4} style={{marginTop:20}}><img src="https://www.bitsadmission.com/images1/BITS_university_logo.gif"/></Col>
        <Col md={{ span: 4, offset: 4 }}style={{marginTop:20}}><img src="https://www.bits-pilani.ac.in/images/companyBranding.gif"/></Col>

    </Row>

    <Stack direction="row" spacing={2} style={{marginTop:30}}>
      <Chip
        label="Home"
        onClick={handleClick}
        color="info"
      />
      <Chip
        label="BITSAT Scores"
        onClick={handleClick}
        color="info"
        variant="outlined" />
     <Chip
        label="Hall Ticket"
        onClick={handleClick}
        color="info"
        variant="outlined" 
      />
    <Chip
        label="FD"
        onClick={handleClick}
        color="info"
        variant="outlined" 
      />
    <Chip
        label="HD"
        onClick={handleClick}
        variant="outlined" 
        color="info"
      />
          <Chip
        label="MBA"
        onClick={handleClick}
        variant="outlined" 
        color="info"
      />
    </Stack>

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
                    <Card.Title>FD Withdraw Link  23.10.2021</Card.Title>
                    <Card.Text>
                    Candidates (from Confirmed offer list/Waiting List) who would like to withdraw from provisional admission 2021-22 of First Degree Programmes (BE, MSc, B.Pharm.) offered at BITS Pilani can CLICK HERE to withdraw the offer. Please CLICK HERE for to know the refund date and the applicable refunds.
                    </Card.Text>
                    <Button variant="primary" href="https://bitsat.cbexams.com/fdwithdrawp1/default.aspx">CLICK HERE to withdraw your offer</Button>

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
        icon={<CallIcon />}
        onClick={handleOpen}
      >
      </SpeedDial>

      <Row style={{height: '30vh', marginBottom:'30vh', width:'100%'}}>
        <Col style={{marginTop: 30 }}>
        <img style={{ height: '100%', width:'80%', marginLeft:'28%'}}src="https://i0.wp.com/livewire.thewire.in/wp-content/uploads/2018/05/banner6.jpg?zoom=1.25&fit=800%2C449&ssl=1"/>
        </Col>
        <Col style={{marginTop: 30 }}>
        <div style={{height: '100%', width: '72%', marginLeft:'5%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBXFAxSgXP7b5D25WEtjxkYqoWM2PjxaLg' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
        </GoogleMapReact>
      </div>        </Col>
        </Row>
     



         </>



    )
}

export default Landing;