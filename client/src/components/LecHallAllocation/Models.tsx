import { Dispatch, SetStateAction } from "react";

export interface Item {
  Id: number;
  FloorNumber: number;
  BuildingNumber: number;
  capacity: number;
  labType?: string;
  resources?: {
    Id: number;
    ResourceName: string;
    Quantity: number;
  }[];

  classRoomType: number;
}

export interface Options {
  value: number;
  label: string;
}

export interface TimeSlotCell {
  item: number;
  id: string;
}
