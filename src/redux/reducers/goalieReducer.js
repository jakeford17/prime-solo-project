const goalieReducer = (state = [], action) => {
    switch (action.type) {
      case 'FETCH_GOALIE':
        return action.payload;
      default:
        return state;
    }
  };

  export default goalieReducer;  