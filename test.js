window.addEventListener('mouseout', function(){
    const pullDownButton= document.getElementById("lists")
    console.log(pullDownButton)
})

window.addEventListener('click', function(){
    const pullDownButton= document.getElementById("lists")
    console.log(pullDownButton)
    pullDownButton.addEventListener('mouseover',function(){
        pullDownButton.setAttribute("style","background-color:green;")
    })
    pullDownButton.addEventListener('mouseout',function(){
        pullDownButton.removeAttribute("style","background-color:red;")
    })
})

