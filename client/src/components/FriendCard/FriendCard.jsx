import React, { Component } from "react";
import "./styles.css";
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const FriendStyles = theme => ({
    card: {
        maxWidth: 225,
        padding: 10
    },
    media: {
        height: 0,
        paddingTop: '100%', // 16:9
        borderRadius: "50%"
    }
});

class OneFriend extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
}

const friendsTest = [
    {
        friendId: '1',
        image: 'http://www1.pictures.zimbio.com/mp/PILmttI1PZcx.gif',
        name: 'Barry Allen',
        birthday: '07/29/1993',
    },
    {
        friendId: '2',
        image: 'https://media1.tenor.com/images/555b70830acdcc9bc240613f88230707/tenor.gif?itemid=11092218',
        name: 'Oliver Queen',
        birthday: '05/16/1985',
    },
    {
        friendId: '3',
        image: 'https://media1.tenor.com/images/c543e759cbb606a2549779f8e1375e63/tenor.gif?itemid=8803892',
        name: 'Kara Zor-el',
        birthday: '09/22/1975',
    },
    {
        friendId: '4',
        image: 'https://media.giphy.com/media/ITnn2IenMv7SE/giphy.gif',
        name: 'Bruce Wayne',
        birthday: '05/27/1983',
    },
];

class FriendCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FriendId: '', // this will hold the friends unique id
            FriendImageUrl: '', // holds friend image
            FriendName: '', // holds friend name
            FriendBday: '', // holds friend bday
            // we are not rendering an about me so there is no about me state
        };
    };


    handleThisFriendsPageAndWishes = (e) => {
        e.preventDefault();
        //input logic that will take you to friends page
        console.log('This will take you to friends page and you should see their wishes');
    }

    //** TRACY I THINK THIS IS HOW YOU USE COMPONENT DID MOUNT WITH AXIOS **/
    // componentDidMount = () => {
    //     axios.get(/*/route/name/for/all/of/users/friends/, */ {
    //         //I don't think anything needs to come here, I just think the route is important.
    //     })
    //     .then( responese => {
    //     //This is where i referenced product card
    //         //const id = response.data[0].id
    //         //const image = response.data[0].image
    //         //const name = response.data[0].name
    //         //const bday = response.data[0].bday  
    //         /*

    //         //Tracy this is where i think you take these saved variables and then set state
    //         this.setState({
    //             FriendId: id,
    //             FriendImageUrl: image,
    //             FriendName: name,
    //             FriendBday: bday,
    //         })

    //         */
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })
    // }



    //Temporary component did mount
    componentDidMount = () => {

    }

    render() {
        const { classes } = this.props;

        return (
            <div className={/*tracy this is to map the cards and it just needs */}>
                {friendsTest.map(friendsTest => {
                    return (
                        <div id={this.state.FriendId} className="friend-card-container">
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.media}
                                    image={this.state.FriendImageUrl}
                                />
                                <CardContent>
                                    <div className="friend-flex-center">
                                        <Typography variant="h6">
                                            {this.state.FriendName}
                                        </Typography>
                                    </div>
                                    <div className="friend-flex-center">
                                        <Typography component="p">
                                            {this.state.FriendBday}
                                        </Typography>
                                    </div>
                                    <div className="friend-flex-center">
                                        <Link to="/Friends">
                                            <Button variant="outlined" classes={classes.button}>
                                                Wishes
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    );
                })}
            </div>
        )
    }
}

export default withStyles(FriendStyles)(FriendCard);