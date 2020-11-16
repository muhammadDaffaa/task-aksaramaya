import React, { useState } from "react";
import { Button, Grid, GridColumn, GridRow, Image } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import pctr1 from "./plain/1.jpg";
import pctr2 from "./plain/2.jpg";
import pctr3 from "./plain/3.jpg";
import pctr4 from "./plain/4.jpg";
import pctr5 from "./plain/5.jpg";
import pctr6 from "./plain/6.jpg";
import pctr7 from "./plain/7.jpg";
import pctr8 from "./plain/8.jpg";
import pctr9 from "./plain/9.jpg";
import pctr10 from "./plain/10.jpg";

const images = [
  pctr1,
  pctr2,
  pctr3,
  pctr4,
  pctr5,
  pctr6,
  pctr7,
  pctr8,
  pctr9,
  pctr10,
];

const Plain = () => {
  const [image] = useState(images);
  return (
    <Fade left>
      <div className="sidee">
        <Grid>
          <GridRow>
            <GridColumn>
              <Button
                style={{ background: "azure", width: "100%" }}
                content="Tambah Plain Text"
              />
            </GridColumn>
          </GridRow>
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
      </div>
    </Fade>
  );
};

export default Plain;
