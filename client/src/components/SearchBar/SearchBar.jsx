import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import axios from "axios";
import { fade } from '@material-ui/core/styles/colorManipulator';

import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
  
class SearchBar extends React.Component {
    static propTypes = {
        classes: PropTypes.object.isRequired,
    }

   // Will show what user is typing in console
    doSomethingWithSearchTerms(event) {
      // condition for enter key
      if(event.keyCode === 13) {
        console.log(event.target.value);
        console.log("Enter was pressed!!");
        // Call the API to do the search to the server
        axios.get('/api/search/', {
          params: {
            item: event.target.value
          }
        })
        .then(response => {
          // Redirect to results page to render etsy's results
          // Will be pushed into the browser's history in User page
          // the state contains the response and it is grabing the data that we need
          console.log(this.props);
          // you are pushing the data into a new history
          this.props.history.push({
            pathname:"/profile-page",
              // pass the state to the redirected page which is the user page
            items: response.data.results
           });
        })
        .catch(function (error) {
          console.log(error);
        });
        
      }
    }
    
    // search bar component
    render() {
      const { classes } = this.props;
      return (
        <div>
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase 
            placeholder="Search…"
            classes={{
              root: this.props.classes.inputRoot,
              input: this.props.classes.inputInput,
            }}
            onKeyUp = { e => {this.doSomethingWithSearchTerms(e)} }
            />
          </div>
        </div>
      )
    }
  


}

export default withStyles(styles)(SearchBar);
