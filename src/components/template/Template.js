import React, { useState } from "react";
import { Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import img1 from "./template/1.png";
import img2 from "./template/2.png";
import img3 from "./template/3.png";
import img4 from "./template/4.png";
import img5 from "./template/5.png";
import img6 from "./template/6.png";

const images = [img1, img2, img3, img4, img5, img6];

const Template = () => {
  const [image] = useState(images);
  return (
    <Fade left>
      <div className="sidee">
        <Header as="h2" disabled>
          Template
        </Header>

        <Grid>
          <GridRow>
            <GridColumn>
              <input type="text" placeholder="Cari Template..." />
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
export default Template;
