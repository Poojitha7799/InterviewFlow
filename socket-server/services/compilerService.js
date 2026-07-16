const compiler = require("../compiler/dockerCompiler");

class CompilerService{

    async execute(language,code,input){

        return await compiler.execute(

            language,

            code,

            input

        );

    }

}

module.exports=new CompilerService();