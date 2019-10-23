const defenseProfileReducer = (state = [], action) => {
    switch (action.type) {
      case 'ONE_DEFENSE_INFO':
        return action.payload;
      default:
        return state;
    }
  };

  export default defenseProfileReducer;  