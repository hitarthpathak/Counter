let input = document.getElementById("input");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let clear = document.getElementById("clear");

// --------------------------------------------------------------------------------------------------

increase.addEventListener("click", () => {
    let inputvalue = parseInt(input.value);
    let newinputvalue = inputvalue + 1;
    input.value = newinputvalue;
})

// --------------------------------------------------------------------------------------------------

decrease.addEventListener("click", () => {
    let inputvalue = parseInt(input.value);
    let newinputvalue = inputvalue - 1;
    input.value = newinputvalue;
})

// --------------------------------------------------------------------------------------------------

clear.addEventListener("click", () => {
    input.value = 0;
})