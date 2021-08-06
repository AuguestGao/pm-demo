import React from "react";
import CardPreview from "../components/CardPreview.component";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

const HomePage = () => {
  const cards = useSelector((state) => state.cards);
  const history = useHistory();

  return (
    <Container className="justify-content-center">
      <Button variant="dark" onClick={() => history.push("/new")}>
        NEW
      </Button>
      <Container className="d-flex flex-row justify-content-center flex-md-wrap">
        {isEmpty(cards) ? (
          <h2>no cards...</h2>
        ) : (
          Object.entries(cards).map(([id, data]) => (
            <CardPreview
              key={id}
              id={id}
              title={data.profile.name}
              text={data.createdAt.slice(0, 10)}
            />
          ))
        )}
      </Container>
    </Container>
  );
};

export default HomePage;
