/***********************************************************
  hasPaths
------------------------------------------------------------
  like _.has, but checks a list of paths
***********************************************************/

const _ = require ('lodash/fp')

/***************************************
  MAIN
***************************************/

const hasPaths = (paths) => /* (collection) => */ (
  _.allPass (
    _.map (_.has) (paths)
  ) /* (collection) */
)

/**************************************/

module.exports = hasPaths
