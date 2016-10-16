import React from 'react'
import ReactDOM from 'react-dom'


const todoReducer = (state = 0, action) => {
	switch(action.type){
		case 'I':
			return state + 1;
		case 'D':
			return state - 1;
		default:
			return state;
	}
}

const { createStore } = redux;
const store = createStore(todoReducer);

const render = () => 
	render(
		<h1>Hello, world!</h1>,
		document.getElementById('root')
	)

render();


