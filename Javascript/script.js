const element = document.getElementById('button')
element.addEventListener('click', function() {
    if (document.getElementById('text').innerHTML == '') {
        document.getElementById('text').innerHTML = 'CIAOOO'
    } else {
        document.getElementById('text').innerHTML = ''
    }
    console.log('button clicked')
})