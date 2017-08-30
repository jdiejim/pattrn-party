document.querySelector('.accordion').addEventListener('click', function(e) {
  // document.querySelectorAll('.card').forEach(e => {
  //   e.classList.remove('active');
  // });

  if (e.target.nodeName === 'BUTTON') {
    e.target.parentNode.classList.toggle('active');
  }
})
