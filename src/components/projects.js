import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCateories() {
        if(this.state.activeTab === 0) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                    API project #1 
                </CardTitle>
                <CardText>
                    Lyric App used, bla bla bla bla bla. 
                </CardText>
                <CardActions border>
                    <Button colored>GitHub</Button>
                    <Button colored>LiveDemo</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div>
                <h1>This is Express</h1>
            </div>
        )        
    } else if(this.state.activeTab === 2) {
        return(
            <div>
                <h1>This is React</h1>
            </div>
        )
       
    } else if(this.state.activeTab === 3) {
        return(
            <div>
                <h1>This is MongoDB</h1>
            </div>  
        )
        
    }

    }

    
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                    <Tab>APIs</Tab>
                    <Tab>Express</Tab>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                </Tabs>

                <section className="projectgs-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">(this.toggleCateories()}</div>
                        </Cell>
                    </Grid>
                    {this.toggleCateories()}
                </section>
            </div>
        )
    }
}

export default Projects;