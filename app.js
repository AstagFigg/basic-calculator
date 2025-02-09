document.getElementById("addBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    document.getElementById("result").value = num1 + num2;
});

document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
});

document.getElementById("exitBtn").addEventListener("click", function() {
    alert("Exit button clicked - You can close the window manually.");
});
