function isFuture(date) {
  return moment().isBefore(date + 1)
}

function fancyDate(isoDate) {
  format = 'Do MMMM YYYY'
  if (isFuture(isoDate)) {
    format = 'dddd Do MMMM YYYY'
  }
  return moment(isoDate).format(format)
}

function opacify(element) {
  start = height - initialTop
  pos = height - $(element)[0].getBoundingClientRect().bottom
  // opacity = Math.sin((pos / start) * (Math.PI / 2))
  opacity = pos / start

  if (1 > opacity > 0) {
    element.css('opacity', opacity)
  }
}

function fadeOut(element) {
  $(element).each( function( index, item ) {
    opacify($(this))
  })
}
