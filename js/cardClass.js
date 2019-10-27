class hydraHead extends Creature {
	constructor(){
	super("test", "cardType", "superType", "color","flavorText","ability", "0", "3")
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




let h = new hydraHead ()
h.printCard(battlefield)