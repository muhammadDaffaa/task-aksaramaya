export const ImageReducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "SELECTED_IMAGE":
      return { ...state, selectedImage: action.payload };

    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};
