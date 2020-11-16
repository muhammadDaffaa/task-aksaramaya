import React, { useState } from "react";
import { Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import img1 from "./pattern/beige-tiles.png";
import img2 from "./pattern/bush.png";
import img3 from "./pattern/connectwork.png";
import img4 from "./pattern/memphis-mini.png";
import img5 from "./pattern/more-leaves-on-green.png";
import img6 from "./pattern/moroccan-flower-dark.png";
import img7 from "./pattern/oriental-tiles.png";
import img8 from "./pattern/watercolor.png";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const Background = () => {
  const [image] = useState(images);

  return (
    <Fade left>
      <div className="sidee">
        <Header as="h2" disabled>
          Latar
        </Header>
        <Grid>
          <GridRow>
            <GridColumn>
              <input type="text" placeholder="Cari Latar..." />
            </GridColumn>
          </GridRow>
          <GridRow columns={2}>
            {image.map((img) => {
              return (
                <GridColumn stretched key="" style={{ marginTop: "15px" }}>
                  <Image src={img} />
                </GridColumn>
              );
            })}
          </GridRow>
        </Grid>
      </div>
    </Fade>
  );
};

export default Background;
