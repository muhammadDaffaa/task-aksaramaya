import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import {
  faHeart,
  faStar,
  faSquareFull,
  faCircle,
  faSquare,
  faPlay,
  faArrowsAltH,
  faArrowsAltV,
} from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn>
            <input type="text" placeholder="Cari Stiker..." />
          </GridColumn>
        </GridRow>
        <GridRow columns={4}>
          <GridColumn>
            <FontAwesomeIcon color="grey" icon={faSquareFull} size="4x" />
          </GridColumn>
          <GridColumn>
            <FontAwesomeIcon color="grey" icon={faCircle} size="4x" />
          </GridColumn>
          <GridColumn>
            <FontAwesomeIcon color="grey" icon={faSquare} size="4x" />
          </GridColumn>
          <GridColumn>
            <FontAwesomeIcon
              color="grey"
              icon={faPlay}
              size="4x"
              rotation={270}
            />
          </GridColumn>

          <GridColumn className="mt">
            <FontAwesomeIcon color="grey" icon={faHeart} size="4x" />
          </GridColumn>
          <GridColumn className="mt">
            <FontAwesomeIcon color="grey" icon={faStar} size="4x" />
          </GridColumn>
          <GridColumn className="mt">
            <FontAwesomeIcon color="grey" icon={faArrowsAltH} size="4x" />
          </GridColumn>
          <GridColumn className="mt">
            <FontAwesomeIcon color="grey" icon={faArrowsAltV} size="4x" />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Icons;
