import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://pbs.twimg.com/profile_images/1239703271486287872/dVtw-a4M_400x400.jpg"
                            alt="tara"
                            className="tara-img"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p> HTML/CSS | BOOTSTRAP | JAVASCRIPT | REACT | NODEJS | EXPRESS | MONGODB </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;