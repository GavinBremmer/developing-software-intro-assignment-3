# Houses

The houses class extends the [javascript Map](https://javascript.info/map-set) class and inherits all
of its public properties and methods.

## Properties

> There are no public properties exist.

## Methods

### setWallSuppliesCalculator( `calculator: (inches: number) => IWallCalculatorResponse` ): void

Sets function to be used to calculate a single wall resources, not including the corner posts.

Parameters:
  - calculator: `( inches:number ) => IWallCalculatorResponse`
    - function must take a single parameter: `inches: number`
    - function must return an object matching the [IWallCalculatorResponse Interface](#IWallCalculatorResponse)

Returns:
  - void

Usage:

```typescript
// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

// example with anonymous function
Houses.setWallSuppliesCalculator(( inches: number) => {

    // calculation of wall supplies for wall {inches} long here

    return {
        posts: 0, // set this value
        studs: 0, // set this value
        plates: 0 // set this value
    }

});

```

### getAll(): Houses

Returns all of the house objects saved in .json files in the `dist/data` folder as a Houses object.

Usage: 
```typescript
// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

const savedHouses = Houses.getAll();
```

Converting a Houses object to an array:
```typescript
// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

const savedHouses = Houses.getAll();
const houses:House[] = [ ...savedHouses.values()];
```


### create( name: string ): House

Creates a new house object with the name passed in as the first parameter.

Parameters:
  - name: `string`
    - The name of the house

Returns:
  - `House`
    - Instance of `House`

Usage:
```typescript
// example from locatation relative to src/index.ts
import { Houses } from './house/houses'

const house = Houses.create("Bradley");
```

### save( house:House ): void

Saves a `.json` file in `dist/data` that stores the information for a customers house.

Parameters:
  - house: `House`
    - The house object

Returns:
  - `void`

Usage
```typescript
// example from locatation relative to index.ts
import { Houses } from './src/house/houses'

const house = Houses.create("Bradley");
house.width = 96;
house.length = 56;
Houses.save( house );
```

# House

## Properties

### .width
The width of the house.

### .length
The length of the house.

### .posts (READONLY)
The number of posts the structure requires including the corner posts.

### .studs (READONLY)
The number of studs the structure requires.

### .plates (READONLY)
The number of plates the structure requires.

## Methods

> There are no publically accessible methods

# IWallCalculatorResponse

```typescript
{
    posts: number;
    plates: number;
    studs: number;
}
```
