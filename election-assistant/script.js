function addMessage(text, sender) {
    let chatbox = document.getElementById("chatbox");

    let message = document.createElement("div");
    message.classList.add("message", sender);
    message.innerText = text;

    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getResponse(input) {
    input = input.toLowerCase();

    if (input.includes("process")) {
        return "Election Process:\n1. Announcement\n2. Nomination\n3. Campaign\n4. Voting\n5. Counting\n6. Result";
    } 
    else if (input.includes("vote")) {
        return "How to Vote:\n1. Check voter ID\n2. Visit polling booth\n3. Verify identity\n4. Use EVM\n5. Confirm vote";
    } 
    else if (input.includes("eligibility")) {
        return "Eligibility:\n✔ Must be 18+\n✔ Must be citizen\n✔ Must have voter ID";
    } 
    else if (input.includes("evm")) {
        return "EVM (Electronic Voting Machine) is used to cast votes electronically.";
    } 
    else {
        return "Ask about election process, voting, eligibility, or EVM.";
    }
}

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let userText = inputField.value;

    if (userText.trim() === "") return;

    addMessage(userText, "user");

    let response = getResponse(userText);
    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);

    inputField.value = "";
}

function quickQuestion(type) {
    let question = "";

    if (type === "process") question = "election process";
    if (type === "vote") question = "how to vote";
    if (type === "eligibility") question = "eligibility";

    addMessage(question, "user");

    let response = getResponse(question);
    setTimeout(() => {
        addMessage(response, "bot");
    }, 500);
}
