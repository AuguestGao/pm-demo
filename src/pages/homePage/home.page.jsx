import React, { useState } from "react";
import CardPreview from "../../components/CardPreview.component";
import FormInput from "../../components/FormInput/FormInput.component";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "lodash";

import {
  HomeRootContainer,
  CardPreviewContainer,
  TopContainer,
  SearchBarContainer,
} from "./home.page.styles";

const HomePage = () => {
  const cards = useSelector((state) => state.cards);
  const history = useHistory();
  const [searchWord, setSearchWord] = useState("");

  const filteredCards = searchWord
    ? Object.values(cards).filter((card) =>
        card.profile.name.toLowerCase().includes(searchWord.toLowerCase())
      )
    : cards;

  return (
    <HomeRootContainer>
      <TopContainer>
        <SearchBarContainer>
          <FormInput
            label="search"
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
        </SearchBarContainer>
        <Button
          variant="outline-dark"
          size="md"
          onClick={() => history.push("/new")}
        >
          NEW
        </Button>
      </TopContainer>
      <CardPreviewContainer>
        {isEmpty(cards) ? (
          <h2>no cards...</h2>
        ) : (
          Object.entries(filteredCards).map(([id, data]) => (
            <CardPreview
              key={id}
              id={id}
              title={data.profile.name}
              text={data.createdAt.slice(0, 10)}
            />
          ))
        )}
        {/* <CardPreview
          key="fake"
          id="fake"
          title="Non-existing Card"
          text="to mimic manually typed card id"
        /> */}
      </CardPreviewContainer>
    </HomeRootContainer>
  );
};

export default HomePage;
