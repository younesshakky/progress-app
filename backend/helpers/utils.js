/**
 *  get only specific properties from an object
 * @param object source object
 * @param props specific props
 * @callback wraps wanted object
*/

exports.getProps = function (object, props, cb) {
  let cloneObj = {};

  for (prop in object) {
    props.forEach(key => {
      cloneObj[key] = object[key]
    })
  }

  cb(cloneObj)
}

