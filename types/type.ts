import { ReactNode } from "react";

export type ChildProps = {
  children: ReactNode;
};

export type InputEvents = {
  name: string;
  promotor: string;
  category_id: number;
  date: string;
  location: string;
  photo: string;
  details: string;
};
