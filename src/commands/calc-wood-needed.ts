// import { Arguments, Argv } from "yargs";
// import { calculateHouseRequirements } from "../wallCalculator";

// export function calcWoodNeeded(yargs: Argv): void {    
    
//     // create a new yargs "command"
//     yargs.command(
        
//         // name the command with no spaces
//         "calc-wood-needed",

//         // describe the command so that the --help flag is helpful
//         "Calculate the number of studs required to stick frame a house for Gerald",

//         // define the parameters we need for our command
//         {
//             width: {
//                 type: "number",
//                 alias: "w",
//                 description: "The width of the house",
//             },

//             length: {
//                 type: "number",
//                 alias: "l",
//                 description: "The length of the house",
//             },

//             inches: {
//                 type: "boolean",
//                 alias: "i",
//                 description: "Specifies that inches are being used as the unit of measure"
//             },
            
//             feet: {
//                 type: "boolean",
//                 alias: "f",
//                 description: "Specifies that feet are being used as the unit of measure"
//             }
//         },

//         // define the function we want to run once the arguments are parsed
//         function (
//             args: Arguments<{
//                 width: number;
//                 length: number;
//                 inches: boolean;
//                 feet: boolean;
//                 w: number;
//                 l: number;
//                 i: boolean;
//                 f: boolean;
//             }>
//         ) {
//             console.log("Func");
//             let w = args.width;
//             let l = args.length;

//             if(args.feet){
//                 w = w * 12;
//                 l = l * 12;
//             }

//             console.log(args.w);

//             const requirements = calculateHouseRequirements(
//                 w,
//                 l
//             );
            
//             console.log( requirements );

//         }
//     );
// }
