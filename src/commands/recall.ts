import { Arguments, Argv} from "yargs";
import { Houses } from "../house/houses";
import { IHouse } from "../house/interface";

export function recall(yargs: Argv) {
    // create a new yargs "command"
    yargs.command(
        
        // name the command with no spaces
        "recall",

        // describe the command so that the --help flag is helpful
        "Recalls a previously saved house using the name it was saved under",

        // define the parameters we need for our command
        {
            name: {
                type: "string",
                alias: "n",
                description: "Specifies the name of the house to be recalled"
            },

        },

        // define the function we want to run once the arguments are parsed
        function (args: Arguments<{name: string;}>) {
            const savedHouses = Houses.getAll();
            const houses:IHouse[] = [ ...savedHouses.values()];
            console.log(houses)
        }
    );
};
