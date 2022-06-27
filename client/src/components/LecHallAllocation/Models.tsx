import { BooleanLiteral } from "typescript";

export interface Item {
  id: number;
  hallNo: string;
  floorNumber: number;
  buildingNumber: number;
  capacity: number;
  labType: string;
  classRoomType: number;
  institute: {
    id: 0;
    instituteName: string;
    contactNumber: string;
    classrooms: [string];
  };
  instituteId: number;
  bookings: Booking[];

  classRoom_Resources: ClassRoomResource[];
}

export interface ClassRoomResource {
  id: number;
  quantity: number;
  classRoomId: number;
  resourceId: number;
}

export interface Resource {
  id: number;
  name: string;
  description: string;
  classRoom_Resources: ClassRoomResource[];
}

export interface Options {
  value: number;
  label: string;
}

export interface TimeSlotCell {
  isBooked: boolean;
}

export interface Booking {
  id?: number;
  userId?: number;
  classRoomId: number;
  date: string;
  startTime: string;
  endTime: string;
}
