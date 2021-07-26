import React from 'react';

import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import config from '../../config';
import profilepicture from '../assets/images/profilepicture.jpg';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
          <span className="d-none d-lg-block" height="100%" width="100%">
            <img
              className="img-fluid img-profile mx-auto mb-2"
              src={profilepicture}
              alt=""
              width="100"
              height="100"        
            />

          </span>
            
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          
          <div className="subheading mb-5">
            {config.address} · {config.phone}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            I am a passionated software developer working in levaraging agile frameworks. Iterative approaches to corporate strategy foster collaborative thinking to produce the best overall value proposition in software.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Junior Web Developer</h3>
              <div className="subheading mb-3">Nexer Tech Talent, consultant at Polestar</div>
              <p>
                I am a consultant at Nexer Tech Talent currently working for Polestar as a Web Developer.
                I develop for <a href="http://polestar.com" alt="">Polestar.com</a>, which is all about Polestars branding aswell as displaying News, Job Opportunities, Support forms and the physical showroms for Polestar.
                The programme Nexer Tech Talent includes courses in React, Typescript, Interaction design, Google Analytics, SEO, Scrum aswell as Soft skills such as presentation techniques and group dynamics.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
          
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">University of Gothenburg</h3>
              <div className="subheading mb-3">Bachelor of Informatics</div>
              <div>Information systems - Programming in Java, SQL, Digitalization, Digital innovation, IT Governance, Interaction design, State of the art research in informatics, Enterprise Systems.
Business Intelligence: SAP Business Objects, Tableau Software</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2017 - June 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Folkungaskolan High School</h3>
              <div className="subheading mb-3">Social Science - International/Behavioural Science Programme</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">August 2011 - June 2014</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-html5"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-css3-alt"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node-js"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-ts"></i>
            </li>
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Web development with Responsive Design
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Browser Testing &amp; Debugging
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Cross Functional Teams
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a web developer, I enjoy spending time with my friends and family, cooking, reading and exercising. In the winter, I am an novice skier and an avid gamer.
            During the warmer months here in Gothenburg, I enjoy golfing,
            spending time at the coast, and aaalot of fika.
          </p>
          <p className="mb-0">
            When indoors, I follow a number of sci-fi and fantasy genre
            movies and television shows and I spend a large amount of my free time exploring the latest technology
            advancements in the front-end web development world.
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Awards &amp; Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
             Certified Scrum Master
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              Javascript - LinkedIn Skill Assessment badge
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
             Voted as "Best fadder in Kickoff for Gothenburgs university's IT section"
            </li>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
