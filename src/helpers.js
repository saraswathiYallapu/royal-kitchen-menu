import { categoryWiseItems } from "./data/constants";

export const getMenuItems = ({ category, foodType }) => {
  return categoryWiseItems?.[category]?.[foodType] || [];
};
