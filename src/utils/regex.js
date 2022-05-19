const APP_MENTION_PATTERNS = {
  SALUDA_A_UN_CACHON_REGEX: new RegExp(/saluda a un cach(?:ó|o)n$/, "i"),
  QUIEN_ES_EL_MAS_CACHON_REGEX: new RegExp(
    /¿qui(e|é)n es el m(?:a|á)s cach(?:ó|o)n\?$/,
    "i"
  ),
  TOP_CACHON_REGEX: new RegExp(/top ((\d+)|12.+1) cach(?:ó|o)n$/, "i")
};

module.exports = {
  APP_MENTION_PATTERNS
};
