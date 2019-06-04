import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import ProfilePage from '../../views/ProfilePage/ProfilePage.jsx';
import axios from 'axios';
// import image from "assets/img/faces/blankavatar.jpg";

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

class FriendsCard extends Component {

  handleThisFriendsPageAndWishes = (e) => {
    e.preventDefault();
    //input logic to change state of 
    this.setState({
      
    });
    
  }

  getUserInfo = (e) => {  
    // Make a get request from UserLikes db in the UserId column which gets their liked items
    // will be called in wishListClick
    axios.get('api/getUserInfo', {
      params: {
        id: this.props.id
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("Getting friends: ", response);
      this.props.history.push({
        pathname:"/friends-page",
        user: response.data
      })
    })
    .catch(function (error) {
        console.log(error);
    })
  };
  
  // if you are not friends, friend card will have a add button
  addFriendButton = (e) => {
    // ex: if Peter Parker is not friends with Oliver and Kara, add button will show
    // click will make a post to db adding friend
    // if user1 is not friends with other users, show add button
    // check in friends page and profile page if they are friends 
    axios.post("/api/friends", {
      UserId1: this.props.id
    },
    {
      // gets header tokens once user logs
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }
  )
  .then(response => {
    // force page to refresh to remove add button
    let friends = localStorage.getItem("friends");
    friends = friends + "," + this.props.userName;
    localStorage.setItem("friends", friends);
    this.forceUpdate();
  })
  .catch(function (error) {
      console.log(error);
  })
    
  }

  render() {
    const { classes } = this.props;
    let friendButton;
    if (this.props.checkFriends && this.props.userName != localStorage.getItem("userName")) {
      let index = localStorage.getItem("friends").split(",").indexOf(this.props.userName);
      // Friends
      if (index == -1) {
        friendButton = 
          <Button variant="outlined" classes={classes.button} onClick={this.addFriendButton} >
            Add Friend
          </Button>;
      }
      else if (this.props.hideIfAlreadyFriend) {
        console.log('blawhoiej;foaiwjef');
        return null;
      }

      // console.log(index);
      // console.log(this.props.userName);
      // console.log(localStorage.getItem("friends").split(","));
    }

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
              <Button variant="outlined" classes={classes.button} onClick={this.getUserInfo} >
                Profile
              </Button>
              {friendButton}
            </div>
          </CardContent>
        </Card>
      </GridItem>
    )
  }
}

export default withStyles(FriendsStyles)(FriendsCard);