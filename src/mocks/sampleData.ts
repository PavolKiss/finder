import { Data } from "../interfaces/data";

export const sampleData: Data[] = [
  {
    name: "West",
    children: [
      {
        name: "Region A",
        children: [
          {
            name: "Area A1",
            children: [{ name: "Zone A1a" }, { name: "Zone A1b" }],
          },
          {
            name: "Area A2",
          },
          {
            name: "Area A3",
            children: [
              { name: "Zone A3a" },
              {
                name: "Zone A3b",
                children: [{ name: "Sector A3b-I" }, { name: "Sector A3b-II" }],
              },
            ],
          },
        ],
      },
      {
        name: "Region B",
        children: [
          {
            name: "Area B1",
            children: [{ name: "Zone B1a" }, { name: "Zone B1b" }],
          },
          {
            name: "Area B2",
          },
        ],
      },
      {
        name: "Region C",
      },
    ],
  },
  {
    name: "Central",
    children: [
      {
        name: "Central Region X",
        children: [
          {
            name: "Subregion X1",
            children: [
              {
                name: "District X1a",
                children: [
                  { name: "Locality X1a-i" },
                  { name: "Locality X1a-ii" },
                ],
              },
              {
                name: "District X1b",
              },
            ],
          },
          {
            name: "Subregion X2",
            children: [
              { name: "District X2a" },
              {
                name: "District X2b",
                children: [
                  { name: "Locality X2b-1" },
                  { name: "Locality X2b-2" },
                  {
                    name: "Locality X2b-3",
                    children: [{ name: "Another place" }],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Central Region Y",
        children: [
          {
            name: "Subregion Y1",
            children: [
              {
                name: "District Y1a",
                children: [
                  { name: "Locality Y1a-1" },
                  { name: "Locality Y1a-2" },
                  { name: "Locality Y1a-3" },
                ],
              },
            ],
          },
          {
            name: "Subregion Y2",
          },
        ],
      },
    ],
  },
  {
    name: "East",
    children: [
      {
        name: "Eastern Region Q",
        children: [
          {
            name: "Area Q1",
            children: [
              {
                name: "Zone Q1a",
                children: [
                  { name: "Sector Q1a-I" },
                  { name: "Sector Q1a-II" },
                  { name: "Sector Q1a-III" },
                ],
              },
              { name: "Zone Q1b" },
            ],
          },
          {
            name: "Area Q2",
            children: [
              { name: "Zone Q2a" },
              {
                name: "Zone Q2b",
                children: [{ name: "Sector Q2b-1" }, { name: "Sector Q2b-2" }],
              },
            ],
          },
        ],
      },
      {
        name: "Eastern Region R",
      },
    ],
  },
];
