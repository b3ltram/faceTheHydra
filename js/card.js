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
		this.divCardboard.classList.add("cardboard")
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
		this.cardName.classList.add("cardName")

		this.manaCost = document.createElement("div")
		this.manaCost.id = "manaCost"


		this.divIllus = document.createElement("div")
		this.divIllus.classList.add("illus")
		this.divIllus.id = "illus"

		this.divTextContainer = document.createElement("div")
		this.divTextContainer.id = "textContainer"
		this.divTextContainer.classList.add("textContainer")

		this.ability = document.createElement("p")
		this.ability.id = "ability"
		this.ability.classList.add("margin-auto")

		this.elementFlavorText = document.createElement("p")
		this.elementFlavorText.id = "flavorText"
		this.elementFlavorText.classList.add("margin-auto")
		this.elementFlavorText.innerText = this.flavorText

		this.divStatContainer = document.createElement("div")
		this.divStatContainer.id = "statContainer"
		this.divStatContainer.classList.add("statContainer")

		this.stat = document.createElement("p")
		this.stat.id = "stat"
		this.stat.classList.add("stat-container")
		this.stat.innerText = this.power + "/" + this.toughness

		battlefield.appendChild(this.divCardboard)
		this.divCardboard.appendChild(this.divCardHeader)
		this.divCardHeader.appendChild(this.cardName)
		this.divCardHeader.appendChild(this.manaCost)
		this.divCardboard.appendChild(this.divIllus)
		this.divCardboard.appendChild(this.divTextContainer)
		this.divTextContainer.appendChild(this.ability)
		this.divTextContainer.appendChild(this.elementFlavorText)
		this.divCardboard.appendChild(this.divStatContainer)
		this.divStatContainer.appendChild(this.stat)






		/*
		this.divDataCard.appendChild(this.cardName)
		this.divDataCard.appendChild(this.cardStat)
		this.divCardboard.appendChild(this.divDataCard)
		battlefield.appendChild(this.divCardboard)
		*/
	}

}

//let a = new Card ("bosque", "habia una vez...", "verde");

let b = new Creature ("lobo", "lobo solitario", "verde", 2,2);
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