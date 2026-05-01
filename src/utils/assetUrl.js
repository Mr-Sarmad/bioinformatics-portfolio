/**
 * Returns the correct asset URL by prepending Vite's base URL.
 * Works in both development (/) and GitHub Pages (/bioinformatics-portfolio/)
 */
export const getAssetUrl = (path) => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL.slice(0, -1)
    : import.meta.env.BASE_URL;
  return `${base}${path}`;
};
