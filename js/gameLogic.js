const button = document.querySelector("#button")

class librery {
	constructor(){
		this.deck = []
		this.battlefieldCards = []


		for (var i=1; i<=11; i++){
			let cartita = new HydraHead()
			this.deck.push(cartita)
		} 	

		for (var i=1; i<=4; i++){
			let cartita = new RavenousBruteHead()
			this.deck.push(cartita)
		}

		let snappingHead = new SnappingFangHead()
		this.deck.push(snappingHead)

		let savageVigorHead = new SavageVigorHead()
		this.deck.push(savageVigorHead)

		let shriekingTitanHead = new ShriekingTitanHead()
		this.deck.push(shriekingTitanHead)

		for (var i=1; i<=2; i++){
			let cartita = new StrikeWeakSpot()
			this.deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new NoxiousHydraBreath()
			this.deck.push(cartita)
		}

		for (var i=1; i<=3; i++){
			let cartita = new NeckTangle()
			this.deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new TornBetweenHeads()
			this.deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new DistractHydra()
			this.deck.push(cartita)
		}

		for (var i=1; i<=6; i++){
			let cartita = new UnifiedLunge()
			this.deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new DisorientingGlower()
			this.deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new HydrasImpenetrableHide()
			this.deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new GrownFromStump()
			this.deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new SwallowHerOWhole()
			this.deck.push(cartita)
		}
	}


	
	showCard (battlefield) {
		this.battlefieldCards.push(this.deck[0]);
		this.deck.shift();
	}


}



let lib = new librery();

button.addEventListener("click",function (){
	lib.showCard(battlefield)
})

for (var i = lib.battlefieldCards.length -1; i >= 0; i--) {
	lib.battlefieldCards[i].printCard(battlefield)
}


console.log(lib.deck)
console.log(lib.battlefieldCards)