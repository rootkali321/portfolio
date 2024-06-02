// Create a container div
const container = document.createElement("div");
container.className = "example-container";

// Create a div that scales on hover and tap
const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "blue"; // You can customize the color

// Add event listeners for hover and tap
box.addEventListener("mouseover", () => {
  box.style.transform = "scale(1.2)";
});

box.addEventListener("mouseout", () => {
  box.style.transform = "scale(1)";
});

box.addEventListener("touchstart", () => {
  box.style.transform = "scale(0.8)";
});

box.addEventListener("touchend", () => {
  box.style.transform = "scale(1)";
});

// Append the box to the container
container.appendChild(box);

// Append the container to the root element (e.g., <body>)
document.getElementById("root").appendChild(container);
