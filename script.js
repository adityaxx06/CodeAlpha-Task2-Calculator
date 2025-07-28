let button = document.querySelectorAll("button");
let display = document.querySelector(".display");


button.forEach(btn => {
    btn.addEventListener("click", function(e){
        // console.log(btn.textContent);

        let input = btn.textContent;
        
        if (input == "AC"){
            display.value = "";
        }
        else if (input === "DEL"){
            display.value = display.value.slice(0,-1);
        }
        else if (input === "="){
            try {
                display.value = eval(display.value);
            } 
            catch {
                display.value = "Error";
            } 
        }
        else{
            display.value += input;
        }
    });
});

// Keyboard key Support
document.addEventListener("keydown", function (e) {
    let key = e.key;

    if (key === "Enter") {
        try {
            display.value = eval(display.value);
        } 
        catch {
            display.value = "Error";
        }
    } 
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    } 
    else if (key === "Escape") {
        display.value = "";
    } 
    else if ("0123456789+-*/.%".includes(key)) {
        display.value += key;
    }
});