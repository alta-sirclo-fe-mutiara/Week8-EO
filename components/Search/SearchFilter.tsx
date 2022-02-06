import { useLazyQuery } from "@apollo/client";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { QUERY_SEARCH_EVENT } from "../../utils/queries";

type Props = {
  setEventData: any;
};
const SearchFilter: React.FC<Props> = ({ setEventData }) => {
  const [textSearch, setTextSeach] = useState<string>("");
  const handleChange = (e: any) => {
    setTextSeach(e.target.value);
  };
  const [searchEvent, { data }] = useLazyQuery(QUERY_SEARCH_EVENT);
  const handleSearchFilter = () => {
    searchEvent({
      variables: {
        keyword: textSearch,
      },
    }).then((data) => setEventData(data.data.events));
  };
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={handleChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
        onClick={handleSearchFilter}
      >
        <FiSearch />
      </button>
    </div>
  );
};

export default SearchFilter;
