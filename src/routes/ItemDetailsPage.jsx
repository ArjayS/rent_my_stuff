import React from "react";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import SpecificItemComponent from "../components/SpecificItemComponent";
import ItemReviewCardComponent from "../components/ItemReviewCardComponent";
import WriteFormComponent from "../components/WriteFormComponent";
import { useParams } from "react-router-dom";

const ItemDetailsPage = () => {
  const { id } = useParams();
  return (
    <>
      <StoreNavigationComponent />
      <SpecificItemComponent id={id} />
      <ItemReviewCardComponent id={id} />
      <WriteFormComponent id={id} />
    </>
  );
};

export default ItemDetailsPage;
