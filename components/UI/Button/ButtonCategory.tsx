import { useLazyQuery } from "@apollo/client";
import { ChildProps } from "../../../types/type";
import { QUERY_GET_EVENT_BY_CATEGORY } from "../../../utils/queries";

type ButtonType = {
  id: number;
  setEventData: any;
  children: ChildProps;
};
export const ButtonCategory: React.FC<ButtonType> = ({
  children,
  id,
  setEventData,
}) => {
  const [eventByCategory] = useLazyQuery(QUERY_GET_EVENT_BY_CATEGORY);
  const handleFilterCategory = () => {
    eventByCategory({
      variables: {
        categoryid: id,
      },
    })
      .then((data) => {
        setEventData(data.data.events);
      })
      .catch(() => alert("error"));
  };

  return (
    <button
      className="btn btn-none col-4 col-lg-2"
      onClick={handleFilterCategory}
    >
      {children}
    </button>
  );
};
