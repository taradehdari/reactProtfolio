import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import pic from '../assets/me.PNG';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={pic}
                                alt="tara"
                                style={{height: '250px'}}
                            /> 
                        </div>
                        <h2 style={{paddingTop:'2em'}}>Tara Dehdari</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>
                            MOOO ADF AEF AWEHF AWEf ak;ef halufh;awio;efa  a;dfk edslfa;dofja vd;fkn aed;sfn vae;iofhaokd snladf;j
                        </p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>1234 invisible st, 23456</p>
                        <h5>Phone</h5>
                        <p>(510)909-8638</p>
                        <h5>Email</h5>
                        <p>tara.dehdari@gmail.com</p>
                        <h5>Web</h5>
                        <p>https://www.linkedin.com/in/tara-dehdari-a82880132/</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2014}
                            endYear={2016}
                            schoolName="Las Positas Community College"
                            schoolDescription="dldsfha;sd"
                        />

                         <Education 
                            startYear={2016}
                            endYear={2018}
                            schoolName="University of California, San Diego"
                            schoolDescription="dldsfha;sd"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Experience</h2>
                        <Experience 
                        startYear={2009}
                        endYear={2012}
                        jobName="first job"
                        jobDescription=";dslfj;asldjf a"
                        />
                        <Experience 
                        startYear={2012}
                        endYear={2016}
                        jobName="second job"
                        jobDescription=";dslfj;asldjf a"
                        />

                        <hr style={{borderTop: '3px solid #e22947'}} />

                        <h2>Skills</h2>
                        



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;