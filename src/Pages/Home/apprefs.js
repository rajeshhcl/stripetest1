import React from 'react';
import ReactDOM from 'react-dom';

// Example of using states, props and refs of components
export class AppRefs extends React.Component
	{
		constructor(props)
		{
			super(props);
			this.state = {data:''}
			this.updateState = this.updateState.bind(this);
			this.clearInput = this.clearInput.bind(this);
		}
		updateState(entered) 
		{
			this.setState({data:entered.target.value});
		}
		clearInput() 
		{
			this.setState({data:''});
			ReactDOM.findDOMNode(this.refs.myInput).focus();
			console.log('Iam CLICKED');
		}
		render() 
		{	
			return(<div> 
					  <input value={this.state.data}
							 onChange={this.updateState} 
							 ref="myInput">
					  </input>
					  <button onClick={this.clearInput}> Clear </button>
					  <button> {this.state.data} </button>
				   </div>); 
		}
	}