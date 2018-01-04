// validate if a string param is empty
function isEmpty (param) {
  if (param === undefined) {
    return true;
  }
  return param === ('' || undefined || null) || param.length <= 0  ? true : false;
}


module.exports = {
  isEmpty
}