import {throttle} from 'throttle-debounce'

let draggables

const resizeAll = throttle(30, false, () => {
  for (const draggable of draggables) {
    draggable.resize()
  }
})

export function initDraggables() {
  if (draggables) {
    removeDraggables(draggables)
  }

  const attr = 'data-draggable'

  draggables = []
  for (const el of document.querySelectorAll(`[${attr}]`)) {
    const index = draggables.findIndex(d => d.source === el)
    if (index > -1) {
      // console.warn('[draggable] already registered:', el, '@', index)
      continue
    } else {
      // console.warn('[draggable] add:', el)
    }
    draggables.push(new Draggable(el))
  }

  if (draggables.length) {
    window.addEventListener('resize', resizeAll)
    global.DRAGGABLES = draggables
  }
}

export function removeDraggables(existing) {
  while (existing.length) {
    existing.shift().remove()
  }
  window.removeEventListener('resize', resizeAll)
}

export class Draggable {
  constructor(el) {
    this.source = el
    this.target = cloneAndIsolate(el)

    const {target} = this
    target.style.setProperty('cursor', 'pointer')
    target.style.setProperty('position', 'absolute')
    document.body.appendChild(target)

    this.position = {x: 0, y: 0}
    this.resize()

    this.mouseMove = this.mouseMove.bind(this)
    this.mouseDown = downEvent => {
      // prevent text selection
      downEvent.preventDefault()
      this.dragging = true
      document.addEventListener('mousemove', this.mouseMove)
      window.addEventListener('mouseup', () => {
        this.dragging = false
        document.removeEventListener('mousemove', this.mouseMove)
      })
    }
    target.addEventListener('mousedown', this.mouseDown)
  }

  mouseMove(e) {
    const {position, source, target} = this
    position.x += e.movementX
    position.y += e.movementY
    const topLeft = globalToLocal(position, source)

    // add the relative offset of the source to its <svg> element
    // ...why? ¯\_(ツ)_/¯ I have no idea!
    const offset = getRelativeOffset(source)
    topLeft.x += offset.x
    topLeft.y += offset.y

    source.setAttribute('transform', `translate(${[topLeft.x, topLeft.y]})`)
    target.style.setProperty('left', px(position.x))
    target.style.setProperty('top', px(position.y))
  }

  resize() {
    const {position, source, target} = this
    source.removeAttribute('transform')
    const rect = source.getBoundingClientRect()
    position.x = rect.x + window.scrollX
    position.y = rect.y + window.scrollY
    target.style.setProperty('left', px(position.x))
    target.style.setProperty('top', px(position.y))
    target.style.setProperty('width', px(rect.width))
    target.style.setProperty('height', px(rect.height))
  }

  remove() {
    this.target.remove()
    this.target.removeEventListener('mousedown', this.mouseDown)
  }
}

function globalToLocal(global, context) {
  const owner = getOwner(context)
  const ctm = owner.getScreenCTM()
  const local = owner.createSVGPoint()
  local.x = global.x
  local.y = global.y
  return local.matrixTransform(ctm.inverse())
}

function cloneAndIsolate(el) {
  const rect = el.getBoundingClientRect()
  const owner = getOwner(el)

  const topLeft = globalToLocal({x: rect.left, y: rect.top}, el)
  const bottomRight = globalToLocal({x: rect.right, y: rect.bottom}, el)

  const viewBox = [topLeft.x, topLeft.y, bottomRight.x - topLeft.x, bottomRight.y - topLeft.y]

  // cloning without (true) does a shallow clone: node + attributes,
  // no children
  const outer = owner.cloneNode()
  outer.removeAttribute('class')
  outer.setAttribute('width', rect.width)
  // eslint-disable-next-line github/get-attribute
  outer.setAttribute('viewBox', viewBox.join(' '))
  outer.appendChild(el.cloneNode(true))
  return outer
}

function getOwner(el) {
  return el.matches('svg') ? el : el.ownerSVGElement
}

function getRelativeOffset(el) {
  const rect = el.getBoundingClientRect()
  const ownerRect = getOwner(el).getBoundingClientRect()
  return {
    x: rect.x - ownerRect.x,
    y: rect.y - ownerRect.y
  }
}

function px(n) {
  return `${n}px`
}
