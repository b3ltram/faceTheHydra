class librery {
	constructor(){
		this.deck = []


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
		deck.push(savageVigorHead)

		let shriekingTitanHead = new ShriekingTitanHead()
		deck.push(shriekingTitanHead)

		for (var i=1; i<=2; i++){
			let cartita = new StrikeWeakSpot()
			deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new NoxiousHydraBreath()
			deck.push(cartita)
		}

		for (var i=1; i<=3; i++){
			let cartita = new NeckTangle()
			deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new TornBetweenHeads()
			deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new DistractHydra()
			deck.push(cartita)
		}

		for (var i=1; i<=6; i++){
			let cartita = new UnifiedLunge()
			deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new DisorientingGlower()
			deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new HydrasImpenetrableHide()
			deck.push(cartita)
		}

		for (var i=1; i<=4; i++){
			let cartita = new GrownFromStump()
			deck.push(cartita)
		}

		for (var i=1; i<=5; i++){
			let cartita = new SwallowHerOWhole()
			deck.push(cartita)
		}
	}


	/*
	function showCard(battlefield){
		let counter = 0
		this.deck[counter].printCard(battlefield)
		counter++
	}*/


}

let lib = new librery();