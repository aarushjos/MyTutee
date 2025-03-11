import React from 'react'
import { Hero, Universities, Courses, World, Success, FAQ, Footer } from "../Home Components"
import { Card } from '../Home Components/Card'
import courseImage from '../../assets/images/Courses/image.png';
import courseImage1 from '../../assets/images/Courses/image1.png';
import courseImage2 from '../../assets/images/Courses/image2.png';
import why from '../../assets/images/Why/why.png'
import why1 from '../../assets/images/Why/why1.png'
import why2 from '../../assets/images/Why/why2.png'




export const Home = () => {
  return (
    <>
      <Hero temp={true}/>
      <Universities />
      <Courses 
        heading="My Popular courses" 
        subhead="Top courses mentored by expert educators for guaranteed success."
        gradient="linear-gradient(#bad4ef, #c6d9ef)"
        cards={[
          <Card key={1} imgsrc={courseImage} Heading="GRE: Graduate Record Examination" description="Master the GRE with in-depth lessons, test-taking techniques, and adaptive learning." />,
          <Card key={2} imgsrc={courseImage1} Heading="GMAT: Graduate Management Admission Test" description="Boost your GMAT score with expert guidance and practice tests." />,
          <Card key={3} imgsrc={courseImage2} Heading="SAT: Scholastic Assessment Test" description="Ace the SAT with detailed study materials and strategic learning." />
        ]}
      />
      <Courses 
        heading="Why you should choose MyTutee ?" 
        subhead="Reach Your Goals with Guidance from Expert Instructors and Premium Resources"
        gradient="linear-gradient( #c6d9ef,#bad4ef)"
        color=""
        cards={[
          <Card key={1} imgsrc={why} color="none" alignText="center" headColor="#161E64" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="BRILLIANT INSTRUCTORS" description="Our expert instructors tailor their teaching to your learning style for a personalized, impactful experience." />,
          <Card key={2} imgsrc={why1} color="none" alignText="center" headColor="#161E64" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="ENJOYABLE COURSES" description="Explore interactive courses that make learning enjoyable and help you master new skills at your own pace." />,
          <Card key={3} imgsrc={why2} color="none" alignText="center" headColor="#161E64" subColor="#5F5B5B" imgW="auto" shadow="none" Heading="ONE-ON-ONE LEARNING" description="Delivering customized, one-on-one learning sessions designed to meet your individual needs and aspirations." />
        ]}
      />
      <World/>
      <Success/>
      <FAQ/>
      <Footer/>
    </>
  )
}
