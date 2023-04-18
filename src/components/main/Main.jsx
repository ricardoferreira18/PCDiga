import React from "react";
import { Hero } from "./Hero";
import CategoriesList from "./CategoriesList";
import ItemCard from "../ItemCard";
import Destaques from "./Destaques";
import Promo from "./Promo";
import Blog from "./Blog";

const Main = () => {
  return (
    <main className="bg-gray dark:bg-darkSec">
      <Hero />
      <CategoriesList />
      <ItemCard />
      <Destaques />
      <Promo />
      <Blog />
    </main>
  );
};

export default Main;
