import { House } from './house';
import { Houses } from './house/houses'
import { IHouse } from './house/interface';


// example from locatation relative to index.ts
Houses.setWallSuppliesCalculator(( inches: number) => {

    // calculation of wall supplies for wall {inches} long here

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
        posts, // set this value
        studs, // set this value
        plates // set this value
    }

});

const house = Houses.create("Tanya");
house.length = 300
house.width = 300
Houses.save( house );

const savedHouses = Houses.getAll();


const houses:IHouse[] = [ ...savedHouses.values()];

console.log(houses)