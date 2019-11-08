(function() {
  const canvas = document.getElementById("galaxy");

  window.addEventListener("resize", resizeCanvas, false);
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		
		var cs = 0
		if(window.innerWidth >= 1920){
			cs = 500; 
		}

		else {
			cs = (100 * window.innerWidth)/1920;
			cs = Math.floor(cs) * 5;
		}

    create(cs);
  }
  resizeCanvas();
})();

function create(countstars) {
  const canvas = document.getElementById("galaxy");

  var stars = countstars;

  for (let i = 0; i < stars; i++) {
    const size = getRandomSize();
    const color = getRandomColor();
    const { x, y } = getRandomLocation(0, Math.max(canvas.width, canvas.height));
    drawStar(x, y, size, color);
  }
}

function getRandomLocation(min, max) {
  const multiplier = max - min + min;
  return { x: Math.random() * multiplier, y: Math.random() * multiplier };
}

function drawStar(x, y, size, color) {
  const canvas = document.getElementById("galaxy");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.arc(x, y, size/3, 0, 2 * Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
}

function getRandomColor() {
  const colors = ["rgba(129, 129, 129, 0.4)", "rgba(254, 254, 254, 0.4)", "rgba(249, 249, 249, 0.4)", "rgba(255, 255, 242, 0.4)"];
  return colors[parseInt(Math.random() * 4)];
}

function getRandomSize() {
  return Math.ceil(Math.random() * 3);
}
