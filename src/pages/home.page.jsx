import React from "react";
import CardPreview from "../components/CardPreview.component";
import { Container } from "react-bootstrap";

const HomePage = () => {
  // temperatury cards
  const cards = [
    { id: 1, title: "card1", text: "card 1 content" },
    { id: 2, title: "card2", text: "card 2 content" },
    { id: 3, title: "card3", text: "card 3 content" },
    { id: 4, title: "card4", text: "card 4 content" },
    { id: 5, title: "card5", text: "card 5 content" },
    { id: 6, title: "card6", text: "card 6 content" },
    { id: 7, title: "card7", text: "card 7 content" },
    { id: 8, title: "card8", text: "card 8 content" },
    { id: 9, title: "card9", text: "card 9 content" },
    { id: 0, title: "card0", text: "card 0 content" },
  ];
  return (
    <Container className="d-flex flex-row justify-content-center flex-md-wrap">
      {cards.map((card) => (
        <CardPreview
          key={card.id}
          id={card.id}
          title={card.title}
          text={card.text}
        />
      ))}
    </Container>
  );
};

export default HomePage;
