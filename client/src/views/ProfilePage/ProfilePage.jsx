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

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
// import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
// import work5 from "assets/img/examples/clem-onojegaw.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
// import InputBase from "@material-ui/core/InputBase";

import SearchBar from "components/SearchBar/SearchBar.jsx";
import Search from "@material-ui/icons/Search";
import ProductCard from "components/ProductCard/ProductCard.jsx"
// import axios from 'axios';

// Profile page will show once user logs in

class ProfilePage extends React.Component {
  componentDidUpdate(prevProps) {
    console.log("zzzzzz", this.props);
    if(this.props.location.items){
      document.querySelectorAll("button[role=tab]")[2].click();
    }
    
  }

  //**TRACY --- added another button that allows you to search products and render them */
  searchProductsClick = (e) => {
    e.preventDefault();
    if (this.state.renderProducts === false) {
      this.setState({
        renderProducts: true
      });
      console.log('this should be false: ' + this.state.renderProducts)
    }
  };

  friendsClick = (e) => {
    e.preventDefault();
    function UserBannerFriendsClick() {
      //Input logic that will route to the users list of friends
      return console.log("Going to my list of Friends");
    }
    return UserBannerFriendsClick();
  };


  savedWishesClick = (e) => {
    e.preventDefault();
    function UserBannerSavedWishesClick() {
      //Input logic that will route to all of the items you saved for your friends
      return console.log("Going to all the Wishes that you saved for your friends");
    }
    return UserBannerSavedWishesClick();
  };

  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

    // To check if the items are available, if not set it to an empty array
    const items = this.props.location.items ? this.props.location.items : [];
    
    
    
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
                      <div>
                      <h3 className={classes.title}>Christian Louboutin</h3>
                      </div>
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
              <div className={classes.description}>
                <h5>Birthday: 5/27/89 {this.props.birthday}</h5>
                <p>
                  I love surfing the waves of San Diego, and I enjoying an
                  amazing fish taco. I'm a huge hat collector; friends always
                  gift me cool and nifty designs. T-shirts are always a great
                  go-to as a gift.{" "}
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
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Friends",
                        tabIcon: Camera,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio2}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                              <img
                                alt="..."
                                src={studio5}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio4}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        // WISH LIST SAVED
                        tabButton: "Wish list",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        // SEARCH RESULTS RENDER
                        tabButton: "Search",
                        tabIcon: Search,
                        tabContent: (
                          <GridContainer>
                            {items.map(item => { 
                              return (
                                <ProductCard
                                  key={item.listing_id}
                                  listing_id={item.listing_id}
                                  title={item.title}
                                  tags={item.tags}
                                  price={item.price}
                                  description={item.description}
                                />
                              )
                            })}
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
