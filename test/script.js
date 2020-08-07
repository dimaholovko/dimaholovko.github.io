s = [0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0,
     0,0,0,0,0,0,0,0];

function a(i) {
    if(document.getElementsByClassName('b')[i].style.backgroundColor === "white"){
        document.getElementsByClassName('b')[i].style.setProperty("background-color",'black');
        s[i] = 1;
    }
    else{
        document.getElementsByClassName('b')[i].style.setProperty("background-color",'white');
        s[i] = 0;
    }
}

function p() {
    let r = '[';
    for(let i = 0; i < s.length; i++){
        r+=s[i]
        if(i !== 63){r+=','}
    }
    r+="]";
    document.getElementById("w").innerHTML = r;
}
