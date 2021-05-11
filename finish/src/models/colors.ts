import { Item } from "../models/item";

export type NewColor = {
  name: string;
  hexcode: string;
};

export type Color = NewColor & Item;
