const link = document.querySelectorAll('.copyright')

setTimeout(() => {
    link.forEach(link => {
        link.style.color = 'red'
    })
}, 3000)
link.forEach(link => {
    link.style.fontWeight = 'bold'
})