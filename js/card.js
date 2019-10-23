let battlefield = document.querySelector("#battlefield")


class Card {
	constructor(name, flavorText, color){
		this.name = name;
		this.flavorText= flavorText;
		this.color = color;
		this.visible = true;

		//printing card
		this.divCardboard = document.createElement("div")
		this.divCardboard.id = "cardboard"
	}

	
}



class Creature extends Card {
	constructor (name, flavorText, color, power, toughness){
		super(name, flavorText, color)
		this.name = name
		this.flavorText = flavorText
		this.color = color
		this.power = power
		this.toughness = toughness

		
	}

	printCard(battlefield){

		this.divCardHeader = document.createElement("div")
		this.divCardHeader.classList.add("cardHeader")


		
		this.cardName = document.createElement("p")
		this.cardName.id = "cardName";
		this.cardName.innerText = this.name;

		this.cardStat = document.createElement("p")
		this.cardStat.id = "cardStat";
		this.cardStat.innerText = this.power + "/" + this.toughness;
		this.divDataCard.appendChild(this.cardName)
		this.divDataCard.appendChild(this.cardStat)
		this.divCardboard.appendChild(this.divDataCard)
		battlefield.appendChild(this.divCardboard)
	}

}

//let a = new Card ("bosque", "habia una vez...", "verde");

let b = new Creature ("lobo", "lobo solitario", "verde", 2,2);
b.printCard(battlefield)
b.printCard(battlefield)
/*
let button = document.querySelector("#generate");
let wolfBtn = document.querySelector("#genWolf");

button.addEventListener("click",createGreyCard)
wolfBtn.addEventListener("click",function (b) ){
	let p = document.createElement("p")
	p.innerText = b.name;
	let newDiv = document.createElement("div")
	newDiv.classList.add('card', 'green')
	let battlefield = document.querySelector("#battlefield")
	battlefield.appendChild(newDiv)
	newDiv.appendChild(p)
}



function createGreyCard (){
	let newDiv = document.createElement("div")
	newDiv.classList.add('card')
	let battlefield = document.querySelector("#battlefield")
	battlefield.appendChild(newDiv)
}*/

/*
function createWolf (creature){
	let p = document.createElement("p")
	p.innerText = creature.name;
	let newDiv = document.createElement("div")
	newDiv.classList.add('card', 'green')
	let battlefield = document.querySelector("#battlefield")
	battlefield.appendChild(newDiv)
	newDiv.appendChild(p)
}
*/