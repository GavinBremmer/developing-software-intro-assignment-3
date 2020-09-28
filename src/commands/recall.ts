import { Arguments, Argv } from "yargs";
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
                description: "Specifies the name of the house to be recalled",
            },
        },

        // define the function we want to run once the arguments are parsed
        function (args: Arguments<{ name: string }>) {
            //load wall supplies calculator, the way the wall calculator is setup prohibits this from being imported as a function and I was unable to find a workaround
            Houses.setWallSuppliesCalculator((inches: number) => {
                const quotient = (inches - 7) / 192;
                const Section16 = Math.floor((inches - 7) / 192);

                const remainderwall =
                    (quotient - Section16) * 192 - Section16 * 3.5;

                const remainderwallstuds =
                    Math.floor((remainderwall - 3) / 16) + 2;

                const remainderwallplates = Math.ceil(remainderwall / 96) * 3;

                const studs = remainderwallstuds + Section16 * 13;

                const plates = remainderwallplates + Section16 * 6;

                let posts = Section16;

                if (inches < 240) {
                    posts = 0;
                }

                return {
                    posts,
                    studs,
                    plates,
                };
            });
            //load saved houses, use if statement to provide feedback for empty searches, else convert the house to a string and use find to locate the house by name
            //then output total materials
            const savedHouses = Houses.getAll();
            if (!savedHouses.get(args.name)) {
                console.log("A saved house by that name does not exist");
            } else {
                const houses: IHouse[] = [...savedHouses.values()];
                const recallHouse = houses.find(
                    (element: any) => element.name === args.name
                );
                console.log(
                    "Totals for recalled house with name",
                    args.name,
                    "=  Studs-",
                    recallHouse.studs,
                    " Plates-",
                    recallHouse.plates,
                    " Posts-",
                    recallHouse.posts
                );
            }
        }
    );
}
