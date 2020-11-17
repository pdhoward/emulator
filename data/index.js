
const venueData = [
  {group: "Sam", measure: 0.30},
  {group: "Peter", measure: 0.25},
  {group: "John", measure: 0.15},
  {group: "Rick", measure: 0.05},
  {group: "Lenny", measure: 0.18},
  {group: "Paul", measure:0.04},
  {group: "Steve", measure: 0.03}
];

const brandData = [
  { group: "All", category: "Oranges", measure: 63850.4963 }, 
  { group: "All", category: "Apples", measure: 78258.0845 }, 
  { group: "All", category: "Grapes", measure: 60610.2355 }, 
  { group: "All", category: "Figs", measure: 30493.1686 }, 
  { group: "All", category: "Mangos", measure: 56097.0151 }, 
  { group: "Sam", category: "Oranges", measure: 19441.5648 }, 
  { group: "Sam", category: "Apples", measure: 25922.0864 }, 
  { group: "Sam", category: "Grapes", measure: 9720.7824 }, 
  { group: "Sam", category: "Figs", measure: 6480.5216 }, 
  { group: "Sam", category: "Mangos", measure: 19441.5648 }, 
  { group: "Peter", category: "Oranges", measure: 22913.2728 }, 
  { group: "Peter", category: "Apples", measure: 7637.7576 }, 
  { group: "Peter", category: "Grapes", measure: 23549.7526 }, 
  { group: "Peter", category: "Figs", measure: 1909.4394 }, 
  { group: "Peter", category: "Mangos", measure: 7637.7576 }, 
  { group: "John", category: "Oranges", measure: 1041.5124 }, 
  { group: "John", category: "Apples", measure: 2430.1956 }, 
  { group: "John", category: "Grapes", measure: 15275.5152 }, 
  { group: "John", category: "Figs", measure: 4166.0496 }, 
  { group: "John", category: "Mangos", measure: 11803.8072 }, 
  { group: "Rick", category: "Oranges", measure: 7406.3104 }, 
  { group: "Rick", category: "Apples", measure: 2545.9192 }, 
  { group: "Rick", category: "Grapes", measure: 1620.1304 }, 
  { group: "Rick", category: "Figs", measure: 8563.5464 }, 
  { group: "Rick", category: "Mangos", measure: 3008.8136 }, 
  { group: "Lenny", category: "Oranges", measure: 7637.7576 }, 
  { group: "Lenny", category: "Apples", measure: 35411.4216 }, 
  { group: "Lenny", category: "Grapes", measure: 8332.0992 }, 
  { group: "Lenny", category: "Figs", measure: 6249.0744 }, 
  { group: "Lenny", category: "Mangos", measure: 11803.8072 }, 
  { group: "Paul", category: "Oranges", measure: 3182.399 }, 
  { group: "Paul", category: "Apples", measure: 867.927 }, 
  { group: "Paul", category: "Grapes", measure: 1808.18125 }, 
  { group: "Paul", category: "Figs", measure: 795.59975 }, 
  { group: "Paul", category: "Mangos", measure: 578.618 }, 
  { group: "Steve", category: "Oranges", measure: 2227.6793 }, 
  { group: "Steve", category: "Apples", measure: 3442.7771 }, 
  { group: "Steve", category: "Grapes", measure: 303.77445 }, 
  { group: "Steve", category: "Figs", measure: 2328.93745 }, 
  { group: "Steve", category: "Mangos", measure: 1822.6467 }, 
];

const trendData = [
  { group: "All", category: 2008, measure: 289309 }, 
  { group: "All", category: 2009, measure: 234998 }, 
  { group: "All", category: 2010, measure: 310900 }, 
  { group: "All", category: 2011, measure: 223900 }, 
  { group: "All", category: 2012, measure: 234500 }, 
  { group: "Sam", category: 2008, measure: 81006.52 }, 
  { group: "Sam", category: 2009, measure: 70499.4 }, 
  { group: "Sam", category: 2010, measure: 96379 }, 
  { group: "Sam", category: 2011, measure: 64931 }, 
  { group: "Sam", category: 2012, measure: 70350 }, 
  { group: "Peter", category: 2008, measure: 63647.98 }, 
  { group: "Peter", category: 2009, measure: 61099.48 }, 
  { group: "Peter", category: 2010, measure: 87052 }, 
  { group: "Peter", category: 2011, measure: 58214 }, 
  { group: "Peter", category: 2012, measure: 58625 }, 
  { group: "Rick", category: 2008, measure: 23144.72 }, 
  { group: "Rick", category: 2009, measure: 14099.88 }, 
  { group: "Rick", category: 2010, measure: 15545 }, 
  { group: "Rick", category: 2011, measure: 11195 }, 
  { group: "Rick", category: 2012, measure: 11725 }, 
  { group: "John", category: 2008, measure: 34717.08 }, 
  { group: "John", category: 2009, measure: 30549.74 }, 
  { group: "John", category: 2010, measure: 34199 }, 
  { group: "John", category: 2011, measure: 33585 }, 
  { group: "John", category: 2012, measure: 35175 }, 
  { group: "Lenny", category: 2008, measure: 69434.16 }, 
  { group: "Lenny", category: 2009, measure: 46999.6 }, 
  { group: "Lenny", category: 2010, measure: 62180 }, 
  { group: "Lenny", category: 2011, measure: 40302 }, 
  { group: "Lenny", category: 2012, measure: 42210 }, 
  { group: "Paul", category: 2008, measure: 7232.725 }, 
  { group: "Paul", category: 2009, measure: 4699.96 }, 
  { group: "Paul", category: 2010, measure: 6218 }, 
  { group: "Paul", category: 2011, measure: 8956 }, 
  { group: "Paul", category: 2012, measure: 9380 }, 
  { group: "Steve", category: 2008, measure: 10125.815 }, 
  { group: "Steve", category: 2009, measure: 7049.94 }, 
  { group: "Steve", category: 2010, measure: 9327 }, 
  { group: "Steve", category: 2011, measure: 6717 }, 
  { group: "Steve", category: 2012, measure: 7035 }
];

export {venueData, brandData, trendData}