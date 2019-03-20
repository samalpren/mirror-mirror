let mainInput = document.createElement("input");
mainInput.id = "message";

let label = document.createElement("label");
label.innerHTML = "Enter text here: ";
document.body.appendChild(label);
label.appendChild(mainInput);

let container = document.createElement("div");
document.body.appendChild(container);

let mirrorOne = document.createElement("article");
mirrorOne.id = "mirrorOne";

let mirrorTwo = document.createElement("article");
mirrorTwo.id = "mirrorTwo";

container.appendChild(mirrorOne);
container.appendChild(mirrorTwo);

mainInput.addEventListener("keyup", function() {
  mirrorOne.textContent = mainInput.value;
  mirrorTwo.textContent = mainInput.value;
});



