let form = document.querySelector(".form");
let ism = document.querySelector("#ism");
if (localStorage.getItem("ism") !== null) {
    ism.value = localStorage.getItem("ism");
}
let familiya = document.querySelector("#familiya");
if (localStorage.getItem("familiya") !== null) {
    familiya.value = localStorage.getItem("familiya");
}
let yosh = document.querySelector("#yosh");
if (localStorage.getItem("yosh") !== null) {
    yosh.value = localStorage.getItem("yosh");
}

form.addEventListener("submit", (e) => {
    let input1 = document.querySelector('#ism')
    e.preventDefault();
    if (input1.value.length > 0) {
        input1.classList = "green"
        console.log(`Sizning Ismingiz:${input1.value}`);
       } else {
        input1.classList = 'red'
       }
       let input2 = document.querySelector('#familiya')
    if (input2.value.length > 0) {
        input2.classList = "green"
        console.log(`Sizning familiyangiz:${input2.value}`);
       } else {
        input2.classList = 'red'
       }
       let input3 = document.querySelector('#yosh')
    if (input3.value.length > 0) {
        input3.classList = "green"
        console.log(`Sizning yoshingiz:${input3.value}`);
       } else {
        input3.classList = 'red'
       }

    
    let ism = e.target.ism.value;
    let familiya = e.target.familiya.value;
    let yosh = e.target.yosh.value;
    localStorage.setItem("ism", ism)
    localStorage.setItem("familiya", familiya)
    localStorage.setItem("yosh", yosh
    )
});

document.querySelector(".btn-delete").addEventListener("click", () => {
    localStorage.clear();
    ism.value = "";
    familiya.value = "";
    yosh.value = "";
  });



