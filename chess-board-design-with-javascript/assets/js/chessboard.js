// const cornerValueArray = [8, 16, 24, 32, 40, 48, 56];
const value = [9, 17, 25, 33, 41, 49, 57];
let z = document.getElementById('main');
let y = document.createElement("ul");
z.appendChild(y);
let reverse = false;
for (let i = 1; i <= 64; i++) {
    let li = document.createElement("li");
    y.appendChild(li);
    if (value.indexOf(i) > -1) {
        reverse = !reverse;
    }
    if (reverse) {
        if (i % 2 == 0) {
            li.style.backgroundColor = '#e2c074';
        }
    } else {
        if (i % 2 != 0) {
            li.style.backgroundColor = '#e2c074';
        }
    }

}

