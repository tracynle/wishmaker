import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import white from '@material-ui/core/colors/common';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

//import axios to pull from userlikes aka wishes likes database

const styles = theme => ({
    card: {
        maxWidth: 250,
        margin: "10px",
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    isLoved: {
        color: red[500],
    },
    isNotLoved: {
        color: white
    },
    productCardTitle: {
        padding: "0px"
    },
    favAndPricePadding: {
        padding: "0px"
    }
});

class WishesCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            loved: true,
            id: 0,
        };
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes } = this.props;
    
        return (
          <div>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image={this.props.image}
              title={this.props.title}
            />
            <CardContent className={classes.productCardTitle}>
              <Typography variant="h6">
                {this.props.title}
              </Typography>
            </CardContent>
            <CardActions className={classes.actions && classes.favAndPricePadding} disableActionSpacing>
              <IconButton className={classnames(
                classes.isNotLoved, {
                [classes.isLoved]: this.state.loved
              })}
              onClick={this.handleLovedClick}
              aria-label="Add to your list!" 
              >
                <FavoriteIcon />
              </IconButton>
              <Typography variant='h6'>
                {"$" + parseFloat(this.props.price)}
              </Typography>
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography variant='h6'>Description:</Typography>
                <Typography component="p">
                {this.props.description}
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          </div>
        );
    }
}

export default withStyles(styles)(WishesCard);