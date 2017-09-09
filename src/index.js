/* global zoom */

(() => {
  const MIN_DURATION = 700
  let lastNow = null
  let lastPos = null
  let element = null

  const distance = (p1, p2) => Math.sqrt(
    Math.pow(Math.abs(p1.x - p2.x), 2) +
    Math.pow(Math.abs(p1.y - p2.y), 2)
  )

  document.body.addEventListener('mousedown', ev => {
    if (ev.button !== 0) return
    lastNow = Date.now()
    lastPos = { x: ev.screenX, y: ev.screenY }
    ev.target.classList.add('zoom-target')
    element = ev.target
  })

  document.body.addEventListener('mouseup', ev => {
    if (ev.button !== 0) return
    element.classList.remove('zoom-target')

    if (distance(lastPos, {x: ev.screenX, y: ev.screenY}) > 5) return
    if (window.getSelection().toString()) return
    const duration = Date.now() - lastNow
    if (duration > MIN_DURATION) {
      ev.preventDefault()
      zoom.to({ element })
      element = null
    }
  })
})()
