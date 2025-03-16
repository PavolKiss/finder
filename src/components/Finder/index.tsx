import { FC, useState } from "react";

import Breadcrumb from "../Breadcrumb";
import Search from "../Search";

import { MAX_VISIBLE_COLUMNS } from "../../constants/maxVisibleColumns";
import { sampleData } from "../../mocks/sampleData";

import { Data } from "../../interfaces/data";

import classes from "./Finder.module.scss";

const Finder: FC = () => {
  const [selectedPaths, setSelectedPaths] = useState<Data[]>([]);

  /* Build the full list of columns:
   * Column 0: root options (sampleData)
   * For each selected item that has children, add a column showing its children. */
  const fullColumns = [
    sampleData,
    ...selectedPaths
      .filter((item) => item.children?.length)
      .map((item) => item.children),
  ];

  const totalColumns = fullColumns.length;
  // Compute a sliding window of visible columns (max MAX_VISIBLE_COLUMNS)
  const startCol =
    totalColumns > MAX_VISIBLE_COLUMNS ? totalColumns - MAX_VISIBLE_COLUMNS : 0;
  const visibleColumns = Array.from(
    { length: totalColumns - startCol },
    (_, i) => i + startCol
  );

  const handleDoubleClick = (col: number, data: Data) => {
    // (For click, if the data has no children, we do nothing.)
    if (!data.children?.length) return;
    // Clear any previous searchedLeaf when navigating manually.
    setSelectedPaths([...selectedPaths.slice(0, col), data]);
  };

  return (
    <div>
      <Search setSelectedPaths={setSelectedPaths} />
      <Breadcrumb navigationPaths={selectedPaths.map(({ name }) => name)} />
      <div className={classes.wrapper}>
        {visibleColumns.map((col) => {
          // Get options for the column from our fullColumns array.
          const options = fullColumns[col] || [];
          const activeItem = selectedPaths[col];

          return (
            <div key={col} className={classes.panel}>
              {options.map((data, index) => {
                const isActive = activeItem?.name === data.name;

                return (
                  <div
                    key={index}
                    onDoubleClick={() => handleDoubleClick(col, data)}
                    className={`${classes.panel__option} ${
                      isActive ? classes["panel__option--active"] : ""
                    }`}
                  >
                    {data.name}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Finder;
