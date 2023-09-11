let n = 0
document.getElementById('cont').innerHTML = n

const b = document.getElementById('button')
b.addEventListener('click', function () {
    n += 1
    document.getElementById('cont').innerHTML = n
    console.log('click' + n);
})
const c = document.getElementById('buttonClear')
c.addEventListener('click', function () {
    n = 0
    document.getElementById('cont').innerHTML = n
})
b.addEventListener('', function () {
    n += 0
    document.getElementById('cont').innerHTML = n
})

const date = document.getElementById('buttonDate')
date.addEventListener('click', function () {
    document.getElementById('date').innerHTML = Date()
})
