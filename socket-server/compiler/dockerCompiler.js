const { runJava } = require("./javaRunner");
const { runPython } = require("./pythonRunner");
const { runC } = require("./cRunner");
const { runCpp } = require("./cppRunner");

async function execute(language, code, input) {

    switch (language) {

        case "java":
            return await runJava(code, input);

        case "python":
            return await runPython(code, input);

        case "c":
            return await runC(code, input);

        case "cpp":
            return await runCpp(code, input);

        default:
            return {
                success: false,
                output: "Language not supported."
            };
    }

}

module.exports = { execute };