export const exerciseOptions = {
  method: "GET",
  //   url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  headers: {
    "X-RapidAPI-Key": "72de357f14msh963a1688c9a1557p12828cjsn6ef88753d485",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "72de357f14msh963a1688c9a1557p12828cjsn6ef88753d485",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
