import React from 'react';
import ReactDOM from 'react-dom';

//var bodyParser = require('body-parser');

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import AddCart from 'material-ui/svg-icons/action/add-shopping-cart';
import {deepOrange900, cyan700, grey300,grey50,
        grey600,blue500, pink500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
const styles = {
  root: {
    //margin: 20,
    display: 'flex',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
  },
  gridList: {
    width: 800,
    height: 550,
    //padding: 20,
    overflowY: 'auto',
  },
  subhead: {
    color: grey50,
    backgroundColor: cyan700,
    fontSize: 20,
    fontWeight: 'bold',
    height: 50,
    textAlign:'center',
  },
};

const tilesData = [
  {
    id: 1,
	img: 'images/grid-list/blueshirt1.jpg',
    title: 'Blue Formal Shirt',
    author: 'GBP 9.99',
  },
  {
	id: 2,
    img: 'images/grid-list/jacket1.jpg',
    title: 'Winter Jacket',
    author: 'GBP 39.99',
  },
  {
    id: 3,
	img: 'images/grid-list/cycle1.jpg',
    title: 'Mountain Bike',
    author: 'GBP 69.99',
  },
  {
    id: 4,
	img: 'images/grid-list/helmet1.jpg',
    title: 'Bike Helmet',
    author: 'GBP 19.99',
  },
  
];
const muiTheme = getMuiTheme({
    flatButton : {
          primaryTextColor: grey600,
          fontWeight: 'bold',
          fontSize: '12px',
          textTransform: 'capitalize',
        },
    button : {
        borderRadius: '70px',
        padding: '3px 3px',
        width: '50%',
        height: 25,
        lineHeight: '25px',
        },
  });
//<IconButton><AddCart color="white" />Buy Now</IconButton>
/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
 
export class GridListExampleSimple extends React.Component
	{
		constructor(props)
		{
			super(props);
			this.state = {data:''}
			this.updateState = this.updateState.bind(this);
			this.clearInput = this.clearInput.bind(this);
			this.displayTitle = this.displayTitle.bind(this);
		}
		updateState(entered) 
		{
			this.setState({data:entered.target.value});
		}
		clearInput() 
		{
			this.setState({data:''});
		//	ReactDOM.findDOMNode(this.refs.myInput).focus();
			console.log('Iam CLICKED');
		}
		displayTitle(title) 
		{
			
		//	ReactDOM.findDOMNode(this.refs.myInput).focus();
			console.log('Buy Button clicked', title);
		}
		/*
		onToken = (token) => {
					console.log('token value before posting is',token);
					
			//fetch('/save-stripe-token', {
			fetch('/Contact', {
			  method: 'GET',
			 // body: JSON.stringify(token),
			}).then(response => {console.log('successfully returned control');
									alert('We are in business');
								}	
				   );
			//.then(response => {
			//  response.json().then(data => {
		//		alert(`We are in business, ${data.email}`);
			//  });
			//});
		}
		*/
		
		onToken = (token) => {
					console.log('token value before posting is',token);
					console.log('JSON Stringify value = ',JSON.stringify(token));
			
			fetch('http://localhost:5000/testbody', {
			  method: 'POST',
			  body: JSON.stringify(token),			  
			  headers: {
				  'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
			  mode: 'no-cors'
			}).then(response => {console.log('successfully returned control');
									alert('We are in business');
								}	
				   );			
				   
		}
		
		render() 
		{	
			return(<div style={styles.root}>
	<div> 
		<RaisedButton
                          backgroundColor="#a4c639"
						  onClick={this.clearInput}
                          label="Test Click Me" />
		<StripeCheckout
        token={this.onToken}
        stripeKey="pk_test_XNB5Gkou7mwEa8K9c9c2XFYL"
      />
						  
						  
	</div>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols = {3}
    >
      <Subheader style={styles.subhead}>Items on Sale</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          padding={1}
          subtitle={<span> <b>{tile.author}</b></span>}
          actionIcon={<RaisedButton
                          backgroundColor="#a4c639"
						  onClick={()=> this.displayTitle(tile.title)}							 
                          label="Buy" />}
        >
          <img src={tile.img}  />
        </GridTile>
      ))}
    </GridList>
  </div>); 
		}
	}
/*
const GridListExampleSimple = () => (

  <div style={styles.root}>
	<div> 
		<RaisedButton
                          backgroundColor="#a4c639"
						  onclick={() => {
												   console.log('Buy button clicked');
												 }	
									 }
                          label="Test Click Me" />
	</div>
    <GridList
      cellHeight={180}
      style={styles.gridList}
      cols = {3}
    >
      <Subheader style={styles.subhead}>Items on Sale</Subheader>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          padding={1}
          subtitle={<span> <b>{tile.author}</b></span>}
          actionIcon={<RaisedButton
                          backgroundColor="#a4c639"
						  onTouchTap={(event) => {
												   console.log('Buy button clicked');
												 }	
									 }
                          label="Buy" />}
        >
          <img src={tile.img}  />
        </GridTile>
      ))}
    </GridList>
  </div>
);
*/
export default GridListExampleSimple;


