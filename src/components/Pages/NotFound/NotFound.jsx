export const NotFound = () => {
  //gets the current url from browser
  const path = window.location.href;
  //substring - deletes everything before the slash /,
  //so you can see the exact page where you have the error
  const url = path.substring(path.lastIndexOf("/") + 1);
  return <div> siden {url} 404 - NotFound</div>;
};
