let puzzleCheck = 0;

let checkList = [];

// Function to make an element draggable
function makeDraggable(elem, container, index) {
  // Set piece dimensions
  containerWidth =
    container.getBoundingClientRect().right -
    container.getBoundingClientRect().left;
  elem.style.width = containerWidth / 3 + "px";

  var isDragging = false;
  var originalX,
    originalY,
    mouseX,
    mouseY,
    currentX = 0,
    currentY = 0;

  function onMouseDown(e) {
    if (!checkList.includes(index)) {
      e.preventDefault();

      isDragging = true;
      mouseX = e.clientX || e.touches[0].clientX;
      mouseY = e.clientY || e.touches[0].clientY;

      // Get the current position of the element
      var rect = elem.getBoundingClientRect();

      // Calculate the offset of the mouse from the element's top-left corner
      var offsetX = mouseX - rect.left;
      var offsetY = mouseY - rect.top;

      // Set the original position for movement calculations
      originalX = rect.left - offsetX / 2;
      originalY = rect.top - offsetY / 2;

      // Initialize currentX and currentY so that the element doesn't jump on the first click
      currentX = originalX;
      currentY = originalY;

      // Apply the initial position to prevent any jump
      elem.style.left = originalX + "px";
      elem.style.top = originalY + "px";
    }
  }

  function onMouseMove(e) {
    if (!checkList.includes(index)) {
      e.preventDefault();

      if (!isDragging) return;
      var deltaX = (e.clientX || e.touches[0].clientX) - mouseX;
      var deltaY = (e.clientY || e.touches[0].clientY) - mouseY;
      currentX = originalX + deltaX;
      currentY = originalY + deltaY;

      // Move the element
      elem.style.left = currentX + "px";
      elem.style.top = currentY + "px";
    }
  }

  function onMouseUp() {
    if (!isDragging) return;
    isDragging = false;

    // Check if the element is within the bounds of the container
    checkPosition(elem, container, index, containerWidth / 3);

    console.log(currentX, currentY);
  }

  elem.addEventListener("mousedown", onMouseDown);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);

  // Adding touch event listeners
  elem.addEventListener("touchstart", onMouseDown);
  document.addEventListener("touchmove", onMouseMove, { passive: false }); // Using passive:false to prevent scrolling while dragging on mobile
  document.addEventListener("touchend", onMouseUp);
}

// Function to check if the draggable element is within the container bounds
function checkPosition(draggable, container, index, width) {
  var draggableRect = draggable.getBoundingClientRect();
  var containerRect = container.getBoundingClientRect();

  const row = Math.floor(index / 3);
  const column = index % 3;

  //console.log(row, column);
  if (
    draggableRect.top + 20 >= containerRect.top + row * width &&
    draggableRect.left + 20 >= containerRect.left + column * width &&
    draggableRect.right - 20 <= containerRect.right - (2 - column) * width &&
    draggableRect.bottom - 20 <= containerRect.bottom - (2 - row) * width
  ) {
    draggable.style.top = containerRect.top + row * width + "px";
    draggable.style.left = containerRect.left + column * width + "px";
    draggable.style.borderColor = "#74c769";
    puzzleCheck++;
    checkList.push(index);
  } else {
  }

  console.log(puzzleCheck);

  if (puzzleCheck === 9) {
    document.querySelectorAll(".piece").forEach((elem) => {
      elem.style.border = "#00FFFFFF solid 0px";
      document.getElementById("congrats").style.display = "block";
      document.getElementById("next-btn").style.display = "block";
    });
  }
}

const backgroundPositions = [
  { w: 0, h: 0 },
  { w: "50%", h: 0 },
  { w: "100%", h: 0 },
  { w: 0, h: "50%" },
  { w: "50%", h: "50%" },
  { w: "100%", h: "50%" },
  { w: 0, h: "100%" },
  { w: "50%", h: "100%" },
  { w: "100%", h: "100%" },
];

piecePositions = [
  { x: 5, y: 5 },
  { x: 5, y: 45 },
  { x: 10, y: 65 },
  { x: 75, y: 5 },
  { x: 50, y: 50 },
  { x: 70, y: 25 },
  { x: 10, y: 25 },
  { x: 75, y: 45 },
  { x: 70, y: 65 },
];

// Get the elements
var dropContainer = document.getElementById("container");
var draggable = document.querySelectorAll(".piece").forEach((elem, index) => {
  elem.style.backgroundPosition = `${backgroundPositions[index].w} ${backgroundPositions[index].h}`;
  elem.style.top = piecePositions[index].x + "%";
  elem.style.left = piecePositions[index].y + "%";
  makeDraggable(elem, dropContainer, index);
});

document.getElementById("next-btn").addEventListener("click", () => {
  window.location.href = "../inter2and3/chat.html";
});
