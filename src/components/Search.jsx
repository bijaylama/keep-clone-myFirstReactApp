import React, { useState } from "react";
import SearchBar from "./common/SearchBar/SearchBar";

export const Search = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event);
    console.log(input);
    handleSearch(input);
  };
  return (
    <>
      <SearchBar
        handleChange={handleChange}
        setInput={setInput}
        input={input}
      />
    </>
  );
};
