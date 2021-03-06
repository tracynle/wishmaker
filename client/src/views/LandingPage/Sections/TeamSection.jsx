import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import team1 from "assets/img/faces/tracy.png";
import team2 from "assets/img/faces/matt.png";
import team3 from "assets/img/faces/irvin.png";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Created by:</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team1} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Tracy Le
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
              
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a
                      href="https://www.github.com/tracynle"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={classes.socials + " fab fa-github"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a
                      href="https://www.linkedin.com/in/tracyngocle/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <i className={classes.socials + " fab fa-linkedin"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team2} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Matthew Caro
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a
                      href="https://www.github.com/notmattcaro"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={classes.socials + " fab fa-github"} />
                    </a>
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a
                      href="https://www.linkedin.com/in/matthew-caro-619sd/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                    <i className={classes.socials + " fab fa-linkedin"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={team3} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  Irvin Gutierrez
                  <br />
                </h4>
                <CardBody>
                  <p className={classes.description}>
                   
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <a
                      href="https://www.github.com/IrvinGutierrez6117"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={classes.socials + " fab fa-github"} />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
