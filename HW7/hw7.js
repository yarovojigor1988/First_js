/// 1 
let paragraf = document.querySelector("p");
console.log(paragraf.textContent);

/// 2

let someNode = document.querySelector("span");
let info = {};
function nodeInfo (someNode) {
    if(someNode.nodeType = 1){info.typeOfNode = "element node"};
    if(someNode.nodeType = 3){info.typeOfNode = "text node"};
    if(someNode.nodeType = 8){info.typeOfNode = "comment node"};
    info.nameOfNode = someNode.nodeName;
    if (someNode.hasChildNodes()) {
        info.numberOfChildren = someNode.children.length;
    } else {
        info.numberOfChildren = 0;
    }
    return info;
}

console.log(nodeInfo (someNode));

/// 3

let list = document.querySelector("ul");
let getTextFromUl = [];
for (i=0; i < list.children.length; i++) {
    getTextFromUl[i] = list.children[i].textContent;
}
console.log(getTextFromUl);


/// 4 

for (i=0; i < document.querySelector("p").childNodes.length; i++) {
    if (document.querySelector("p").childNodes[i].data) {document.querySelector("p").childNodes[i].data = "-text-"}
}
console.log(document.querySelector("p"));

/// 5
document.querySelector("ul").classList.add("list");

/// 6

let someNode = document.querySelector("ul");
while (someNode.nodeName != "A" && someNode.nextElementSibling != null) {
    someNode = someNode.nextElementSibling;
}
someNode.id = "link";

/// 7

for (i=0; i < document.querySelector("ul").children.length; i++) {
    if (i % 2 === 0 ) {
        document.querySelector("ul").children[i].classList.add("item")
    }
}

/// 8 

for (i=0; i < document.links.length; i++) {
    document.links[i].classList.add("custom-link");
}

/// 9 

let numberOfNeWLi = 5;
let oldLenghtUl = document.querySelector("ul").children.length;
for (i=0; i < numberOfNeWLi; i++) {
    let newLi = document.createElement(`li`);
    document.querySelector("ul").appendChild(newLi);
    document.querySelector("ul").children[oldLenghtUl + i].classList.add("new-item");
    document.querySelector("ul").children[oldLenghtUl + i].textContent = `item` + (oldLenghtUl + i + 1);
}


/// 10

for (i=0; i < document.links.length; i++) {
    if (document.links[i].closest(`li`) !== null) {
        document.links[i].insertAdjacentHTML('afterBegin', '<strong>Strong</strong>');
    }
}

/// 11

let newImg = document.createElement(`img`);
newImg.src = "https://via.placeholder.com/200x100/d4d4d4/fff";
newImg.alt = "Some New Image";
document.body.insertBefore(newImg, document.body.firstChild);

/// 12

let someList = document.querySelector("ul").children;
let lenght1 = someList.length;

for (i=0; i < lenght1; i++) {
    for (j=0; j < lenght1 - 1; j++) {
        if (someList[j].textContent < someList[j+1].textContent) {
            document.querySelector("ul").appendChild(someList[j]);
        }
    }
}