//import { useContext, useState } from "react";
import "./search.css";
import { MdSearch } from "react-icons/md";
//import { GlobalContext } from "../../context/context";

const Search = () => {
  //const { setSearchText } = useContext(GlobalContext);

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
