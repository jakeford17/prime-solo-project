const defenseReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DEFENSE':
      return action.payload;
    default:
      return state;
  }
};

export default defenseReducer;  