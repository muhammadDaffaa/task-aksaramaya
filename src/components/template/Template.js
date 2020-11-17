import React, { useContext } from "react";
import { Grid, GridColumn, GridRow, Header, Image } from "semantic-ui-react";
import Fade from "react-reveal/Fade";
import { ThemeContext } from "../../context/ThemeContext";

const Template = () => {
  const { image, dispatch } = useContext(ThemeContext);

  const handleSelected = (e) => {
    e.preventDefault();
    const { src, id } = e.target;
    dispatch({ type: "SELECTED_IMAGE", payload: { img: src, id } });
  };

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
            {image.imageData.map((img) => {
              return (
                <GridColumn
                  stretched
                  key={img.id}
                  style={{ marginTop: "15px" }}
                >
                  <Image src={img.img} id={img.id} onClick={handleSelected} />
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
