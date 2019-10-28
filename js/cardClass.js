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

	this.currentPower = this.power
	this.currentToughness = this.toughness
	this.currentColor = this.color
	this.currentSuperType = this.superType		
	}
}


class ravenousBruteHead extends Creature{
	constructor(){
		super()
		this.name = "Cabeza brutal y feroz"
		this.flavorText = null
		this.color = null
		this.power = 0
		this.toughness = 6
		this.cardType = "criatura elite"
		this.superType = "cabeza"
		this.ability = "Heross Reward - When Ravenous Brute Head leaves the battlefield, each player gains 2 life and draws a card."

		this.currentPower = this.power
		this.currentToughness = this.toughness
		this.currentColor = this.color
		this.currentSuperType = this.superType
	}
}

class snappingFangHead extends Creature{
	constructor(){
		super()
		this.name = "Cabeza de colmillos afilados"
		this.flavorText = null
		this.color = null
		this.power = 0
		this.toughness = 8
		this.cardType = "criatura elite"
		this.superType = "cabeza"
		this.ability = "At the beginning of the Hydra’s end step, Snapping Fang Head deals 1 damage to each player." + 
			"Hero’s Reward — When Snapping Fang Head leaves the battlefield, each player gains 4 life and draws a card."

		this.currentPower = this.power
		this.currentToughness = this.toughness
		this.currentColor = this.color
		this.currentSuperType = this.superType
	}
}

class savageVigorHead extends Creature{
	constructor(){
		super()
		this.name = "Cabeza de vitalidad salvaje"
		this.flavorText = null
		this.color = null
		this.power = 0
		this.toughness = 8
		this.cardType = "criatura elite"
		this.superType = "cabeza"
		this.ability = "At the beginning of the Hydra’s end step, reveal the top card of the Hydra’s library and the Hydra casts that card." + 
			"Hero’s Reward — When Savage Vigor Head leaves the battlefield, each player gains 4 life and draws a card."

		this.currentPower = this.power
		this.currentToughness = this.toughness
		this.currentColor = this.color
		this.currentSuperType = this.superType
	}
}

let h = new hydraHead ()
h.printCard(battlefield)

let r = new ravenousBruteHead ()
r.printCard(battlefield)

let s = new savageVigorHead()
s.printCard(battlefield)