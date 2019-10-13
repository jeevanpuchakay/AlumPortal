import React from "react";
import CardActions from "@material-ui/core/CardActions";
import { Card, CardTitle, CardText } from "react-mdl";
import "react-bootstrap";

const photo =
  "https://english.cdn.zeenews.com/sites/default/files/2018/09/26/723022-iit-indore-facebook.jpg";

const Kard = () => {
  return (
    <div>
      <Card shadow={5} style={{ margin: "30px",height:"350px",width:"350px"}}>
        <CardTitle
          style={{
            color: "black",
            dispaly: "flex",
            backgroundImage: `url(${photo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flex: 1,
          }}
        >
        </CardTitle>
        <CardText>
        <text className="font-weight-bold">Yearbook 2K19</text>
        </CardText>
        <CardActions></CardActions>
      </Card>
    </div>
  );
};

export default Kard;
