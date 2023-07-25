async function welcomeMsg(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let welcomeMsg = document.getElementById("welcome")
            resolve(welcomeMsg.innerHTML = "Welcome Sir")
        }, 2000)
    })
}

let starting1 = document.getElementById("starting1")
async function startingMsg1(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            resolve(starting1.innerHTML = "initializing the hacking process")
        }, 1500)
    })
}

async function startingMsg2(){
    return new Promise(function(resolve , reject){
        let dots = setInterval(function(){
            starting1.innerHTML += "."
        }, 50)
    
        setTimeout(function(){
            clearInterval(dots)
            let starting2 = document.getElementById("starting2")
            resolve(starting2.innerHTML = "<br>initialization done, ready to hack")
        }, 2000)
    })
}

async function askID(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let friendID = document.getElementById("friendID")
            resolve(friendID.innerHTML = "specify target -> ")
        }, 1000)
    })
}

async function inputID(){
    return new Promise(function(resolve , reject){
        let friendID = document.getElementById("friendID")
        let input = document.createElement("input")
        input.autofocus = true
        input.style.width = 100
        friendID.after(input)
        resolve(1)
    })
}

async function search(){
    return new Promise(function(resolve , reject){
        let searchingID = document.getElementById("searchingID")
        resolve(searchingID.innerHTML = "searching for the username")
    })
}

async function found(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let foundID = document.getElementById("foundID")
            resolve(foundID.innerHTML = "target found")
        }, 2000)
    })
}

async function logs(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let logFiles = document.getElementById("logFiles")
            resolve(logFiles.innerHTML = "log files generated")
        }, 2000)
    })
}

async function deviceInfo(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let deviceInfo = document.getElementById("deviceInfo")
            resolve(deviceInfo.innerHTML = "getting device info")
        }, 1000)
    })
}

async function hacked(){
    return new Promise(function(resolve , reject){
        setTimeout(function(){
            let done = document.getElementById("done")
            done.style.display = "block"
            resolve(done.innerHTML = "Username Hacked !!")
        }, 2000)
    })
}

async function clickEnter(){
    return new Promise(function(resolve , reject){
        document.addEventListener('keydown', function(event) {
        if (event.code == 'Enter') {
            resolve(search())
        }
        });
    })
}

async function run(){
    let p1 = await welcomeMsg()
    let p2 = await startingMsg1()
    let p3 = await startingMsg2()
    let p4 = await askID()
    let p5 = await inputID()
    let p6 = await clickEnter()
    let p7 = await search()
    let p8 = await found()
    let p9 = await logs()
    let p10 = await deviceInfo()
    let p11 = await hacked()
}

run()