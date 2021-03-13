import React, { useState } from "react";
import { AddCategory } from "../AddCategory/AddCategory";
import { GifGrid } from "../GifGrid/GifGrid";
import Sidenav from "../sidenav/Sidenar";
import "./GifExpertApp.css";

export const GifExpertApp = () => {
  //useState
  const [categories, setCategories] = useState(["One Punchman"]);

  return (
    <>
      <Sidenav />
      <div className="container py-4">
        <div className="row">
          <div className="col-12">
            <AddCategory setCategories={setCategories} />
          </div>
        </div>
          {categories.map((category, i) => (
            <GifGrid key={category} category={category} />
          ))}
      </div>
    </>
  );
};
