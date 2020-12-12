import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class About extends Component {
    render() {
        return(
            <div className="about-body">
            <Grid className="about-grid">
                <Cell col={6}>
                    <h2>beginning of about page</h2>
                </Cell>
            </Grid>    
            </div>
            
        )
    }
}

export default About;