let count = 0;
const counterDisplay = document.getElementById("counter");

function updateCounter() {
  counterDisplay.textContent = count;
}

document.getElementById("btnIncrease").addEventListener("click", function() {
  count++;
  updateCounter();
});

document.getElementById("btnDecrease").addEventListener("click", function() {
  if (count > 0) { 
    count--;
    updateCounter();
  }
});

document.getElementById("btnReset").addEventListener("click", function() {
  count = 0;
  updateCounter();
});



const textInput = document.getElementById("textInput");
const textPreview = document.getElementById("preview");
const charCount = document.getElementById("char");
const btnClear = document.getElementById("btnClear");

textInput.addEventListener("input", function() {
  const text = textInput.value;
  
  if (text.trim() === "") {
    textPreview.textContent = "Your text will be here";
  } else {
    textPreview.textContent = text;
  }
  
  charCount.textContent = text.length;
});

btnClear.addEventListener("click", function() {
  textInput.value = "";
  textPreview.textContent = "Your text will be here";
  charCount.textContent = "0";
  textInput.focus();
});



const biasSelect = document.getElementById("biasSelect");
const biasImage = document.getElementById("biasImage");
const imageCaption = document.getElementById("imageCaption");

biasSelect.addEventListener("change", function() {
  const selected = biasSelect.value;

  if (selected === "rose") {
    biasImage.src = "images.jpeg";
    biasImage.alt = "Rose";
    imageCaption.textContent = "An angel-voice Rose";
  } else if (selected === "jenny") {
    biasImage.src = "jenny.jpeg";
    biasImage.alt = "jenny";
    imageCaption.textContent = "A charismatic Jenny";
  } else if (selected === "lisa") {
    biasImage.src = "lisa.jpg";
    biasImage.alt = "lisa";
    imageCaption.textContent = "A wonderful Lisa";
  } else if (selected === "jisoo") {
    biasImage.src = "jisoo.jpeg";
    biasImage.alt = "jisoo";
    imageCaption.textContent = "A beautiful Jisoo";
  }
});



const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function(event) {
  keyStatus.textContent = "You pressed: " + event.key;

  if (event.key === "Enter") {
    event.preventDefault();
    keyResult.textContent = keyboardInput.value;
  }
  if (event.key === "Escape") {
    keyboardInput.value = "";
    keyResult.textContent = "";
    keyStatus.textContent = "Cleared with Escape";
  }
});


const focusCard = document.getElementById("focusCard");
const hoverInstruction = document.getElementById("hoverInstruction");
const originalText = hoverInstruction.textContent;

focusCard.addEventListener("mouseenter", function() {
  focusCard.classList.add("highlight");
  hoverInstruction.textContent = "You are hovering over the card!";
});

focusCard.addEventListener("mouseleave", function() {
  focusCard.classList.remove("highlight");
  hoverInstruction.textContent = originalText;
});


focusCard.addEventListener("focus", function() {
  focusCard.classList.add("highlight");
  hoverInstruction.textContent = "You focused on the card using the keyboard!";
});

focusCard.addEventListener("blur", function() {
  focusCard.classList.remove("highlight");
  hoverInstruction.textContent = originalText;
});