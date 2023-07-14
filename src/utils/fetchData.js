export const exerciseOptions = {
  method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "X-RapidAPI-Key": "23ae011690msh46c86fc310a1c27p1bf2b7jsn99ab24ee5d54",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "23ae011690msh46c86fc310a1c27p1bf2b7jsn99ab24ee5d54",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
