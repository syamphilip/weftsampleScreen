const toggleLogin = () => {
  return (dispatch,getState) => {
    dispatch({type: "toggleLogin"});
  };
};
export default toggleLogin;
