let battlefield = document.querySelector("#battlefield")


class Card {
	constructor(name, cardType, superType, color,flavorText){
		this.name = name;
		this.flavorText= flavorText;
		this.color = color;
		this.visible = true;
		this.cardType = cardType;
		this.superType = superType;

		//printing card
		
	}

	
}

class Creature extends Card {
	constructor (name, cardType, superType, color,flavorText,ability, power, toughness){
		super(name, flavorText, color)
		this.name = name
		this.flavorText = flavorText
		this.color = color
		this.power = power
		this.toughness = toughness
		this.cardType = cardType
		this.superType = superType
		this.ability = ability

		this.currentPower = this.power
		this.currentToughness = this.toughness
		this.currentColor = this.color
		this.currentSuperType = this.superType

		
	}

	printCard(battlefield){

		this.divCardboard = document.createElement("div")
		this.divCardboard.id = "cardboard"
		this.divCardboard.classList.add("cardboard")

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

		this.divCardTypeContainer = document.createElement("div")
		this.divCardTypeContainer.id = "cardTypeContainer"
		this.divCardTypeContainer.classList.add("cardTypeContainer")

		this.elementCardType = document.createElement("p")
		this.elementCardType.innerText =  this.cardType + "-" + this.superType //this.cardType

		this.divTextContainer = document.createElement("div")
		this.divTextContainer.id = "textContainer"
		this.divTextContainer.classList.add("textContainer")

		this.elementAbility = document.createElement("p")
		this.elementAbility.id = "ability"
		this.elementAbility.classList.add("margin-auto")
		this.elementAbility.innerText = this.ability

		this.elementFlavorText = document.createElement("p")
		this.elementFlavorText.id = "flavorText"
		this.elementFlavorText.classList.add("margin-auto")
		this.elementFlavorText.innerText = this.flavorText

		this.divStatContainer = document.createElement("div")
		this.divStatContainer.id = "statContainer"
		this.divStatContainer.classList.add("stat-container")

		this.stat = document.createElement("p")
		this.stat.id = "stat"
		this.stat.classList.add("stat")
		this.stat.innerText = this.power + "/" + this.toughness

		battlefield.appendChild(this.divCardboard)
		this.divCardboard.appendChild(this.divCardHeader)
		this.divCardHeader.appendChild(this.cardName)
		this.divCardHeader.appendChild(this.manaCost)
		this.divCardboard.appendChild(this.divIllus)
		this.divCardboard.appendChild(this.divCardTypeContainer)
		this.divCardTypeContainer.appendChild(this.elementCardType)
		this.divCardboard.appendChild(this.divTextContainer)
		this.divTextContainer.appendChild(this.elementAbility)
		this.divTextContainer.appendChild(this.elementFlavorText)
		this.divCardboard.appendChild(this.divStatContainer)
		this.divStatContainer.appendChild(this.stat)
	}


}

class Land extends Card {
	constructor (name, cardType, superType, color) {
		super(name, cardType, superType, color)
		this.name = name
		this.color = color
		this.cardType = cardType
		this.superType = superType
	}

	printCard(battlefield){
		this.divCardboard = document.createElement("div")
		this.divCardboard.id = "cardboard"
		this.divCardboard.classList.add("cardboard")

		this.divCardHeader = document.createElement("div")
		this.divCardHeader.classList.add("cardHeader")

		this.cardName = document.createElement("p")
		this.cardName.id = "cardName"
		this.cardName.classList.add("cardName")
		this.cardName.innerText = this.name

		this.illus = document.createElement("div")
		this.illus.id = "illus"
		this.illus.classList.add("illus")

		this.divCardTypeContainer = document.createElement("div")
		this.divCardTypeContainer.classList.add("cardTypeContainer")

		this.elementCardType = document.createElement("p")
		this.elementCardType.innerText = this.cardType

		battlefield.appendChild(this.divCardboard)
		this.divCardboard.appendChild(this.divCardHeader)
		this.divCardHeader.appendChild(this.cardName)
		this.divCardboard.appendChild(this.illus)
		this.divCardboard.appendChild(this.divCardTypeContainer)
		this.divCardTypeContainer.appendChild(this.elementCardType)
	}
}

class Spell extends Card{
constructor (name, cardType, superType, color, flavorText, ability) {
		super(name, cardType, superType, color)
		this.name = name
		this.color = color
		this.cardType = cardType
		this.superType = superType
		this.flavorText = flavorText
		this.ability = ability
	}

	printCard(battlefield){
		this.divCardboard = document.createElement("div")
		this.divCardboard.id = "cardboard"
		this.divCardboard.classList.add("cardboard")
		
		this.divCardHeader = document.createElement("div")
		this.divCardHeader.classList.add("cardHeader")

		this.cardName = document.createElement("p")
		this.cardName.id = "cardName"
		this.cardName.classList.add("cardName")
		this.cardName.innerText = this.name

		this.illus = document.createElement("div")
		this.illus.id = "illus"
		this.illus.classList.add("illus")

		this.divCardTypeContainer = document.createElement("div")
		this.divCardTypeContainer.classList.add("cardTypeContainer")

		this.elementCardType = document.createElement("p")
		this.elementCardType.innerText = this.cardType

		this.divTextContainer = document.createElement("div")
		this.divTextContainer.id = "textContainer"
		this.divTextContainer.classList.add("textContainer")

		this.elementAbility = document.createElement("p")
		this.elementAbility.id = "ability"
		this.elementAbility.classList.add("margin-auto")
		this.elementAbility.innerText = this.ability

		this.elementFlavorText = document.createElement("p")
		this.elementFlavorText.id = "flavorText"
		this.elementFlavorText.classList.add("margin-auto")
		this.elementFlavorText.innerText = this.flavorText		

		battlefield.appendChild(this.divCardboard)
		this.divCardboard.appendChild(this.divCardHeader)
		this.divCardHeader.appendChild(this.cardName)
		this.divCardboard.appendChild(this.illus)
		this.divCardboard.appendChild(this.divCardTypeContainer)
		this.divCardTypeContainer.appendChild(this.elementCardType)
		this.divCardboard.appendChild(this.divTextContainer)
		this.divTextContainer.appendChild(this.elementAbility)
		this.divTextContainer.appendChild(this.elementFlavorText)
	}	
}



//let b = new Creature ("lobo", "Criatura", "lobo",  "verde" , "lobo solitario", "cuando ingresa al campo de batalla roba dos cartas",  2,2);
//b.printCard(battlefield)

