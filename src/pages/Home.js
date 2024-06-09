import React from 'react'
import CloudIcon from "@material-ui/icons/CloudQueue"
import OSIcon from "@material-ui/icons/Computer"
import SoftIcon from "@material-ui/icons/Person"
import FrontBackIcon from "@material-ui/icons/Code"
import ToolsIcon from "@material-ui/icons/Work"
import VersionIcon from "@material-ui/icons/GitHub"
import DBIcon from "@material-ui/icons/Storage"
import CertIcon from "@material-ui/icons/Book"

import ProPic from '../assets/profilePicture.jpeg'
import AboutPic from '../assets/aboutUs.png'
import "../styles/Home.css"
function Home() {
  return (
    <div className='home'>
      <div className='about'>

        <img src={AboutPic} />
          
          <div className='flexCol'>
            <img src={ProPic} />
            <p><i> SIMRAN SINGH SEKHON </i><br />
            Mississauga, ON, Canada <br />
            ex - NXP Semiconductors <br />
            Masters in Computer Science <br />
            University of Texas at Arlington <br />
            Data Science | Full-Stack | DevOps <br />
            
            </p>
          
          </div>
            
      </div>

      <div className='aboutMe'>
              
              <h1><u> About Me </u></h1>

              <h3>"We're here to put a dent in the Universe!!!" - Steve Jobs</h3>
              
              <p>My goal is to become a successful Software Engineer by leveraging strong programming and critical thinking skills to develop and implement innovative software solutions. 
                I earned a Masters degree in Computer Scienece from University of Texas at Arlington and applied my learnings in various industries, 
                ranging from healthcare to semiconductors, by working on multi-million-dollar projects in the past 3 years.
                With a strong foundation in cloud, automation, data analytics and web stack, my curiosity and passion for continuous learning helps me stay up-to-date with the latest technologies. 
                I value the importance of team-work and love to collaborate with large cross-functional teams with proven ability to work effectively in Agile & Scrum methodologies.
                </p>
              
        </div>

      
      
        <div className='skills'>
          <h1><u> Skills </u></h1>
          
              <h4> <FrontBackIcon/> <u>Front-End</u>: HTML/XML, CSS, JavaScript, TypeScript, Angular, React</h4>

              <h4> <FrontBackIcon/> <u>Back-End</u>: PHP, Java, Python, C#, ASP.net, Node</h4> 
            
              <h4> <CloudIcon/> <u>Cloud Technologies</u>: Amazon Web Services, MS Azure </h4>

              <h4> <VersionIcon/> <u>Version Control</u>: Gitlab, Github, Bitbucket, CI/CD </h4>

              <h4> <OSIcon /> <u>Operating System</u>: Windows (Powershell), Redhat Linux (Bash) </h4>

              <h4> <DBIcon/> <u>Database Technologies</u>: SQL, NoSQL, MySQL, MS SQL Server, Redis, PostgreSQL </h4>
            
              <h4> <ToolsIcon /> <u>Tools</u>: Splunk (SPL), Tableau, ServiceNow, Ansible, Postman, Swagger API, JSON, YAML, Jira, Confluence, Visual studio code, Jupyter Notebook, Eclipse </h4>

              <h4> <SoftIcon/> <u>Soft Skills</u>: Adaptive Learning, Problem Solving, Critical Thinking, Team Player, Communication, Deliver Results. </h4>

           <h1><u> Certifications </u></h1>
              
              <h4> <CertIcon/> AWS Certified Cloud Practioner </h4>
              <h4> <CertIcon/> AWS Certified SysOps Administrator </h4>
              <h4> <CertIcon/> Splunk Certified Core Power User </h4>
              

        </div>

        <div className='hobbies'>
              
              <h1><u> Recreation </u></h1>
              <h2>"Volunteering"</h2>
              <ul>
              <li> Organized a tree plantation awareness drive to preserve local greenery under "Ludhiana Cares Ladies Society”. </li>
              <li> Organized blood donation camps as a member of Rotaract Club of Punjabi University and actively donated blood. </li>
              <li> Organized LAN-gaming Tournaments and event advertisements at Punjabi University's annual technical fest. </li>
              </ul>

              <h2> "Hobbies" </h2>
              <p>Outside of work, I enjoy spending my time watching sports, particulary soccer & formula 1. 
                I also take a keen interest in the stock market and closely follow the market trends. 
                When it comes to fitness, I love working out at the gym and playing soccer. </p>
        </div>

    </div>
  )
}

export default Home