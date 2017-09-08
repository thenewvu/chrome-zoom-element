/* global zoom */

(() => {
  const MIN_DURATION = 700
  let downAt = 0
  let element = null

  document.body.addEventListener('mousedown', ev => {
    downAt = Date.now()
    ev.target.classList.add('zoom-target')
    element = ev.target
  })

  document.body.addEventListener('mouseup', ev => {
    if (window.getSelection().toString()) return

    element.classList.remove('zoom-target')
    const duration = Date.now() - downAt
    if (duration > MIN_DURATION) {
      ev.preventDefault()
      zoom.to({ element })
      element = null
    }
  })
})()
