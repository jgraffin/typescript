"use strict";
// union - usage when having two or more types
function logDetails(uid, item) {
    console.log(`a product with ${uid} has a title as ${item}`);
}
function logInfo(uid, user) {
    console.log(`an user with ${uid} has a name as ${user}`);
}
function renderPlatform(platform) {
    return platform;
}
renderPlatform("Windows");
logInfo(123, "Julio");
logInfo("123", "Julio");
logDetails(123, "shoes");
logDetails("123", "shoes");
