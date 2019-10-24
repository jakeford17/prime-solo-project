const goalieProfileReducer = (state = [], action) => {
    switch (action.type) {
      case 'ONE_GOALIE_INFO':
        return action.payload;
      default:
        return state;
    }
  };

  export default goalieProfileReducer;  