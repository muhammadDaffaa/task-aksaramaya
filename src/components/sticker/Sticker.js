import React from "react";
import { Grid, GridColumn, GridRow, Header, Icon } from "semantic-ui-react";
import Icons from "./Icons";
import Fade from "react-reveal/Fade";

const Sticker = () => {
  return (
    <Fade left>
      <div className="sidee">
        <Header as="h2" disabled>
          Objek & stiker
        </Header>
        <Icons />
        <Header as="h2" disabled>
          Stiker
        </Header>

        <Grid>
          <GridRow columns={2}>
            <GridColumn>
              <Icon name="at" color="grey" size="huge" className="iconnn" />
            </GridColumn>
            <GridColumn>
              <Icon name="fork" color="grey" size="huge" className="iconnn" />
            </GridColumn>
            <GridColumn>
              <Icon
                name="bomb"
                color="grey"
                size="huge"
                className="iconnn mt"
              />
            </GridColumn>
            <GridColumn>
              <Icon
                name="chess queen"
                color="grey"
                size="huge"
                className="iconnn mt"
              />
            </GridColumn>
            <GridColumn>
              <Icon
                name="qrcode"
                color="grey"
                size="huge"
                className="iconnn mt"
              />
            </GridColumn>
            <GridColumn>
              <Icon
                name="cogs"
                color="grey"
                size="huge"
                className="iconnn mt"
              />
            </GridColumn>
          </GridRow>
        </Grid>
      </div>
    </Fade>
  );
};
export default Sticker;
