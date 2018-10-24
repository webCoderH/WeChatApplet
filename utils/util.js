var delay = 10
var time
const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function disable(seconds, total, callback) {
  if (total != '')
    delay = total
  delay--;
  if (delay == 0) {
    delay = 10
    clearTimeout(time)
    typeof callback == "function" && callback(false)
    console.log('清除了定时器')
  } else {
    console.log('重开了定时器计时' + delay)
    time = setTimeout(() => {
      this.disable(seconds, '', callback)
    }, seconds);
  }

}
module.exports = {
  formatTime: formatTime,
  disable: disable
}