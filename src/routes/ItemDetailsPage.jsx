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
      <div class="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-0 lg:pb-24">
      <div class="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">

      <ItemReviewCardComponent id={id} />
      </div>
      <WriteFormComponent id={id} />
      </div>
    </>
  );
};

export default ItemDetailsPage;
