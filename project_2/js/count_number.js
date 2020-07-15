function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    const startTime = performance.now()
    function updateNumber(currentTime) {
      const elapsedTime = currentTime - startTime
      if (elapsedTime > duration) {
        callback(finalNumber)
      } else {
        const rate = elapsedTime / duration
        const currentNumber = Math.round(rate * finalNumber)
        callback(currentNumber)
        requestAnimationFrame(updateNumber)
      }
    }
    requestAnimationFrame(updateNumber)
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    animateNumber(67,3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('number1').innerText = formattedNumber
    })
    
    animateNumber(212, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('number2').innerText = formattedNumber
    })
    
    animateNumber(1000000, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('number3).innerText = formattedNumber
    })
    animateNumber(100, 3000, 0, function (number) {
      const formattedNumber = number.toLocaleString()
      document.getElementById('number4').innerText = formattedNumber
    })
  })
  
  
  Resources