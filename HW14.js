/// 1

function promiseCreator(time, string) {
    return new Promise ((resolve, reject) => {
        setTimeout( function (){ resolve (string)}, time)
    });
}
const prom = promiseCreator(500, 'Ok!');
prom.then(console.log);

