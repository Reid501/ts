var userInput;
var userName;
userInput = 5;
userInput = "test";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw {
        message: message,
        errorCode: code
    };
}
generateError("an error", 200);
