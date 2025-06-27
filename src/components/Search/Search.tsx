//import { useState } from "react";
import "./search.css";
import { MdSearch } from "react-icons/md";

const Search = () => {
  //const [searchText, setSearchText] = useState("");

  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        name=""
        id=""
        placeholder="Search post...."
        //onChange={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};

export default Search;
