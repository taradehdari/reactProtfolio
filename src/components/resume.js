import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pic from "../assets/me.PNG";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={pic} alt="tara" style={{ height: "250px" }} />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Tara Dehdari</h2>
            <h4 style={{ color: "grey" }}>Clinical Lab Technician</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am currently a Lab Technician at Helix, a biotech company. I
              work under the supervision of a CLS and work alongside software
              engineers. I plan to use my coding certificate to expand my skills
              in a lab environment as well as obtain a tech job as well.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>4026 51st Apt. 25, San Diego, Ca, 92105</p>
            <h5>Phone</h5>
            <p>(510)909-8638</p>
            <h5>Email</h5>
            <p>tara.dehdari@gmail.com</p>
            <h5>Web</h5>
            <p>
              <a
                href="https://www.linkedin.com/in/tara-dehdari-a82880132/"
                target="_blank"
                rel="noreferrer"
              >
                Tara's Linkedin
              </a>
            </p>
            <p>
              <a
                href="https://github.com/taradehdari"
                target="_blank"
                rel="noreferrer"
              >
                Tara's GitHub
              </a>
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2014}
              endYear={2016}
              schoolName="Las Positas Community College"
              schoolDescription="I recieved an AA: Math and Science. At my time at Las Positas I cofounded the Puente Club, and was a tutor for any math untill calculus 2, and chemistry."
            />

            <Education
              startYear={2016}
              endYear={2018}
              schoolName="University of California, San Diego"
              schoolDescription="I recieved a BS: Physiology and Neuroscience. At my time at UCSD I was part of the AMSA clubs where I helped set up a health fair for patients who cant afford medical care."
            />
            <Education
              startYear={2020}
              endYear={2020}
              schoolName="University of California, Berkeley Extension"
              schoolDescription="I recieved a Full Stack developer certification. I was able to complete many projects, and successfully learn HTML/CSS, JavaScript, React, MySQL and MongoDB."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Intern Research Assitant"
              jobDescription="I interned for Center for Research on Addiction and Brain Health. I was able to collect data on how the NAD enzyme helps patients with alzheimers or addictions, and I was able to recruit patients for clinical trials."
            />
            <Experience
              startYear={2018}
              endYear={2020}
              jobName="Behavior Therapist"
              jobDescription="I was a licensed RBT at Behavioral Health Works. I used applied behavior analysis to help children with autism."
            />
            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Lab Accessioner"
              jobDescription="I processed COVID samples at LabCorp."
            />
            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Lab Accessioner"
              jobDescription="I processed COVID samples at Helix."
            />
            <Experience
              startYear={2020}
              endYear={"current"}
              jobName="Clinical Lab Tenchincian"
              jobDescription="After one week of working as an accessioner Helix promoted me to a Clinical Lab Tech. Now I do PCR testing on the COVID samples."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Skills</h2>
            <Skills skill="javascript" progress={80} />
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="NodeJS" progress={70} />
            <Skills skill="React" progress={100} />
            <Skills skill="MySQL" progress={80} />
            <Skills skill="MongoDB" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
