/** @format */
import { fetchListOfProfiles } from "../api/linkedinApi";
import React from "react";

export default function Search() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {},
  });
  const apiurl = fetchListOfProfiles();

  const search = (e) => {
    if (e.key === "Enter") {
      console.log(e);
    }
  };
  return <div></div>;
}
