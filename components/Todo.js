import React, { Component, PropTypes } from 'react'

const GITHUB_REPO = 'https://github.com/reactjs/redux'

class Todo extends Component {

	constructor(){
		super();
		this.act_doDecre1 = this.act_doDecre1.bind(this);
		this.state = {
			op : 'T'
		}
	}

	// act_doIncre1 = (store) => {
	// 	store.dispatch( { type: 'I' } );
	// }

	// act_doDecre1 = (store) => {
	// 	store.dispatch( { type: 'D' } );
	// }


	componentDidMount() {
		console.log(this.state.op);

	}

	act_doDecre1(){

		this.props.actions.buttonClick();
	}

	render() {
		const { store, value, act_doIncre, act_doDecre} = this.props
		return (
			<div>
				<h1 > { store.getState() } </h1>
				<h2 > {value} </h2>
				<button onClick = {act_doIncre} > + </button>
				<button onClick = {act_doDecre} > - </button>
				<button onClick = { () => store.dispatch({type: 'I'}) } > + </button>
				<button onClick = { () => this.act_doDecre1() } > - </button>
			</div>
		)
	}
}

Todo.propTypes = {
    	value: PropTypes.number.isRequired,
    	act_doIncre: PropTypes.func.isRequired,
    	act_doDecre: PropTypes.func.isRequired
}


export default Todo;