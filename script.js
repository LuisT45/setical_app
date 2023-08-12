const graphs = document.querySelectorAll('svg path.circle')
const graphsText = document.querySelectorAll('.percentage')
let value = 90

graphs.forEach((graph) => {
    graph.style.strokeDasharray = `${value}, 100`
})

graphsText.forEach((text) => {
    text.innerHTML= `${value}%`
})