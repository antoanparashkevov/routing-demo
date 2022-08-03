import * as api from "./api.js";

const endpoints = {
  recipes: "/data/recipes",
};

export async function getAllRecipes() {
  return api.get(endpoints.recipes);
}
