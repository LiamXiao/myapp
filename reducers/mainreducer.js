export default ( state = 0, action ) =>{

	switch(action.type) {
		case 'I':
			return state + 1;
		case 'D':
			return state - 1;
		default:
			return state;
	}

}