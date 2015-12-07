if (!Promise.prototype.spread) {
  Promise.prototype.spread = function (cb) {
    return this.then(function (arr) {
      return cb.apply(this, arr)
    })
  }
}

export * from './collection'
export * from './datastore'
export * from './decorators'
export * from './model'
export * from './validate'

export const version = {
  full: '<%= pkg.version %>',
  major: parseInt('<%= major %>', 10),
  minor: parseInt('<%= minor %>', 10),
  patch: parseInt('<%= patch %>', 10),
  alpha: '<%= alpha %>' !== 'false' ? '<%= alpha %>' : false,
  beta: '<%= beta %>' !== 'false' ? '<%= beta %>' : false
}
