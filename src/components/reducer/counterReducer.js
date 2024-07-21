const counterReducer = (state, action) => {
  if (action.type === "INCREASE") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREASE") {
    return { count: state.count - 1 };
  } else {
    return { count: 0 };
  }
};

export default counterReducer;
