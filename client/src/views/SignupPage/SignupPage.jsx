import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import SignupPageStyle from "assets/jss/material-kit-react/views/signupPage.jsx";

import image from "assets/img/bg7.jpg";

// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import DatePicker from "components/DatePicker/DatePicker.jsx";

import axios from "axios";

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
  
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      name: "",
      username: "",
      password: "",
      about: "",
      birthday: undefined,
      redirect: false,
      showPassword: false,
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  handleDayClick(day){
      this.setState({birthday: day});
  }

  handleInputChange = event => { 
      const { name, value } = event.target; 
          this.setState({
          [name]: value
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.history.push('/user')
      
    }
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  signupEnterButtonClicked(event) {
    event.preventDefault();
    console.log("User signed up!");

    // New user is created and saved into db once button is clicked
    axios.post("/api/signup", {
        name: document.getElementById("name").value,
        userName: document.getElementById("userName").value,
        password: document.getElementById("password").value,
        about: document.getElementById("about").value,
        birthday: document.getElementById("date").value
      },
      {
        // gets header tokens once user logs
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      }
    )
    .then(response => {
      console.log("Response!!!!!", response);
     // save tokens in localstorage
     // it is saved so it can be reused for other requests once user logs in
     localStorage.setItem("token", response.data.token);
     localStorage.setItem("name", response.data.name);
     localStorage.setItem("userName", response.data.userName);
     localStorage.setItem("birthday", response.data.birthday);
     localStorage.setItem("about", response.data.about);
     localStorage.setItem("image", response.data.image);
          
     // redirect to user's profile page
     this.props.history.push({
      pathname:"/login-page"
     });
    })
    .catch(function (error) {
        console.log(error);
    })
  }

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Wish Maker"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Sign Up</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="First and Last Name"
                        id="name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="User Name"
                        id="userName"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "username",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                              assignment_ind
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="password"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                lock_outline
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <CustomInput
                        labelText="Few words about yourself"
                        id="about"
                        multiline
                        rows="4"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "about",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Icon className={classes.inputIconsColor}>
                                info
                              </Icon>
                            </InputAdornment>
                          )
                        }}
                      />
                      <DatePicker/>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" onClick={this.signupEnterButtonClicked.bind(this)}>
                        Get started
                      </Button>
                    </CardFooter>
                 </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}
SignupPage.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(SignupPageStyle)(SignupPage);
