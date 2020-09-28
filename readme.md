# Gerald's Contracting Application

## Setup

To use this application, please follow these instructions:

1. In bash, run the following command to clone the application reository:
```
git clone git@github.com:GavinBremmer/developing-software-intro-assignment-3.git Gerald's Contracting Applicaiton
```
2. In bash, use the cd command to navigate into the directory that has just been created and cloned into, it will be named "Gerald's Contracting Application"
```
cd [cloned directory]
```
3. In bash, run the following command to install the programs dependencies:
```
npm install
```
4. In bash, run the following command to ensure you are on the stable master branch and not the unstable development branch
```
git checkout master
```
5. In bash, run the tsc command to compile the program
```
tsc
```

---

## calc-wood-needed

To calculate the materials required for a house, run:

```
node dist/index.js calc-wood-needed --width [the outer width of the house without brackets] --length [the outer length of the house without brackets]
```

If the measurements are in feet, the --feet parameter must be used

```
node dist/index.js calc-wood-needed --width [the outer width of the house without brackets] --length [the outer length of the house without brackets] --feet
```

If the measurements are in inches, the --inches parameter can be used optionally, but is not necessary

To save the house under a name use the --name parameter as below. NOTE: if a house by the name used already exists, it will be overwritten without warning

```
node dist/index.js calc-wood-needed --width [the outer width of the house without brackets] --length [the outer length of the house without brackets] --name [the name to store the house under, without brackets]
```

---

## recall

To recall a previously saved house, run the following. The program will inform you if the house requested does not exist. If the --name parameter or it's value are absent, the most recent unnamed house ran through the calc-wood-needed command will be recalled.
```
node dist/index.js recall --name [the name of the house to recall]
```

---

## Alias'

Note that for all commands, alias' may be used in place of the command line parameters, these include:

| Parameter | Alias |
|-|-|
|--width|-w|
|--length|-l|
|--inches|-i|
|--feet|-f|
|--name|-n|

---

## Sample Commands

Some sample commands include:

```
node dist/index.js calc-wood-needed --width 150 --length 100 --name MyHouse

node dist/index.js calc-wood-needed -w 30 -l 10 -f

node dist/index.js recall -n MyHouse
```