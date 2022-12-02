import React from "react";
import StuffItem from "./StuffItem";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import StuffData from "../../api/StuffData";

export default function MyListofStuff(props){


  const items = props.items.map((item,id) => {


    return (

        <StuffItem
          name={item.item_name}
          description={item.item_description}
          price={item.item_base_price}
          key={id}
          id={item.id}
          delete={props.delete}
          image={item.item_image}
        />

    );
  });

  return(
    <>
      {items}
    </>
  )
}