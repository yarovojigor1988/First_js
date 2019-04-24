const form = document.forms['addTodoForm'];



form.addEventListener('submit', function (e) {
    e.preventDefault();
    newsDel();
    console.log(title.value);
    let url = `https://newsapi.org/v2/top-headlines?q=${title.value}`;
    if (getCountryValue()) {
        url = url + `&country=` + getCountryValue();
    }
    if (getCategoryValue()) {
        url = url + `&category=` + getCategoryValue();
    } 
    console.log(url);
    // if (!title.value && !getCategoryValue() && !getCountryValue()) return alertAddTodoToView();

    getNews(url)
        .then(function (value) {
            console.log(value);
            return value.articles;
        }).then((param) => newsAdd(param)).then(newsAddToWiev).catch(alertAddTodoToView)

    // form.reset();
});
// в then пишем имя функции без скобок (не вызываем ее)
// function (response) {
//     console.log(response);
//     newsAddToWiev( newsAdd(response.articles));
// }


function alertAddTodoToView() {
    funcDel ();
    const alertNew = alertAdd();
    let alertMassege = document.querySelector('.col-6');
    alertMassege.insertAdjacentHTML('afterbegin', alertNew);
    setTimeout(funcDel, 3000);

}


function funcDel () {
    if (document.querySelector(".alert") != null) {
        const alertMassege = document.querySelector(".alert");
        alertMassege.parentElement.removeChild(alertMassege);
    }
}

function alertAdd() {
    return `
        <div class="alert alert-danger">
        Введите Запрос или выберите страну или категорию!
        </div>
        `;
    }




function newsAdd(articles) {
    let addLi= "";
    for (i=0; i<articles.length; i++) {
        addLi += `<li>${articles[i].title}</li>`;
        console.log(12);
    }
    let addUl = `<ul class="newsList">` + addLi + `</ul>`;
    return addUl;
}

function newsAddToWiev (callback){
    form.insertAdjacentHTML('afterend', callback);
}

function newsDel () {
    if (document.querySelector(".newsList") != null) {
        const newsList = document.querySelector(".newsList");
        newsList.parentElement.removeChild(newsList);
    }
}

function getCountryValue() {
    let select = document.getElementById("selctCountry");
    let value;
    if (!!select.value) {value=select.value};
    return value;
}

function getCategoryValue() {
    let select = document.getElementById("selctCategory");
    let value;
    if (!!select.value) {value=select.value};
    return value;
}
