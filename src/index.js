function test() {
  if (process.argv.length < 3) {
    throw new Error("No command provided");
  }

  if (process.argv[2] === "test") {
    console.log("test command working");
  } else {
    console.log("command not found");
  }
}

module.exports = test;
