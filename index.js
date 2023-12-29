// Your code here
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
      moveDodgerLeft();
    } else if (event.key === 'ArrowRight') {
      moveDodgerRight();
    }
  });
  
  function moveDodgerLeft() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  function moveDodgerRight() {
    let dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left) || 0;
  
    if (left < 360) {
      dodger.style.left = `${left + 1}px`;
    }
  };

  