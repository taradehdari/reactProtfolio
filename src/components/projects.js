import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* this is project one */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://wi-images.condecdn.net/image/doEYpG6Xd87/crop/2040/f/weather.jpg) center / cover",
              }}
            >
              Project #1: Weather App
            </CardTitle>
            <CardText>
              Created a weather app, using Open Weather Map API.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/taradehdari/weatherApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://taradehdari.github.io/weatherApp/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project two */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.searchenginejournal.com/wp-content/uploads/2019/06/shutterstock_281140775-1520x800.png) center / cover",
              }}
            >
              Project #2: Lyric Jam
            </CardTitle>
            <CardText>
              Created a Lyric App that shows you lyrics to any song for mobile
              phones.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                {" "}
                <a
                  href="https://github.com/specilaist/Lyric-Jam"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                {" "}
                <a
                  href="https://specilaist.github.io/lyric-jam/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project three */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover",
              }}
            >
              API project #3
            </CardTitle>
            <CardText>Future Project</CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
      // } else if (this.state.activeTab === 1) {
      //   return (
      //     <div className="projects-grid">
      //       {/* this is project one */}
      //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
      //         <CardTitle
      //           style={{
      //             color: "#fff",
      //             height: "176px",
      //             background:
      //               "url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover",
      //           }}
      //         >
      //           API project #1
      //         </CardTitle>
      //         <CardText>Lyric App used, bla bla bla bla bla.</CardText>
      //         <CardActions border style={{ textAlign: "center" }}>
      //           <Button colored>GitHub</Button>
      //           <Button colored>Live Demo</Button>
      //         </CardActions>
      //         <CardMenu style={{ color: "#fff" }}>
      //           <IconButton name="share" />
      //         </CardMenu>
      //       </Card>
      //       {/* this is project two */}
      //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
      //         <CardTitle
      //           style={{
      //             color: "#fff",
      //             height: "176px",
      //             background:
      //               "url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover",
      //           }}
      //         >
      //           API project #2
      //         </CardTitle>
      //         <CardText>Weather APP used, bla bla bla bla bla.</CardText>
      //         <CardActions border style={{ textAlign: "center" }}>
      //           <Button colored>GitHub</Button>
      //           <Button colored>Live Demo</Button>
      //         </CardActions>
      //         <CardMenu style={{ color: "#fff" }}>
      //           <IconButton name="share" />
      //         </CardMenu>
      //       </Card>
      //       {/* this is project three */}
      //       <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
      //         <CardTitle
      //           style={{
      //             color: "#fff",
      //             height: "176px",
      //             background:
      //               "url(https://media.sproutsocial.com/uploads/2015/04/What-is-an-API.png) center / cover",
      //           }}
      //         >
      //           API project #3
      //         </CardTitle>
      //         <CardText>bla bla bla bla</CardText>
      //         <CardActions border style={{ textAlign: "center" }}>
      //           <Button colored>GitHub</Button>
      //           <Button colored>Live Demo</Button>
      //         </CardActions>
      //         <CardMenu style={{ color: "#fff" }}>
      //           <IconButton name="share" />
      //         </CardMenu>
      //       </Card>
      //     </div>
      //   );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* this is project one */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/736x/7c/b1/86/7cb18679659f791b1191bea97b74dfc0.jpg) center / cover",
              }}
            >
              Project #1: Recipe App
            </CardTitle>
            <CardText>
              Recipe App used where you can store your favorite Recipes, and
              view any recipe based off of your cravings. Used MySQL for
              database, and react for styling.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/setaremehr/recipe"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://foody-recipes-easy.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project two */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://img.freepik.com/free-vector/black-dark-3d-low-poly-geometric-background_79145-393.jpg?size=626&ext=jpg) center / cover",
              }}
            >
              Project #2: User Directory
            </CardTitle>
            <CardText>
              An Employee Directory with all the workers contact information.
              This way managers can easily find their workers information.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/taradehdari/employeeDirectory"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>
                <a
                  href="https://employee-directory1020.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project three */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://bs-uploads.toptal.io/blackfish-uploads/blog/post/seo/og_image_file/og_image/16097/react-context-api-4929b3703a1a7082d99b53eb1bbfc31f.png) center / cover",
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>Future Project</CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* this is project one */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://i.pinimg.com/736x/43/a4/34/43a43483ca75c89730dd75fa0380d1f4.jpg) center / cover",
              }}
            >
              Project #1: ToDo App
            </CardTitle>
            <CardText>
              A ToDo Application. You can Sign in and have access to your own
              todo list. You can delete, update, and add tasks. Open Weather Map
              API was also used to show the weather of the locatin of your
              choosing.
            </CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>
                <a
                  href="https://github.com/sfcarz/ZTC_TodoApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </Button>
              <Button colored>Live Demo(coming soon)</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project two */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.itprotoday.com/sites/itprotoday.com/files/mongodb-cover.jpg) center / cover",
              }}
            >
              MongoDB project #2
            </CardTitle>
            <CardText>Future Project</CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* this is project three */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.itprotoday.com/sites/itprotoday.com/files/mongodb-cover.jpg) center / cover",
              }}
            >
              MongoDB project #3
            </CardTitle>
            <CardText>Future Project</CardText>
            <CardActions border style={{ textAlign: "center" }}>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>APIs</Tab>
          {/* <Tab>Express</Tab> */}
          <Tab>React</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
