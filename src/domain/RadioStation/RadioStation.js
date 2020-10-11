export const RadioStation = ({
  stationuuid = null,
  family = "",
  tags = "",
  link1 = "",
  link2 = "",
  homepage = "",
  favicon = "",
  language = ""
} = {}) => {
  return Object.freeze({
    stationuuid,
    family,
    tags,
    link1,
    link2,
    homepage,
    favicon,
    language
  });
};
