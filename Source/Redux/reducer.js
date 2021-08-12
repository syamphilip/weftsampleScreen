
const initialState = {
    isLoggedIn: false,
    value: 0,
    userName:'weft2020',
    password:"123456",
  };
  
  function buttonPress(state = initialState, action) {
    if (action.type === 'increment') {
      return {...state, value: state.value + 1};
    } else if (action.type === 'decrement') {
      return {...state, value: state.value - 1};
    } else if (action.type === 'toggleLogin') {
      return {...state, isLoggedIn: !state.isLoggedIn};
    } else 
    return {...state};
  }

  export default buttonPress