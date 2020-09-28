// //input dimensions in inches
// let inboundArguments=process.argv

// let houselength:number=Number(inboundArguments[2]),housewidth:number=Number(inboundArguments[3])

// //calculation for the number of floor and roof plates required, assuming they are butt-ended for walls exceeding 8'7", round up EACH wall to
// //avoid adjoining several partial boards for specific dimensions, this wastes materials during other specific dimensions, multiply by 2 to 
// //allow for floor AND roof plates
// function plates(houselength:number,housewidth:number):number{
//     return (Math.ceil(houselength/96)+Math.ceil(housewidth/96))*2
// }

// //calculation for the number of studs required, rounded down so there is no allowance for floating studs as in the example
// function studs(houselength:number,housewidth:number):number{
//     return(Math.floor(houselength/16))+(Math.floor(housewidth/16))
// }

// //remove 7" for 4x4 posts on either edge of wall, multiply by 2 to add opposite walls
// function TotalWall(houselength:number,housewidth:number):number{
//     let p = plates(houselength-7,housewidth-7)
//     let s = studs(houselength-7,housewidth-7)
//     return (s+p)*2
// }

// //Add 10% at this stage before rounding as in the scenario, then round up the final board count
// function overProvision(houselength:number,housewidth:number):number{
//     let oP=Math.ceil(TotalWall(houselength,housewidth)*1.1)
//     return oP
// }
// //return final result
// let boards=overProvision(houselength, housewidth)
// console.log(boards)