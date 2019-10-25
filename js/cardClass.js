class hydraHead extends Creature {
	constructor(){
	super(name, cardType, superType, color,flavorText,ability, power, toughness)
	this.name = "Cabeza de hydra"
	this.flavorText = null
	this.color = null
	this.power = 0
	this.toughness = 3
	this.cardType = "Criatura"
	this.superType = "Cabeza"
	this.ability = "Hero's reward: When hydra head leaves the battlefield, each player gains 2 life."		

	}
}

let h = new hydraHead (null,null,null,null,null,null,null,null,)
h.printCard(battlefield)