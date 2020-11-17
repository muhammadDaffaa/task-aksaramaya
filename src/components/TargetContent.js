import React, { useContext } from "react";
import img1 from "./template/template/1.png";
import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../context/ThemeContext";

const TargetContent = () => {
  const { image } = useContext(ThemeContext);
  console.log("Target Gambar", image.selectedImage);
  console.log(img1);
  return (
    <div className="image-content">
      {image.selectedImage.img ? (
        <img src={image.selectedImage.img} alt="Ini Gambar Content" />
      ) : (
        <img src={img1} alt="Ini Gambar Content" />
      )}

      <div className="icon-content">
        <FontAwesomeIcon color="white" icon={faCommentAlt} size="2x" />
      </div>
    </div>
  );
};

export default TargetContent;
