const button = document.querySelector("#button")


class librery {
	constructor(){
		this.deck = []
		this.battlefieldCards = []
		this.graveyard = []


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

	shuffleLib(){
		let temp
		let random
		for (var i=this.deck.length - 1; i > 0; i--){
			random = Math.floor(Math.random() * (i + 1));
			temp = this.deck[i]
			this.deck[i] = this.deck[random]
			this.deck[random] = temp


		}
	}
	
	showCard (battlefield) {
		this.battlefieldCards.push(this.deck[0]);
		this.deck.shift();
	}

	hydraDrawCard (battlefield){
		if (this.deck[0].cardType == "Criatura" || this.deck[0].cardType == "Criatura elite"){
			//battlefield.innerHTML = " "
			this.battlefieldCards.push(this.deck[0]);
			this.deck.shift();
			for (var i = lib.battlefieldCards.length -1; i >= 0; i--) {
				lib.battlefieldCards[i].printCard(battlefield)
			}
		}else{
			this.graveyard.push(this.deck[0]);
			this.deck.shift();
		}

		if (this.battlefieldCards.length == 0){
			console.log("gasnaste!! :D")
		}
	}

}



let lib = new librery();

lib.shuffleLib()

button.addEventListener("click",function (){
	lib.hydraDrawCard(battlefield)
	console.log(lib)
})

for (var i = lib.battlefieldCards.length -1; i >= 0; i--) {
	lib.battlefieldCards[i].printCard(battlefield)
}


//test

