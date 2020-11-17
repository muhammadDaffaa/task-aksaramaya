import React, { createContext, useReducer, useState } from "react";
import img1 from "../components/template/template/1.png";
import img2 from "../components/template/template/2.png";
import img3 from "../components/template/template/3.png";
import img4 from "../components/template/template/4.png";
import img5 from "../components/template/template/5.png";
import img6 from "../components/template/template/6.png";
import { ImageReducer } from "../reducer/ImageReducer";

export const ThemeContext = createContext();

const INITITIAL_STATE = {
  imageData: [
    { img: img1, id: 1 },
    { img: img2, id: 2 },
    { img: img3, id: 3 },
    { img: img4, id: 4 },
    { img: img5, id: 5 },
    { img: img6, id: 6 },
  ],
  selectedImage: {},
};
const initialState = {
  defaultColor: { bg: "black" },
  activeColor: { bg: "white" },
};
const ThemeContextProvider = ({ children }) => {
  const [theme] = useState(initialState);
  const [image, dispatch] = useReducer(ImageReducer, INITITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ theme, image, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
