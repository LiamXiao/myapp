import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import Todo from './components/Todo'
import todo from './reducers/mainreducer'

// move to mainreducer.js
// const todo = ( state = 0, action ) =>{

// 	switch(action.type) {
// 		case 'I':
// 			return state + 1;
// 		case 'D':
// 			return state - 1;
// 		default:
// 			return state;
// 	}

// }

// move to Todo.js
// export const Todo = ( { value } ) => (
// 	<div>
// 		<h1 > {value} </h1>
// 		<button onClick = {act_doIncre} > + </button>
// 		<button onClick = {act_doDecre} > - </button>
// 	</div>
// );

// move to Todo.js
// const act_doIncre = () => {
// 	store.dispatch( { type: 'I' } );
// }

// move to Todo.js
// const act_doDecre = () => {
// 	store.dispatch( { type: 'D' } );
// }


const store = createStore(todo);


const render = () => {
	ReactDOM.render(
		<Todo 
			store = { store }
			value = {store.getState()}
			act_doIncre = { () => store.dispatch( { type: 'I' } )}
			act_doDecre = { () => store.dispatch( { type: 'D' } )}
			/>,
		document.getElementById('root')
	);
}




render();
store.subscribe(render);



