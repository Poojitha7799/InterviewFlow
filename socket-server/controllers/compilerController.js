const compilerService = require("../services/compilerService");

class CompilerController {

    async run(req, res) {

        try {

            const { language, code, input } = req.body;

            const result = await compilerService.execute(
                language,
                code,
                input
            );

            res.json({
                success: result.success,
                output: result.output
            });

        } catch (err) {

            console.error(err);

            res.status(500).json({
                success: false,
                output: err.message
            });

        }

    }

}

module.exports = new CompilerController();