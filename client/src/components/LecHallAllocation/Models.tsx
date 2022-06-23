export interface Item {
  id: number;
  floorNumber: number;
  buildingNumber: number;
  capacity: number;
  labType: string;
  adminId: number;
  classRoomType: 0;
  bookings: {
    id: number;
    user: number;
    classRoomId: number;
    date: Date;
    startTime: Date;
    endTime: Date;
  }[];
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
  item: number;
  id: string;
}

export interface Booking {
  id?: number;
  user: number;
  classRoomId: number;
  date: string;
  startTime: string;
  endTime: string;
}
