function createCard(title, cName, views, monthsOld, duration, thumbnail){
    let viewStr 
    
    if (views<1000000){
        viewStr = views/1000 + "K"
    }
    else if(views>1000000){
        viewStr = views/1000000 + "M"
    }
    else{
        viewStr = views/1000 + "K"
    }


    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="thumbnail">
                <div class="capsules">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} Months ago</p>
            </div>
        </div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 66560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")