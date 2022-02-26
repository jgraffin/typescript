// type alias
type Uid = number | string | undefined;
type Platform = "Android" | "Ios" | "Windows";

// union - usage when having two or more types
function logDetails(uid: Uid, item: string) {
  console.log(`a product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`an user with ${uid} has a name as ${user}`);
}

function renderPlatform(platform: Platform) {
  return platform;
}

renderPlatform("Windows");

logInfo(123, "Julio");
logInfo("123", "Julio");

logDetails(123, "shoes");
logDetails("123", "shoes");
