let onClick = document.getElementById("meng").addEventListener("click", showTextOnClick);

let onHover = document.getElementById("frazz").addEventListener("mouseover", hideTextAfterHover);

let outHover = document.getElementById("frazz").addEventListener("mouseout", showTextOnHover);

function showTextOnClick(){

  let text1 = document.getElementById("text1");

  if (text1.style.display === "none") {
    text1.style.display = "block";
  } else {
    text1.style.display = "none";
  };
};

function showTextOnHover(){

  let text2 = document.getElementById("text2");

  if (text2.style.display === "none") {
    text2.style.display = "block";
  } else {
    text2.style.display = "none";
  }
}

function hideTextAfterHover() {

  let text2 = document.getElementById("text2");
    if (text2.style.display === "block") {
    text2.style.display = "none";
  } else {
    text2.style.display = "block";
  }
}
