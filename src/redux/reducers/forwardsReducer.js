const forwardsReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_FORWARDS':
      return action.payload;
    default:
      return state;
  }
};

export default forwardsReducer;  