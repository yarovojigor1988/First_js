// function getNews (url, callback) {

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.setRequestHeader('X-Api-Key', 'f0f4ea7d99c942fd82c8948ae799292a');
//     xhr.send();
//     xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
// }

function getNews(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.setRequestHeader('X-Api-Key', 'f0f4ea7d99c942fd82c8948ae799292a');
      xhr.send();
      xhr.onload = () => resolve(JSON.parse(xhr.responseText));
      xhr.onerror = () => reject(console.log("ERROR"));
    });
  }