const initialData = {
  name: "",
};
const myReducer = (state = initialData, action) => {
  if (action.type === "NAME") {
    state = {
      name: action.nameComp,
    };
  }
  return state;
};
export default myReducer;
