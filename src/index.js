/* global zoom */

(() => {
  const DURATION = 700
  let heldAt = 0

  document.body.addEventListener('mousedown', ev => {
    heldAt = Date.now()
    ev.target.classList.add('zoom-target')
  })

  document.body.addEventListener('mouseup', ev => {
    if (window.getSelection().toString()) return

    ev.target.classList.remove('zoom-target')
    const heldDuration = Date.now() - heldAt
    if (heldDuration > DURATION) {
      ev.preventDefault()
      zoom.to({ element: ev.target })
    }
  })
})()
