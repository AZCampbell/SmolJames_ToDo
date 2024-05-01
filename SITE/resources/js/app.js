// Assign body element to variable bodyEl
const bodyEl = document.querySelector("body");

// Add event listener to body element that triggers on mouse move
bodyEl.addEventListener("mousemove", (event) => {
  // Get x and y position of mouse
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  //   Create new span element at mouse position
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  //   Create random size for span as size variable
  const size = Math.random() * 100;
  //  Set width and height of span using the random size
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  //   Append newly created span to body element
  bodyEl.appendChild(spanEl);
  //   Remove span after 3 seconds
  setTimeout(() => bodyEl.removeChild(spanEl), 3000);
});
