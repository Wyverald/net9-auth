
// Creates a new subset that is a subset of the given object.
exports.subset = function (src, attrs) {
  var newObj = {};
  attrs.forEach(function (attr) {
    newObj[attr] = src[attr];
  });
  return newObj;
};

// Merges an object into a Mongoose model instance.
exports.merge = function (house, guest) {
  house.schema.eachPath(function (path) {
    // avoid overwrite the _id and undefined properties
    if (path != '_id' && (typeof guest[path] != 'undefined')) {
      house.set(path, guest[path]);
    }
  });
  return house;
};

