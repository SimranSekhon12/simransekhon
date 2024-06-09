import React from 'react'
import { 
  VerticalTimeline,
  VerticalTimelineElement,
 } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' date='Aug 2013 - June 2017'
            iconStyle={{background: "#3e497a", colo: "#fff"}}
              icon={<SchoolIcon />}
          >
            <h1 className='vertical-timeline-element-title'> 
            Punjabi University, Patiala
            </h1>
            <h2 className='vertical-timeline-element-title'> 
            Patiala, Punjab, India
            </h2>
            <h3> Bachelors in Computer Engg </h3>
              <h4>Relevant Coursework:</h4>
                <h4> Operating Systems; 
                    Computer Architecture; 
                    Data Structures & Algorithms; 
                    Object Oriented Programming; 
                    Computer Networks & Security; 
                    Software Project & Management. </h4>
              
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' date='Aug 2018 - Dec 2020'
            iconStyle={{background: "#3e497a", colo: "#fff"}}
              icon={<SchoolIcon />}
          >
            <h1 className='vertical-timeline-element-title'> 
            University of Texas, Arlington
            </h1>
            <h2 className='vertical-timeline-element-title'> 
            Arlington, Texas, USA
            </h2>
            <h3> Masters in Computer Science </h3>
            <h4>Major: Big Data & Software Engg</h4>
            <h4>Relevant Coursework:</h4>
            <h4> Cloud Computing; 
                Data Mining; 
                Advance Software Testing; 
                Artificial Intelligence; 
                Distributed Systems; 
                Web & Database management; 
                Software Engineering Management.</h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' date='June 2019 - Aug 2020'
            iconStyle={{background: "#e9d35b", colo: "#fff"}}
              icon={<WorkIcon />}
          >
            <h1 className='vertical-timeline-element-title'> 
              Global Foundries
            </h1>
            <h2 className='vertical-timeline-element-title'> 
            Austin, Texas, USA
            </h2>
            <h3> Job Title: Intern </h3>
            <h3> Team: Tapeout Engineering </h3>
            <h3> Duties: front-end development using React JS;
                  automtation testing using Katalon Studio, Selenium.</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' date='Feb 2021 - Oct 2021'
            iconStyle={{background: "#e9d35b", colo: "#fff"}}
            icon={<WorkIcon />}
          >
            <h1 className='vertical-timeline-element-title'> 
            Profile Plan
            </h1>
            <h2 className='vertical-timeline-element-title'> 
            Sioux Falls, South Dakota, USA
            </h2> 
            <h3> Job Title: Software Engineer, Full-Stack </h3> 
            <h3> Team: App Development, IT </h3>
            <h3> Duties: front-end development using Angular JS;
                  back-end development using Dotnet;
                  database optimization using SQL server;
                  CI/CD pipeline using Github;
                  hosting application using Azure cloud.</h3>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education' date='Dec 2021 - April 2024'
            iconStyle={{background: "#e9d35b", colo: "#fff"}}
            icon={<WorkIcon />}
          >
            <h1 className='vertical-timeline-element-title'> 
            NXP Semiconductors
            </h1>
            <h2 className='vertical-timeline-element-title'> 
            Austin, Texas, USA
            </h2>
            <h3> Job Title: Data Engineer, DevOps</h3>
            <h3> Team: R&D IT, Cloud Services </h3>
            <h3> Duties: ETL data processing using Splunk/Tableau;
                  server monitoring using Splunk ITSI;
                  managing AWS cloud operations using ServiceNow;
                  automation using Python, CloudFormation, Lambda, Ansible.</h3>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience