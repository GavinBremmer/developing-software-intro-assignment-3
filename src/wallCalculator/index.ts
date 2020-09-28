import { Houses } from "../house/houses";

export function houseCalculator(w: number, l: number, n?: string) {
    function wallcalculator(inches: number) {
        // calculation of wall supplies for wall {inches} long here
        //take wall length in inches, remove corner post width, divide to get total 16 foot sections, one rounded, one unrounded

        const quotient = (inches - 7) / 192;
        const Section16 = Math.floor((inches - 7) / 192);

        //subtract rounded from unrounded and return measurement to inches to get length of remaining section, remove length of internal posts
        const remainderwall = (quotient - Section16) * 192 - Section16 * 3.5;

        //get studs for remainder wall, remove length of side baords and add them in manually after calculation
        const remainderwallstuds = Math.floor((remainderwall - 3) / 16) + 2;

        //get plates for remainder wall, multiply by 3 to allow for one floor plate and two roof plates
        const remainderwallplates = Math.ceil(remainderwall / 96) * 3;

        //populate studs var, each 16 foot section contains 13 studs including sideboards
        const studs = remainderwallstuds + Section16 * 13;

        //populate plates var, each 16 foot section contains 6 plates
        const plates = remainderwallplates + Section16 * 6;

        //populate posts var, each 16 foot section adds one post
        let posts = Section16;

        //handle edge case for walls between 16 and 20 feet in length
        if (inches < 240) {
            posts = 0;
        }

        return {
            posts,
            studs,
            plates,
        };
    }

    //tell the wall calculator this function determines the materials
    Houses.setWallSuppliesCalculator((inches: number) =>
        wallcalculator(inches)
    );

    //create and save a house, populate wall supplies calculator variables to be passed into wall calculator function
    const house = Houses.create(n);
    house.length = l;
    house.width = w;
    Houses.save(house);

    //output current house always
    console.log(
        "Totals for current house=  Studs-",
        house.studs,
        " Plates-",
        house.plates,
        " Posts-",
        house.posts
    );

    //if user provides a name, acknowledge that the house has been saved under that name
    if (n) {
        console.log(
            "This house has been saved and can be recalled under the name",
            n,
            ",if a house by this name already existed, it has been overwritten"
        );
    }
}
