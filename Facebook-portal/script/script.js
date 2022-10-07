function c() {
    var a = document.getElementById("box1").value;
    var b = document.getElementById("box2").value;
    var aa = document.getElementById("box1");
    var bb = document.getElementById("box2");
    var s1 = " vikrant";
    var s2 = " 123";
    let l1 = s1.localeCompare(a);
    let l2 = s2.localeCompare(b);
    let l = a.length;
    let ll = b.length;
    if (l == 29) l = 1;
    if (ll == 8) ll = 1;
    if (l == 1 || ll == 1) {
        aa.style.border = "2px solid red";
        bb.style.border = "2px solid red";
        alert("Empty fields")
    }
    if (l1 == 0 & l2 == 0) {
        window.location.href = "https://github.com/vikrant886";
    } else if (l != 1 && ll != 1) {
        window.location.href = "second.html";
    }
}

function cc() {
    var a = document.getElementById("box1");
    a.value = " ";
    a.style.border = "1px solid lightgray";
}

function ccc() {
    var a = document.getElementById("box2");
    a.value = " ";
    a.style.border = "1px solid lightgray";
}

document.addEventListener('keydown', (event) => {
    if (event.key == "Enter") {
        c();
    }
}, false);