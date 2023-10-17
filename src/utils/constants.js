export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_ICON =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmY3Y2Q4MzZjYWU3MThlMmRhZjc1NzQzM2FkOWFhOCIsInN1YiI6IjY1MmEzYzE5MzU4ZGE3MDBhZDM0OGM2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XK0StH8e0Kx6h7DqqNhWNDOqJxhg78JSiTYPwjr2w3g",
  },
};

export const IMG_CDN = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "English", lang: "English" },
  { identifier: "Hindi", lang: "Hindi" },
  { identifier: "French", lang: "French" },
];

export const translations = {
  English: {
    placeholder: "What would you like to watch today?",
    search: "Search",
  },
  Hindi: {
    placeholder: "आज आप क्या देखना चाहेंगे?",
    search: "खोज",
  },
  French: {
    placeholder: "Qu’aimeriez-vous regarder aujourd’hui ?",
    search: "Recherche",
  },
};
