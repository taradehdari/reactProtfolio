import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from '../assets/me.PNG';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src={pic}
                            alt="tara"
                            className="tara-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p> HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODEJS | EXPRESS | MONGODB </p>

                            <div className="social-links">

                                {/* Linkedin tag */}
                                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tara-dehdari-a82880132/" target="_blank"> 
                                    <i className="fa fa-linkedin-square" area-hidden="true" />
                                </a>
                                {/* Github tag */}
                                <a rel="noopener noreferrer" href="https://github.com/taradehdari">
                                    <i className="fa fa-github-square" area-hidden="true" /> 
                                </a>
                                {/* Facebook tag */}
                                <a rel="noopener noreferrer" href="https://www.facebook.com/tara.dehdari">
                                    <i className="fa fa-facebook-square" area-hidden="true" /> 
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;