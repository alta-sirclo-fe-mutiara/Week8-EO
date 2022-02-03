import { ChildProps } from "../../../types/type";

export const ButtonCategory: React.FC<ChildProps> = ({ children }) => {
  return <button className="btn btn-none col-4 col-lg-2">{children}</button>;
};
