const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const { v4: uuid } = require("uuid");

async function runC(code, input = "") {

    return new Promise((resolve) => {

        const id = uuid();

        const tempFolder = path.join(__dirname, "..", "temp", id);

        fs.mkdirSync(tempFolder, { recursive: true });

        fs.writeFileSync(
            path.join(tempFolder, "main.c"),
            code
        );

        const command =
            `docker run --rm -i -v "${tempFolder}:/app" -w /app gcc:latest bash -c "gcc main.c -o main && ./main"`;

        console.log(command);

        const child = exec(
            command,
            { timeout: 10000 },
            (err, stdout, stderr) => {

                fs.rmSync(tempFolder, {
                    recursive: true,
                    force: true
                });

                if (err) {
                    resolve({
                        success: false,
                        output: stderr || err.message
                    });
                    return;
                }

                resolve({
                    success: true,
                    output: stdout
                });

            }
        );

        if (input) {
            child.stdin.write(input);
        }

        child.stdin.end();

    });

}

module.exports = { runC };