import React, { useContext } from "react";
import StoreNavigationComponent from "../components/StoreNavigationComponent";
import SpecificItemComponent from "../components/SpecificItemComponent";
import ItemReviewCardComponent from "../components/ItemReviewCardComponent";
import WriteFormComponent from "../components/WriteFormComponent";
import { useParams } from "react-router-dom";
import { RentMyStuffContext } from "../context/RentMyStuffContext";

const ItemDetailsPage = () => {
  const { verifiedStatus } = useContext(RentMyStuffContext);

  const { id } = useParams();
  return (
    <>
      <StoreNavigationComponent />
      <SpecificItemComponent id={id} />
      <ItemReviewCardComponent id={id} />
      {verifiedStatus && <WriteFormComponent id={id} />}
    </>
  );
};

export default ItemDetailsPage;
