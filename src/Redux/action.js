export const addToCart = (data) => {
  console.log(data, "action is called");
  return {
    type: "ADD_TO_CARD",
    data,
  };
};
