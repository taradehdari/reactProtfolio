import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2>Meet Me! Tara Dehdari!</h2>
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <p>
              I am currently pursuing a full stack web developer job. I have a
              Bachelors of Science in Physiology and Neuroscience from UCSD, an
              AA: of math and Science form Las Positas Community College, and I
              have a full stack web developer certification from University of
              California, Berkeley. I currently work at a BioTech company called
              helix as a Lab Technician. I perform PCR testing on COVID samples.
              In the future I would love to carry on a web developer role as
              well as being in the science field. I believe this certification
              is the start of combining my two interests together.{" "}
            </p>
            <p>
              Aside from my career, here are some fun facts about me. I was born
              and raised in Castro Valley, CA (in the East Bay Area). I moved to
              San Diego in 2016 to obtain my bachelors, and have stayed ever
              since!I have always shown an interst in the sciences and computers
              from a young age. I love to spend time with my cat and my dog. I
              play soccer weekly on a coed team, and during my freetime I love
              to paint and read. I also love cooking for my friends! Recently,
              with my new found skill, I plan on practicing new projects to
              become a bettr developer.
            </p>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default About;
