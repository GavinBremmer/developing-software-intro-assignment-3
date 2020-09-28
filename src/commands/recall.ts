import { Arguments, Argv} from "yargs";
import { Houses } from "../house/houses";
import { IHouse } from "../house/interface";
import {houseCalculator} from "../wallCalculator";

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
            Houses.setWallSuppliesCalculator(( inches: number) => {
            
                let quotient = (inches-7)/192
                let Section16 = Math.floor((inches-7)/192)
                
                let remainderwall = ((quotient-Section16)*192)-(Section16*3.5)
                
                let remainderwallstuds = Math.floor((remainderwall-10)/16)+2
                
                let remainderwallplates = Math.ceil((remainderwall-7)/96)*3
                
                let studs = remainderwallstuds + (Section16*13)
                
                let plates= remainderwallplates + (Section16*6)
                
                let posts = Section16
            
                if (inches<240){
                    posts=0
                }
            
                return {
                    posts,
                    studs,
                    plates
                }
            
            })
            const savedHouses = Houses.getAll();
            if(!savedHouses.get(args.name)){
                console.log("A saved house by that name does not exist")
            }
            else{
            const houses:IHouse[] = [ ...savedHouses.values()];
            const recallHouse = houses.find((element:any) => element.name === args.name);
            console.log("Totals for recalled house with name",args.name,"=  Studs-",recallHouse.studs," Plates-",recallHouse.plates," Posts-",recallHouse.posts);
            }
        }
    );
};
