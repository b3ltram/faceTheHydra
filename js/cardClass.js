class HydraHead extends Creature {
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


class RavenousBruteHead extends Creature{
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

class SnappingFangHead extends Creature{
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

class SavageVigorHead extends Creature{
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

class ShriekingTitanHead extends Creature{
	constructor(){
		super()
		this.name = "cabeza titanica y aullante"
		this.flavorText = null
		this.color = null
		this.power = 0
		this.toughness = 8
		this.cardType = "criatura elite"
		this.superType = "cabeza"
		this.ability = "At the beginning of the Hydra’s end step, each player discards a card." + 
			"Hero’s Reward — When Shrieking Titan Head leaves the battlefield, each player gains 4 life and draws a card."

		this.currentPower = this.power
		this.currentToughness = this.toughness
		this.currentColor = this.color
		this.currentSuperType = this.superType
	}
}

class StrikeWeakSpot extends Spell{
	constructor(){
		super()
		this.name = "alcanzar el punto debil"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Destroy target Head. If that Head was elite, the Hydra takes an extra turn after this one."
	}
}

class NoxiousHydraBreath extends Spell{
	constructor(){
		super()
		this.name = "Aliento nocivo de la hydra"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Choose one — Noxious Hydra Breath deals 5 damage to each player; or destroy each tapped non-Head creature."
	}
}

class NeckTangle extends Spell{
	constructor(){
		super()
		this.name = "Cuellos entrelazados"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "If there are five or more Heads on the battlefield, tap two of them and they don’t untap during the" +
			" Hydra’s next untap step. Otherwise, reveal the top card of the Hydra’s library and the Hydra casts that card."
	}
}


class TornBetweenHeads extends Spell{
	constructor(){
		super()
		this.name = "Desgarrado por dos cabezas"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Tap up to two Heads. They don’t untap during the Hydra’s next untap step. Torn Between Heads deals 5" +
			"damage to each player."
	}
}

class DistractHydra extends Spell{
	constructor(){
		super()
		this.name = "Distraer a la hydra"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Each player may sacrifice a creature. Each player who sacrificed a creature this way chooses a Head"+
			" and taps it. Each player who didn’t sacrifice a creature loses 3 life."
	}
}

class UnifiedLunge extends Spell{
	constructor(){
		super()
		this.name = "Enbestida conjunta"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Unified Lunge deals X damage to each player, where X is the number of Heads on the battlefield."
	}
}

class DisorientingGlower extends Spell{
	constructor(){
		super()
		this.name = "Mirada desorientadora"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Players can’t cast spells until the Hydra’s next turn."
	}
}

class HydrasImpenetrableHide extends Spell{
	constructor(){
		super()
		this.name = "Piel de hidra impenetrable"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Each head gains indestructible until the end of the Hydra’s next turn."
	}
}

class GrownFromStump extends Spell{
	constructor(){
		super()
		this.name = "Regeneracion de muñones"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Place exactly two cards named Hydra Head onto the battlefield from the"+
			"Hydra’s graveyard. If you can’t, reveal cards from the top of the Hydra’s library" + 
			"until you reveal a Head card. Put that card onto the battlefield and the rest into the Hydra’s graveyard."
	}
}


class SwallowHerOWhole extends Spell{
	constructor(){
		super()
		this.name = "Tragar al heroe de un bocado"
		this.flavorText = null
		this.color = null
		this.cardType = "Conjuro"
		this.superType = null
		this.ability = "Each player exiles a creature they control. Until the Hydra’s next turn," + 
			" when a Head leaves the battlefield, return the exiled cards to the battlefield under their owners’ control."
	}
} 	



