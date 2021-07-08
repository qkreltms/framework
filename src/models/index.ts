// TODO: 프로퍼티, 프로퍼티 타입 설정가능하도록
export default class Model {
  constructor(callback: (property: any, oldValue: any, value: any) => void) {
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
