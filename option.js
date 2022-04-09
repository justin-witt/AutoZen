let submit_button = document.getElementById("submit_button");
let input_box = document.getElementById("seconds_input");

function save_value() {
    if (input_box.value >= 5 && input_box.value <= 900) {
        chrome.storage.local.set({"runtime_seconds":input_box.value});
    } else {
        window.alert("ERROR: Please select a value between 5 and 900 seconds.");
    }
    input_box.value="";
};

submit_button.addEventListener("click", save_value);
