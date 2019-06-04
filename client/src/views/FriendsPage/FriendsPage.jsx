import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// import SearchIcon from "@material-ui/icons/Search";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/blankavatar.jpg";

// import studio1 from "assets/img/examples/studio-1.jpg";
// import studio2 from "assets/img/examples/studio-2.jpg";
// import studio3 from "assets/img/examples/studio-3.jpg";
// import studio4 from "assets/img/examples/studio-4.jpg";
// import studio5 from "assets/img/examples/studio-5.jpg";
// import work1 from "assets/img/examples/olu-eletu.jpg";
// import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
// import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import InputBase from "@material-ui/core/InputBase";

// import SearchBar from "components/SearchBar/SearchBar.jsx";
// import Search from "@material-ui/icons/Search";
// import ProductCard from "components/ProductCard/ProductCard.jsx"
import FriendsCard from 'components/FriendsCard/FriendsCard.jsx';
import WishesCard from "components/WishesCard/WishesCard.jsx";
// import axios from 'axios';


// Test Array with all friends **CREATE LOGIC THAT PULLS ACTUALL FRIEND DATA AND SAVES IT IN AN ARRAY LIKE THIS**
// let AllFriends = [
//   {
//     friendId: '1',
//     image: 'http://static.next-episode.net/tv-shows-images/huge/the-flash.jpg',
//     name: 'Barry Allen',
//     birthday: '07/29/1993',
//   },
//   {
//     friendId: '2',
//     image: 'https://andrewpinkham.files.wordpress.com/2015/02/arrow-arrow-cw-35030076-1920-1200.jpg',
//     name: 'Oliver Queen',
//     birthday: '05/16/1985',
//   },
//   {
//     friendId: '3',
//     image: 'https://art-s.nflximg.net/6f16c/9ad779b7e89aaa1fdc7c7f7c59ba684d04a6f16c.jpg',
//     name: 'Kara Zor-el',
//     birthday: '09/22/1975',
//   },
//   {
//     friendId: '4',
//     image: 'http://www.hdwallpapers.in/download/batman_in_the_dark_knight_rises-1366x768.jpg',
//     name: 'Bruce Wayne',
//     birthday: '05/27/1983',
//   },
// ];

/*
To reroute to friends profile page
- events:
  - when profile button is clicked, reroute to friend's page (like how searchbar reroutes to profilepage)
  - axios call to friend's page and states/data will be updated
    - On clicking the friend card you redirect friend info to profile page
    - You aren't touching the token in local storage
    - pass friend info to friend profile page by redirecting it
    - Then in profile page u access friend info by (examples) this.props.location.friend.name and ...friend.about
  */



// Profile page will show once user logs in

class ProfilePage extends React.Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      renderProducts: true,
      wishCards: [],
      searchTerm: "",
      user: {}
    };
  }

  // the tab number state is updated when clicked and when the function is called
  // navpills will now know which tab is being clicked
  onTabClicked(tabNumber) {
    console.log("Tab no. clicked: ", tabNumber);
    // tab no. 0 will get friends list

  }

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    // const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    // To check if the items are available, if not set it to an empty array
    // location is provided by router dom which means the variable items is checking 
    // for the redirected route and the items passed with the redirect 
    // otherwise it will be put in an empty array

    let mapWishlistCards = this.props.location.user.wishes.map(item => {
      return (
        <WishesCard
          key={item.id}
          title={item.title}
          image={item.imageUrl}
          price={item.price}
          description={item.description}
        />
      )
    })

    let mapFriendsCard = this.props.location.user.friends.map(friend => {
      return (
        <FriendsCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          birthday={friend.birthday}
          about={friend.about}
          history={this.props.history}
          userName={friend.userName}
          checkFriends={true}
        />
      )
    })

    return (
      <div>
        <Header
          color="transparent"
          brand="Wish Maker"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={profile} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      {/* User name displayed here. Props get passed through from DB*/}
                      <h3 className={classes.title}>{this.props.location.user.name}</h3>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-twitter"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-instagram"} />
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              {/* User birthday and about description displayed here. Props get passed through from DB */}
              <div className={classes.description}>
                <h5>About Me</h5>
                <h5>Birthday: {this.props.location.user.birthday}</h5>
                <p>
                  {this.props.location.user.about}{" "}
                </p>
              </div>


              {/* TABS SECTION */}
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                  <NavPills
                    // providing a callback in Navpills to inform which tab was clicked. 
                    // check component/Navpills.jsx, the function is called there 
                    tabChangeCallback={this.onTabClicked.bind(this)}
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Friends",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center" spacing={3}>
                            {mapFriendsCard}
                          </GridContainer>
                        )
                      },
                      {
                        // WISH LIST SAVED
                        tabButton: "Wish list",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer>
                            {mapWishlistCards}
                          </GridContainer>
                        )
                      }
              

                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
