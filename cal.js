const multiplication = document["multiply"]
const addItUp = document["addition"]
const subtract = document["subtraction"]

multiplication.addEventListener("submit", function (event) {
    event.preventDefault()

    const newMult = form.mult1.value
    const newMult2 = form.mult2.value

    form.mult1.value = ''
    form.mult2.value = ''

    const next = document.createElement('h1')
    next.textContent = newMult * newMult2
    document.getElementsByTagName("body")[0].append(next)
})
addItUp.addEventListener("submit", function (event) {
    event.preventDefault()

    const newAdd = form.add1.value
    const newAdd2 = form.add2.value

    form.add1.value = ''
    form.add2.value = ''

    const nextAdd = document.createElement('h1')
    nextAdd.textContent = newAdd + newAdd2
    document.getElementsByTagName("body")[0].append(nextAdd)
})
subtract.addEventListener("submit", function (event) {
    event.preventDefault()

    const newSub = form.sub.value
    const newSub2 = form.sub2.value

    form.sub.value = ''
    form.sub2.value = ''

    const nextSub = document.createElement('h1')
    nextSub.textContent = newSub - newSub2
    document.getElementsByTagName("body")[0].append(nextSub)
})
