const localStorageHelper = {
  localStorage: window.localStorage,
  getObject (name) {
    return JSON.parse(this.localStorage.getItem(name))
  },
  hasObject (name) {
    return (this.localStorage.getItem(name) !== null)
  },
  saveObject (name, object) {
    const jsonString = JSON.stringify(object)
    this.localStorage.setItem(name, jsonString)
  },
}

export default localStorageHelper
