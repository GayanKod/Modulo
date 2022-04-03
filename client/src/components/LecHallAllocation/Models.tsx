import { Dispatch, SetStateAction } from "react";

export interface Item {
  id: number;
  name: string;
  capacity: number;
  location: string;
}

export interface Options {
  value: string;
  label: string;
}

export interface TimeSlotCell {
  item: number;
}
