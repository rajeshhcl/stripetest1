import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import PaperDashboard from './paperDashboard';
import PaperWhatHap from './paperwhathap';
import {grey50, blueGrey100, grey300, blue500, pink500} from 'material-ui/styles/colors';

const styles = {
  div:{
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: blueGrey100
  },
  NewTweet : {
    //display: 'inline-flex',
    width : '100%',
    height: '40px',
    padding: '3px 3px',
    color: blue500,
  },
}
const muiTheme = getMuiTheme({
    flatButton : {
          fontSize: '12px',
          textTransform: 'capitalize',
          color: grey50,
   },
  });
const CardExampleWithAvatar = () => (
  <div style = {styles.div}>
      <div id = 'sideElements' style={{marginLeft: '60px', marginTop: '20px'}} >
          <div id = 'dashboard' style = {{height: '300px', width: '300px'}}>
              <PaperDashboard />
          </div>
          <div id = 'trends' style = {{height: '300px', marginTop: '10px', width: '300px'}}>
              <Card >
                <CardHeader
                  title="Trends to Follow"
                  subtitle="Rajesh trends"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img src="images/tweetimg2.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
          </div>
          <div id = 'whoToFollow' style = {{height: '300px', marginTop: '10px', width: '300px'}}>
              <Card>
                <CardHeader
                  title="Who to Follow"
                  subtitle="Rajesh who to follow"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img src="images/tweetimg3.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
          </div>
          <div id = 'termsCondition' style = {{height: '180px', marginTop: '10px', width: '300px'}}>
              <Card>
                <CardHeader
                  title="Twitter terms"
                  subtitle="Terms & Conditions"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img src="images/tweetimg4.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
          </div>
      </div>
      <div id = 'mainElements' style = {{ marginLeft: '20px', width: '60%',
                                          marginRight: '60px', marginTop: '20px'}}>
          <div>
              <PaperWhatHap />
          </div>
          <div>
          <MuiThemeProvider muiTheme={muiTheme}>
          <FlatButton
              href='#'
              primary={true}
              style ={styles.NewTweet}
              label="See More Tweets" />
          </MuiThemeProvider>
          </div>
          <div id = 'tweet1' style = {{height: '450px'}}>
              <Card>
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 111111"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia style = {{height: '100%', width: '80%', marginLeft: 70}}>
                  <img src="images/tweetimg1.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet2' style = {{height: '450px', marginTop: '10px'}}>
              <Card>
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 222222"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg2.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet3' style = {{height: '450px', marginTop: '10px'}}>
              <Card >
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 333333"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg3.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet4' style = {{height: '450px', marginTop: '10px'}}>
              <Card >
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 4444444"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg4.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet5' style = {{height: '450px', marginTop: '10px'}}>
              <Card >
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 555555"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg5.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet6' style = {{height: '450px', marginTop: '10px'}}>
              <Card >
                <CardHeader
                  title="lalitha perumal"
                  subtitle="lalitha perumal 666666"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg6.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet7' style = {{height: '450px', marginTop: '10px'}}>
              <Card >
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 777777"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg7.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
          <div id = 'tweet8'style = {{marginTop: '10px' , marginBottom: '30px'}}>
              <Card >
                <CardHeader
                  title="lalitha Perumal"
                  subtitle="lalitha perumal 888888"
                  avatar="images/mypic1.jpg"
                />
                <CardMedia>
                  <img style = {{height: '300px'}} src="images/tweetimg8.jpg" alt="" />
                </CardMedia>
                <CardActions>
                  <FlatButton label="Action3" />
                  <FlatButton label="Action4" />
                </CardActions>
              </Card>
          </div>
      </div>
  </div>
);

export default CardExampleWithAvatar;
