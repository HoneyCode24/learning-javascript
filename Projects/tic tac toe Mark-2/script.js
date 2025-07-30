let play_now = document.querySelector('#play_now');
play_now.addEventListener('click',  function () {
    window.location.href = "classic_mode.html";});

particlesJS("particles-js", {
  particles: {
    number: { value: 100 },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 3 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});