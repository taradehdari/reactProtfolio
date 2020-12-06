import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from '../assets/me.PNG';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Tara Dehdari</h2>
                        <img 
                            src={pic}
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>
                            MOOOO UCSD neuroscience, coding UCB certificate, working as lab tech, want to be more useful in lab.
                        </p>
                    </Cell>
                    <Cell col={6}>half page</Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Contact;