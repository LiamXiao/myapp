import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'


const todo = ( state = 0, action ) =>{

	switch(action.type) {
		case 'I':
			return state + 1;
		case 'D':
			return state - 1;
		default:
			return state;
	}

}

const Todo = ( { value } ) => (
	<div>
		<h1 > {value} </h1>
		<button onClick = {act_doIncre} > + </button>
		<button onClick = {act_doDecre} > - </button>
	</div>
);

const act_doIncre = () => {
	store.dispatch( { type: 'I' } );
}

const act_doDecre = () => {
	store.dispatch( { type: 'D' } );
}


const store = createStore(todo);



const render = () => {
	ReactDOM.render(
		<Todo 
			value = {store.getState()}
			/>,
		document.getElementById('root')
	);
}




render();
store.subscribe(render);



