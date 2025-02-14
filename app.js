let history = [];

// Function to update history
function updateHistory(expression, result) {
    const historyList = document.getElementById("history-list");
    const listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.appendChild(listItem);

    // Store in an array and localStorage
    history.push(`${expression} = ${result}`);
    localStorage.setItem("calcHistory", JSON.stringify(history));
}

// Addition Button
document.getElementById("addBtn").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("num1").value) || 0;
    const num2 = parseFloat(document.getElementById("num2").value) || 0;
    const result = num1 + num2;

    document.getElementById("result").value = result;

    // Update history log
    updateHistory(`${num1} + ${num2}`, result);
});

// Clear Button
document.getElementById("clearBtn").addEventListener("click", function() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
});

// Exit Button
document.getElementById("exitBtn").addEventListener("click", function() {
    alert("Exit button clicked - You can close the window manually.");
});

// Load history from localStorage on page load
window.onload = function () {
    let storedHistory = JSON.parse(localStorage.getItem("calcHistory"));
    if (storedHistory) {
        history = storedHistory;
        storedHistory.forEach(entry => {
            let listItem = document.createElement("li");
            listItem.textContent = entry;
            document.getElementById("history-list").appendChild(listItem);
        });
    }
};
