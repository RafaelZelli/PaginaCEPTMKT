(function(){

numberProjetos= {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}			}		}	}	
		var userFollowers = 50;			
			numberProjetos.countUpOrDown('numberProjetos', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s"); })();




(function(){

numberClientes= {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}			}		}	}	
		var userFollowers = 15;			
			numberClientes.countUpOrDown('numberClientes', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s"); })();





(function(){

numberParceiros= {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}			}		}	}	
		var userFollowers = 7;			
			numberParceiros.countUpOrDown('numberParceiros', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s"); })();











(function(){

numberConsultorias= {
		countUpOrDown: function(containerid, startingNumber, endingNumber, betweenNumberDuration, betweenEffect, effectDuration, endingEffect, endingEffectDuration) {
		var divPlaceholder = document.getElementById(containerid);
		var fixedStartingNumber = parseInt(startingNumber.toFixed(0)) + 1;
		var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
		betweenNumberDuration = betweenNumberDuration || 20;
		betweenEffect = betweenEffect || "jello";
		effectDuration = effectDuration || "0.1s";
		endingEffect = endingEffect || "tada";
		endingEffectDuration = endingEffectDuration || "1s";
		if (isNaN(startingNumber, endingNumber)) {
			console.log('both starting and ending numbers are not integars!');
			return false;
		} else {
			if(fixedStartingNumber < 0){
				divPlaceholder.innerHTML = fixedStartingNumber-1;
			} else {
				divPlaceholder.innerHTML = fixedStartingNumber;
			}			
			if(fixedEndingNumber < 0){
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) - 1; 
			} else {
				var fixedEndingNumber = parseInt(endingNumber.toFixed(0)) + 1; 
			}			
			if(fixedStartingNumber > fixedEndingNumber) {
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber--;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration);
			} else if(fixedStartingNumber < fixedEndingNumber)  {		
				function updateToEndNumber() {	
					divPlaceholder.style.animationDuration = effectDuration;
					divPlaceholder.setAttribute("class", betweenEffect + " animated infinite");
					divPlaceholder.innerHTML = fixedStartingNumber++;
					if(fixedStartingNumber == fixedEndingNumber) {
						clearInterval(clearCountTimer);
						clearCountTimer = 0;
						divPlaceholder.style.animationDuration = endingEffectDuration;
						divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
					}				}
				var clearCountTimer = setInterval(updateToEndNumber, betweenNumberDuration); 
			} else if(fixedStartingNumber == fixedEndingNumber) {
					clearInterval(clearCountTimer);
					clearCountTimer = 0;
					divPlaceholder.style.animationDuration = endingEffectDuration;
					divPlaceholder.setAttribute("class", "" + endingEffect + " animated");
				}			}		}	}	
		var userFollowers = 30;			
			numberConsultorias.countUpOrDown('numberConsultorias', 0, userFollowers, 30, "shake", "0.03s", "tada", "2s"); })();