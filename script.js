class Player{
    constructor(id, name, energy){
        this.id=id;
        this.name=name;
        this.energy=energy;
    }

    display=function(){
        console.log(this.name + " " + this.energy);
        document.getElementById(this.id).innerHTML=
        `<p> HP Remaining: ${this.energy} </p>`
        ;
    }

    attack=function(opponent){
        document.getElementById("console").innerHTML=
            `<p> ${this.name} is attacking ${opponent.name}! </p>`
        ;

        let newEnergy=opponent.energy-20;
        opponent.energy=newEnergy;
        opponent.display();

        if(opponent.energy<=0){
            document.getElementById("console").innerHTML=
            `<p> GAME OVER!! </p>`
            ;
            document.getElementById(opponent.id).style.display="none";
        }
    }

   
}

const falcon = new Player("player1", "Captain Falcon", 100);
const diddy = new Player("player2", "Diddy Kong", 100);

falcon.display();
diddy.display();


