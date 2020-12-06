import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    
    toggleCategories() {

        if(this.state.activeTab === 0) {
        return(
            <div className="projects-grid">
                {/* this is project one */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg) center / cover'}}> 
                        Project #1: Weather App 
                    </CardTitle>
                    <CardText>
                        Created a weather app.   
                    </CardText>
                    <CardActions border  style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project two */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/shutterstock_281140775-1520x800.png) center / cover'}}> 
                        Project #2: Lyric App 
                    </CardTitle>
                    <CardText>
                        Created a Lyric App that shows you lyrics to any song for mobile phones. 
                    </CardText>
                    <CardActions border  style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project three */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #3 
                    </CardTitle>
                    <CardText>
                        bla bla bla bla 
                    </CardText>
                    <CardActions border  style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
            
        )
    } else if(this.state.activeTab === 1) {
        return(
            <div className="projects-grid">
                {/* this is project one */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #1 
                    </CardTitle>
                    <CardText>
                        Lyric App used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project two */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #2 
                    </CardTitle>
                    <CardText>
                        Weather APP used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project three */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #3 
                    </CardTitle>
                    <CardText>
                        bla bla bla bla 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )        
    } else if(this.state.activeTab === 2) {
        return(
            <div className="projects-grid">
                {/* this is project one */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #1 
                    </CardTitle>
                    <CardText>
                        Lyric App used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project two */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #2 
                    </CardTitle>
                    <CardText>
                        Weather APP used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project three */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #3 
                    </CardTitle>
                    <CardText>
                        bla bla bla bla 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
       
    } else if(this.state.activeTab === 3) {
        return(
            <div className="projects-grid">
                {/* this is project one */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #1 
                    </CardTitle>
                    <CardText>
                        Lyric App used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project two */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #2 
                    </CardTitle>
                    <CardText>
                        Weather APP used, bla bla bla bla bla. 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored>Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                {/* this is project three */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height:'176px', background: 'url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover'}}> 
                        API project #3 
                    </CardTitle>
                    <CardText>
                        bla bla bla bla 
                    </CardText>
                    <CardActions border style={{textAlign: 'center'}}>
                        <Button colored>GitHub</Button>
                        <Button colored >Live Demo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
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

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;