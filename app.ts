//Text based adventure in Typescript and node js 
//This project is not GUI based. It is a console based game..

// Installation of inquirer.......npm install inquirer

import inquirer from "inquirer";

class Hero{
    name: string;
    health = 100;

    constructor(name: string){
        this.name = name
 }   
 decreaseHealth(){
    this.health -= 20
 }
 increaseHealth(){
    this.health -= 100
 }
}

//for enemy
class Enemy{
    name: string;
    health = 100;

    constructor(name: string){
        this.name = name
 }   
 decreaseHealth(){
    this.health -= 20
 }
 increaseHealth(){
    this.health -= 100
 }
}

//step 2
async function main() {
const { heroName } = await inquirer.prompt([
{
    type: "input",
    name: "heroName",
    message: "Enter Your Hero Name:"

}

])

//enemy object
const {enemyType} = await inquirer.prompt([
{
   type: "list",
   name: "enemyType",
   choices: ["alien", "witch", "zoombie"],
   message: "select the enemy you fight with:"


}


])
//step 3 battle field
const hero = new Hero (heroName);
const enemy = new Enemy (enemyType);

console.log(`${enemy.name} v/s ${hero.name}`)



//step 4 action
do {
    const { action } = await inquirer.prompt([
{
    type: "list",
    name: "action",
    choices: ["attack", "defend", "rangetarget", "run"],
    message: "choose the attack type to perform action ",
}
    ])
}

//step 5 switch case
        const  randomNum = Math.random();
        if (randomNum > 0.5) {
            hero.decreaseHealth();
            console.log(`${heroName}  health: ${hero.health}`)
            console.log(`${Enemy.name} health: ${enemy.health}`)
            if (hero.health <= 0) {
                console.log("you loss! try again")
                return
            }
        } else {
            //enemy health decrease
            enemy.decreaseHealth()
            hero.decreaseHealth();
            console.log(`${heroName}  health: ${hero.health}`)
            console.log(`${Enemy.name} health: ${enemy.health}`)
            if (hero.health <= 0) {
                console.log("congratulation! you won")
                return
            }
        } 
        break;
        }
}while (true);


main();




















