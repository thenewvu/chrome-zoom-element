(() => {
  const DURATION = 500

  let zoomed = false
  function toggleZoom (element) {
    zoomed
      ? zoom.out()
      : zoom.to({ element })
    zoomed = !zoomed
  }

  let heldAt = 0

  document.body.addEventListener('mousedown', ev => {
    heldAt = Date.now()
  })

  document.body.addEventListener('mouseup', ev => {
    if (window.getSelection().toString()) return

    const heldDuration = Date.now() - heldAt
    if (heldDuration > DURATION) {
      ev.preventDefault()
      toggleZoom(ev.target)
    }
  })
})()
