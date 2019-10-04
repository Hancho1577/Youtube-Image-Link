function finding_fail() {
  return "Cannot find a video.";
}

function genToLink(id) {
  if (!id) return "Detecting an id is fail.";
  return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
}

function YTImg(str) { //main
  try {
    if (!str) return "Cannot find a link.";
    if (str.indexOf("www.youtube.com") == -1 && str.indexOf("youtu.be") == -1) return finding_fail();
    if (str.indexOf("youtube.com/playlist") != -1) {
      return "Playlists are not supported yet.";
    } else if (str.indexOf("www.youtube.com") != -1) {
      try {
        str = str.split("com/watch?v=")[1];
        str = str.split("&")[0];
        str = str.split(" ")[0];
      } catch (e) {
        return "Detecting an id is fail.";
      }
      return genToLink(str);
    } else if (str.indexOf("youtu.be") != -1) {
      try {
        str = str.split("youtu.be/")[1];
        str = str.split("&")[0];
        str = str.split(" ")[0];
      } catch (e) {
        return "Detecting an id is fail.";
      }
      return genToLink(str);
    } else {
      return finding_fail();
    }
  } catch (e) {
    return "An Unexpected Error Occurred";
  }
}

console.log(YTImg("Youtube Video Link Here"));
