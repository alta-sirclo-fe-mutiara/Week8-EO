import { ReactNode } from "react";

export type ChildProps = {
  pageTitle?: String;
  children: ReactNode;
};

export type InputEvents = {
  name: string;
  promotor: string;
  categoryId: number;
  datetime: string;
  location: string;
  photo: string;
  description: string;
};

export type EventData = {
  id: number;
  name: string;
  promotor: string;
  category_id: number;
  datetime: string;
  photo: string;
};

export type TokenProps = {
  authorized: boolean;
  exp: number;
  id: number;
};
