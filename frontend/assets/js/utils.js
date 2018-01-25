function isFunction (fn) {
  return typeof fn === 'function'
}

function isUndefined (object) {
  return typeof object === 'undefined'
}


/** 
 * checks if a callback is defined & call it if true
*/

function callbackify (fn, params) {
  if (isFunction(fn)) {
    return fn(params)
  }

  return false;
}