let btnMsg = document.getElementById(`btn-msg`);
let btnGenerate = document.getElementById(`btn-generate`);
let tagShower = document.getElementById(`tag`);
let tagContent = tagShower.textContent;
let lenghtUl = document.querySelector("ul").children.length;

function showText () {
    alert (btnMsg.dataset.text);
}

function addRedColor () {
    btnMsg.classList.add("red_color");
}

function removeRedColor () {
    btnMsg.classList.remove("red_color");
}

function showTag (e) {
    tagShower.textContent = tagContent;
    tagShower.insertAdjacentText('beforeend', " " + e.target.tagName);
}

function generateItem () {
    let newLi = document.createElement(`li`);
    document.querySelector("ul").appendChild(newLi);
    document.querySelector("ul").children[lenghtUl].textContent = `Item ` + (lenghtUl + 1);
    lenghtUl++;
}

btnMsg.addEventListener(`click`, showText);
btnMsg.addEventListener(`mouseover`, addRedColor);
btnMsg.addEventListener(`mouseout`, removeRedColor);
document.addEventListener(`click`, showTag);
btnGenerate.addEventListener(`click`, generateItem);


//// 6 Dropdown menu

document.querySelector('.menu').addEventListener('click', function (e) {
    let isLi = e.target.parentElement.className === "dropdown-item";
    if (isLi) {
      let currentElement = e.target.nextElementSibling;
      currentElement.classList.toggle('d-none');
      let subm=document.getElementsByClassName('dropdown-menu');
      for (var i=0; i<subm.length; i++) {
          if (subm[i] != currentElement) {
          subm[i].classList.add('d-none');
          }
      }
    }
});
