import { Arguments, Argv} from "yargs";
import { Houses } from "../house/houses";
import { houseCalculator } from "../wallCalculator";

export function calcWoodNeeded(yargs: Argv) {
    // create a new yargs "command"
    yargs.command(
        
        // name the command with no spaces
        "calc-wood-needed",

        // describe the command so that the --help flag is helpful
        "Calculate the materials required to frame a house for Gerald",

        // define the parameters we need for our command
        {
            width: {
                type: "number",
                alias: "w",
                description: "The width of the house",
            },

            length: {
                type: "number",
                alias: "l",
                description: "The length of the house",
            },

            inches: {
                type: "boolean",
                alias: "i",
                description: "Specifies that inches are being used as the unit of measure"
            },
            
            feet: {
                type: "boolean",
                alias: "f",
                description: "Specifies that feet are being used as the unit of measure"
            },

            name: {
                type: "string",
                alias: "n",
                description: "Specifies the name that this house will be stored under"
            },

        },

        // define the function we want to run once the arguments are parsed
        function (
            args: Arguments<{
                width: number;
                length: number;
                inches: boolean;
                feet: boolean;
                name: string;
                w: number;
                l: number;
                i: boolean;
                f: boolean;
                n: string
            }>
        ) {
            let w = args.width;
            let l = args.length;
            let n = args.name;

            if(args.feet){
                w = w * 12;
                l = l * 12;
            }

            houseCalculator(
                w,
                l,
                n
            );

        }
    );
};
