import React from "react";
import CardPreview from "../../components/CardPreview.component";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

import { HomeRootContainer, CardPreviewContainer } from "./home.page.styles";

const HomePage = () => {
  const cards = useSelector((state) => state.cards);
  const history = useHistory();

  return (
    <HomeRootContainer>
      <Button variant="dark" onClick={() => history.push("/new")}>
        NEW
      </Button>
      <CardPreviewContainer>
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
        <CardPreview
          key="fake"
          id="fake"
          title="Non-existing Card"
          text="to mimic manually typed card id"
        />
      </CardPreviewContainer>
    </HomeRootContainer>
  );
};

export default HomePage;
