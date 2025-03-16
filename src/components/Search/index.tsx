import { Dispatch, FC, SetStateAction, useState } from "react";

import { sampleData } from "../../mocks/sampleData";

import { Data } from "../../interfaces/data";

import classes from "./Search.module.scss";

const findPath = (
  data: Data[],
  searchTerm: string,
  path: Data[] = []
): Data[] | null => {
  for (const item of data) {
    if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return [...path, item];
    }

    if (item.children?.length) {
      const result = findPath(item.children, searchTerm, [...path, item]);

      if (result) return result;
    }
  }

  return null;
};

interface SearchProps {
  setSelectedPaths: Dispatch<SetStateAction<Data[]>>;
}

const Search: FC<SearchProps> = ({ setSelectedPaths }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    const trimmedTerm = searchTerm.trim();

    if (!trimmedTerm) return;

    const result = findPath(sampleData, trimmedTerm);

    if (result) {
      /* If the found item is a leaf (has no children),
       update selectedPaths to the chain _up to its parent_ */
      const lastItem = result[result.length - 1];

      if (!lastItem.children?.length && result.length > 1) {
        setSelectedPaths(result.slice(0, -1));
      } else {
        // Otherwise, update selectedPaths normally.
        setSelectedPaths(result);
      }
    } else {
      alert("No results found for the searched term.");
    }

    setSearchTerm("");
  };

  return (
    <div className={classes.wrapper}>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        placeholder="Search..."
        className={classes.search}
      />
      <button
        onClick={handleSearch}
        className={classes.search__button}
        disabled={!searchTerm}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
