import { Houses } from "../house/houses";

export function houseCalculator(w:number, l:number, n?:string ){

    function wallcalculator(inches:number){

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
            posts,
            studs,
            plates
        }
    
    }

Houses.setWallSuppliesCalculator(( inches: number) => wallcalculator(inches))


const house = Houses.create(n);
house.length = l
house.width = w
Houses.save( house );

console.log("Totals for current house=  Studs-",house.studs," Plates-",house.plates," Posts-",house.posts)

if (n){
    console.log ("This house has been saved and can be recalled under the name",n,",if a house by this name already existed, it has been overwritten")
}

};