import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

// import profile from "assets/img/faces/blankavatar.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import InputBase from "@material-ui/core/InputBase";

import SearchBar from "components/SearchBar/SearchBar.jsx";
import Search from "@material-ui/icons/Search";
import ProductCard from "components/ProductCard/ProductCard.jsx"
import FriendsCard from 'components/FriendsCard/FriendsCard.jsx';
import WishesCard from "components/WishesCard/WishesCard.jsx";
import axios from 'axios';

// import Pagination from "components/Pagination/Pagination.jsx";
import Pagination from "material-ui-flat-pagination";

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

// Profile page will show once user logs in

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      renderProducts: true,
      wishCards: [],
      searchTerm: "",
      friends: [],
      nonFriends: [],
      offset: 0
    };
  }

  handleClick(offset) {
    this.setState({ offset });
  }

  
  // commented out because there was an error/ loop when this is used
  componentDidUpdate(prevProps, prevState) {   
    console.log("Tab function", this.props);
    if (this.props.location.searchTerm !== this.state.searchTerm && this.props.location.items) {
      document.querySelectorAll("button[role=tab]")[2].click();
      this.setState({ searchTerm: this.props.location.searchTerm });
    }
  }
  
  // friendCards/ friends list gets rendered
  componentDidMount(){
    this.getFriendsList();
  }
  
  getWishList = (e) => {
    // Make a get request from UserLikes db in the UserId column which gets their liked items
    // will be called in wishListClick
    axios.get('api/userLikes', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => {
        console.log("User likes: ", response);
        // using setState, we save the response in the state: wishCards state
        this.setState({
          wishCards: response.data
        })
      })
      .catch(function (error) {
        console.log(error);
      })

  };

  getFriendsList = (e) => {  
    // Make a get request to friends db 
    axios.get('api/getUserInfo', {
      params: {
        id: localStorage.getItem("id")
      },
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("Getting friends: ", response);
      // using setState, we save the response in the state: friends state
        this.setState({
          friends: response.data.friends
        })
        localStorage.setItem("friends", response.data.friends.map (friend => {
          return friend.userName;
        })
        .join()
        )
    })
    .catch(function (error) {
        console.log(error);
    })

  };

  getNonFriendsList = (e) => {  
    // Make a get request to friends db 
    axios.get('api/user', {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
    .then(response => {
      console.log("Getting non friends: ", response);
      // using setState, we save the response in the state: friends state
        let nonFriends = [];
        for (const nonFriend of response.data) {
          if (nonFriend.userName !== localStorage.getItem("userName")) {
            nonFriends.push(nonFriend);
          }
        }
        this.setState({
          nonFriends: nonFriends
        })
    })
    .catch(function (error) {
        console.log(error);
    })

  };

  // the tab number state is updated when clicked and when the function is called
  // navpills will now know which tab is being clicked
  onTabClicked(tabNumber) {
    console.log("Tab no. clicked: ", tabNumber);
    // tab no. 0 will get friends list
    if (tabNumber === 0) {
      // get friends from db
      this.getFriendsList();
    }
    else if (tabNumber === 1) {
      // get friends from db
      this.getNonFriendsList();
    }
    else if (tabNumber === 2) {
      // get wishes from db
      this.getWishList();
    }
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
    const items = this.props.location.items ? this.props.location.items : [];

    let mapWishlistCards = this.state.wishCards.map(item => {
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

    let mapProductCards = items.map(item => {
      return (
        <ProductCard
          key={item.listing_id}
          listing_id={item.listing_id}
          title={item.title}
          price={item.price}
          description={item.description}
        />
      )
    });

    let mapFriendsCard = this.state.friends.map(friend => {
      return (
        <FriendsCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          birthday={friend.birthday}
          about={friend.about}
          history={this.props.history}
          checkFriends={false}
          image={friend.image}
        />
      )
    })

    let mapNonFriendsCard = this.state.nonFriends.map(friend => {
      return (
        <FriendsCard
          key={friend.id}
          id={friend.id}
          name={friend.name}
          birthday={friend.birthday}
          about={friend.about}
          history={this.props.history}
          checkFriends={true}
          hideIfAlreadyFriend={true}
          userName={friend.userName}
          image={friend.image}
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
                      <img src={localStorage.getItem("image")} alt="..." className={imageClasses}/>
                    </div>
                    <div className={classes.name}>
                      {/* User name displayed here. Props get passed through from DB*/}
                      <h3 className={classes.title}>{localStorage.getItem("name")}</h3>
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
                <h5>Birthday: {localStorage.getItem("birthday")}</h5>
                <p>
                  {localStorage.getItem("about")}{" "}
                </p>
              </div>


              {/* SEARCH BAR */}
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <div className={classes.container} justify="center">
                    <SearchBar history={this.props.history} />
                  </div>
                </GridItem>
              </GridContainer>

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
                        tabButton: "My Friends",
                        tabIcon: People,
                        tabContent: (
                          <GridContainer justify="center" spacing={3} >
                            {mapFriendsCard}
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Suggested Friends",
                        tabIcon: People,
                        tabContent: (
                          <GridContainer justify="center" spacing={3} >
                            {mapNonFriendsCard}
                          </GridContainer>
                        )
                      },
                      {
                        // WISH LIST SAVED
                        tabButton: "Wish List",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer>
                            {mapWishlistCards}
                          </GridContainer>
                        )
                      },
                      {
                        // SEARCH RESULTS RENDER
                        tabButton: "Products",
                        tabIcon: Search,
                        tabContent: (
                          <GridContainer>
                            {mapProductCards}
                            <Pagination
                              limit={10}
                              offset={this.state.offset}
                              total={100}
                              onClick={(e, offset) => this.handleClick(offset)}
                            />
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
