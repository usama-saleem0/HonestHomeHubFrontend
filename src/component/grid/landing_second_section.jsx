import React from 'react'
import { Stack } from 'react-bootstrap'
import './index.css'
import side_image_5 from '../../assets/img/Frame 68.png'
import Six_by_six from './Six_by_six'
import side_image from '../../assets/step1.png'
import side_image_2 from '../../assets/step2.png'
import side_image_3 from '../../assets/img/Frame 67.png'
import img1 from '../../assets/remodelr.png'
import img2 from '../../assets/Frame 115.png'
import img3 from '../../assets/Frame 114.png'
import { Carousel } from 'react-responsive-carousel';
import { Link, useNavigate } from 'react-router-dom'
import { Container } from "@mui/material";

const LandingFirstSection = () => {
    const navigation = useNavigate()

    const NavigateLogin = () => {
        navigation('/mainsection')
    }

  return (
    <Stack className='main-sec honest-80'>
  <Stack className='our-titel honest-81'>
    Our Process Work Flow 
  </Stack>
  <Stack className='our-titel-para honest-82'>
    Honest Home Hub is a service that helps you address home service problems by matching you with vetted vendors. You can choose from up to three vendors, have them come to your house at your preferred time, and even consult with an expert to select the best quote and service description. Payments are made through Honest Home Hub, and you can communicate with the vendor through a convenient chat box to coordinate until project completion.
  </Stack>
  <Carousel showThumbs={false} showStatus={false} infiniteLoop={true}
  
  
  autoPlay={true} autoPlaySpeed={5000}
  
  
  >
    <Container key="slide1" style={{ padding: 20, height: 650 }} maxWidth="xl" className="honest-83">
      <Six_by_six
        first_section={<Stack>
          <Stack className='sec2-titel honest-84'>Step 1</Stack>
          <Stack className='sec2_titel_heading honest-85'>Describe Home Service Issue, Share 4 Images, and Provide Available Times</Stack>
          <Stack className='sec2_titel_sub_data honest-86'>This is the easiest and fastest way for you to talk about your problem. There is no need to answer 100 questions, or give your whole life story before you can submit your problem and availability</Stack>
          <div className='btn_section honest-87'>
            {/* <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}> */}
              <button onClick={NavigateLogin} className='carousel_button honest-88'>Share Your Issue</button>
            {/* </Link> */}
          </div>
        </Stack>}
        second_section={<img width={'100%'} src={side_image} alt='' className='carousel-img honest-96'/>}
      />
    </Container>
    <Container key="slide2" style={{ padding: 20, height: 650 }} maxWidth="xl" className="honest-90">
      <Six_by_six
        first_section={<Stack>
          <Stack className='sec2-titel honest-91'>Step 2</Stack>
          <Stack className='sec2_titel_heading honest-92'>We Match You with Vetted Vendors</Stack>
          <Stack className='sec2_titel_sub_data honest-93'>After Step 1, Honest Home Hub does the rest. The more availability and vendors that you have giving quotes, the more likely it is to end up with a better end result whether that be cheaper or the project done with a better strategy.</Stack>
          <Stack className='btn_section honest-94'>



          <div className='btn_section honest-87'>
            {/* <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}> */}
              <button onClick={NavigateLogin} className='carousel_button honest-95'>Get Matched With A Vendor</button>
            {/* </Link> */}
          </div>


          </Stack>
        </Stack>}
        second_section={<img width={'100%'} src={side_image_2} alt='' className='carousel-img honest-96'/>}
      />
    </Container>
    <Container key="slide3" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center" }} maxWidth="xl" className="honest-97">
      <Six_by_six
        first_section={<Stack>
          <Stack className='sec2-titel honest-98' mt={1}>Step 3</Stack>
          <Stack className='sec2_titel_heading honest-99'>The Approved Service Providers Visit Your Home, Then Share a Quote on the Platform.</Stack>
          <Stack className='sec2_titel_sub_data honest-100'>Approved vendors will visit your home at the time you specify, and afterwards, they upload their estimates and technique details directly to the platform. There is no need for direct discussion with the vendors. All relevant information, including the vendor profiles, is transparently shared on the website's dashboard to ensure both transparency and safety.</Stack>
          <Stack className='btn_section honest-101'>


          <div className='btn_section honest-87'>

            {/* <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}> */}
              <button onClick={NavigateLogin} className='carousel_button honest-102'>Find A Vendor</button>
            {/* </Link> */}

          </div>

          </Stack>
        </Stack>}
        second_section={<Stack style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Stack><img width={'100%'} src={img1} alt='' className='img1'/></Stack>
          <Stack><img width={'100%'} src={img2} alt='' className='img1'/></Stack>
          <Stack><img width={'100%'} src={img3} alt='' className='img1'/></Stack>
        </Stack>}
      />
    </Container>
    <Container key="slide4" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center"}} maxWidth="xl" className="honest-103">
      <Six_by_six
        second_section={<img width={'100%'} src={side_image_3} alt=''  className='honest233123132'/>}
        first_section={<Stack>
          <Stack className='sec2-titel honest-104'>Step 4</Stack>
          <Stack className='sec2_titel_heading honest-105'>Consult an Expert for The Best Repair Choice Among Three Quotes</Stack>
          <Stack className='sec2_titel_sub_data honest-106'>Now, you have the opportunity to consult with an expert who will offer their recommendation on which quote to select, based on the price and the approach proposed by the vendor.</Stack>
          <Stack className='btn_section honest-107'>

          <div className='btn_section honest-87'>

            {/* <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}> */}
              <button onClick={NavigateLogin} className='carousel_button honest-108'>Speak With An Expert</button>
            {/* </Link> */}
          </div>


          </Stack>
        </Stack>}
      />
    </Container>
    <Container key="slide5" style={{ padding: 20, height: 650, display:"flex", justifyContent:"center" , alignItems:"center"}} maxWidth="xl" className="honest-109">
      <Six_by_six
        first_section={<Stack>
          <Stack className='sec2-titel honest-110' mt={1}>Step 5</Stack>
          <Stack className='sec2_titel_heading honest-111'>Pay Through Honest Home Hub and Coordinate Project Timing via Vendor Chat</Stack>
          <Stack className='sec2_titel_sub_data honest-112'>You will now make payments directly through Honest Home Hub. Additionally, you can communicate with the vendor via the dashboard's chat box to finalize the schedule for completing your project.</Stack>
          <Stack className='btn_section honest-113'>

          <div className='btn_section honest-87'>

            {/* <Link to='https://honesthomehub.com/mainSectiontwo' style={{textDecoration:'none'}}> */}
              <button onClick={NavigateLogin} className='carousel_button honest-114'>Share Your Issue</button>
            {/* </Link> */}
          </div>

          </Stack>
        </Stack>}
        second_section={<img width={'100%'} src={side_image_5} alt=''  className='honest233123132'/>}
      />
    </Container>
  </Carousel>
</Stack>

  )
}

export default LandingFirstSection