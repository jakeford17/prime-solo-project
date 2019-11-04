const forwardProfileReducer = (state = [], action) => {
  switch (action.type) {
    case 'ONE_FORWARD_INFO':
      return action.payload;
    default:
      return state;
  }
};

export default forwardProfileReducer;  