import React, { useState } from "react";
import { Button, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import img1 from "./wallpaper/1.jpg";
import img2 from "./wallpaper/2.jpg";
import img3 from "./wallpaper/3.jpg";
import img4 from "./wallpaper/4.jpg";
import img5 from "./wallpaper/5.jpg";
import img6 from "./wallpaper/6.jpg";
import img7 from "./wallpaper/7.jpg";
import img8 from "./wallpaper/8.jpg";
import img9 from "./wallpaper/9.jpg";
import img10 from "./wallpaper/10.jpg";
import img11 from "./wallpaper/11.jpg";
import img12 from "./wallpaper/12.jpg";
// Gambar Kedua
import img13 from "./wallpaper/13.jpg";
import img14 from "./wallpaper/14.jpg";
import img15 from "./wallpaper/15.jpg";
import img16 from "./wallpaper/16.jpg";

import Fade from "react-reveal/Fade";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];
const uploads = [img13, img14, img15, img16];

const Wallpaper = () => {
  const [image] = useState(images);
  const [image2] = useState(uploads);
  const [index, setIndex] = useState(0);

  return (
    <Fade left>
      <div className="sidee">
        <Button
          onClick={() => {
            setIndex(1);
          }}
          content="Telusuri"
        />
        <Button
          onClick={() => {
            setIndex(2);
          }}
          content="Gambar Saya"
        />
        {index !== 2 ? (
          <>
            <input type="text" placeholder="Cari Gambar..." className="mt" />
            <Grid>
              <GridRow columns={2}>
                {image.map((img) => {
                  return (
                    <GridColumn stretched style={{ marginTop: "15px" }}>
                      <Image src={img} />
                    </GridColumn>
                  );
                })}
              </GridRow>
            </Grid>
          </>
        ) : (
          <>
            <Button
              color="red"
              content="Unggah Gambar"
              style={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
            />
            <Grid>
              <GridRow columns={2}>
                {image2.map((img2) => {
                  console.log(image2, img2);
                  return (
                    <GridColumn stretched style={{ marginTop: "15px" }}>
                      <Image src={img2} />
                    </GridColumn>
                  );
                })}
              </GridRow>
            </Grid>
          </>
        )}
      </div>
    </Fade>
  );
};

export default Wallpaper;
