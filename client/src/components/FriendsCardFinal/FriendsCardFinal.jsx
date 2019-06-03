import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import ProfilePage from '../../views/ProfilePage/ProfilePage.jsx';

//This will hold the styles for this component
const FriendsStyles = () => ({
  card: {
    maxWidth: 225,
    padding: 10
  },
  media: {
    height: 0,
    paddingTop: '100%', // 16:9
    borderRadius: "50%"
  },
  //below this should mimic the styles folder in here. 
  friendCardContainer: {
    margin: "15px"
  },
  friendFlexCenter: {
    display: "flex",
    justifyContent: "center",
    marginTop: "5px"
  }
});

class FriendsCardFinal extends Component {
  /*
  // Empty Array to Have 'componentDidMount' save returned object in Array
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }
  */


  /*
  // May need component did mount to create the axios call
  componentDidMount() {
    //axios call to get all of the friends objects
    //save all of the friends object in 'friendsArray' to setState
    this.setState({
      friends: [response.dataRecievedTracy];
    })
  }
  */
  handleThisFriendsPageAndWishes = (e) => {
    e.preventDefault();
    //input logic to change state of 
    this.setState({
      
    });
    
  }

  render() {

    const { classes } = this.props;
    return (
      <GridItem key={this.props.id.toString()} xs={12} sm={6} md={4} lg={3} id={this.props.myId} className={classes.friendCardContainer} >
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={this.props.image}
          />
          <CardContent>
            <div className={classes.friendFlexCenter}>
              <Typography variant="h6">
                {this.props.name}
              </Typography>
            </div>
            <div className={classes.friendFlexCenter}>
              <Typography component="p">
                {this.props.birthday}
              </Typography>
            </div>
            <div className={classes.friendFlexCenter}>
              <Button variant="outlined" classes={classes.button}>
                Wishes
              </Button>
            </div>
          </CardContent>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(FriendsStyles)(FriendsCardFinal);