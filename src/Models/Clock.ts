export default class Model {
  hours = 0
  minutes = 0
  seconds = 0

  constructor(callback) {
    // @original, @handler
    const proxy = new Proxy(this, {
      get(target, property) {
        return target[property]
      },
      set(target, property, value) {
        const oldValue = target[property]
        target[property] = value

        // Notify model changes
        if (value !== oldValue && callback) {
          callback(property, oldValue, value)
        }

        // Return true if successful. In strict mode, returning false will throw a TypeError exception.
        return true
      },
    })

    return proxy
  }
}
