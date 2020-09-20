setInterval(() => {
    let succArr = document.querySelectorAll('.label-success.problem-label');
    for (let i of succArr) i.innerText = "맞았다"
    let failArr = document.querySelectorAll('.label-danger.problem-label');
    for (let i of failArr) i.innerText = "너는 틀렸다"
}, 1000)
