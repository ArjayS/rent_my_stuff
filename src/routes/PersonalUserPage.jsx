import React from "react";
import { useEffect } from "react";
import axios from "axios";
import StuffData from "../api/StuffData";

const PersonalUserPage = () => {

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const response = await StuffData.get("/users/1/items")
        console.log(response.data.data.items)
      } catch(err){}
    }

    fetchData()
  },[])

  return (
    <div>
      <div>Nav Bar</div>
      <div>My stuff</div>
    </div>
    
  );
};

export default PersonalUserPage;
