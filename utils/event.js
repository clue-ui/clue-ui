/**
 * events
 * http://www.runoob.com/tags/ref-eventattributes.html
 */

const add = (element, event, handler) => {
  if (element && event && handler) {
    if (document.addEventListener) {
      element.addEventListener(event, handler, false)
    } else {
      element.attachEvent('on' + event, handler)
    }
  }
}

const remove = (element, event, handler) => {
  if (element && event && handler) {
    if (document.addEventListener) {
      element.removeEventListener(event, handler, false)
    } else {
      element.detachEvent('on' + event, handler)
    }
  }
}

export default {
  add,
  remove
}
