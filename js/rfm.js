function isFuture(date) {
  return moment().isBefore(date)
}

function fancyDate(isoDate) {
  format = 'Do MMMM'
  if (isFuture(isoDate)) {
    format = 'dddd Do MMMM'
  }
  return moment(isoDate).format(format)
}
