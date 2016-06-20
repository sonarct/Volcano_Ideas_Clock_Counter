function ClockCounter() {
	this.lastSeconds = '--';
	this.lastHours = '--';
	this.lastMinutes = '--';
	this.lastDays = '--';
}


ClockCounter.prototype = {

	setDate: function(userDate) {
		this.countDate = new Date(userDate);
	},

	countdown: function() {

		function addZero(n) {
			return n.length > 1 ? n : "0" + n;
		}

		this.Date = Date.now();
		this.timeDifference = Math.max(Math.floor((this.countDate - this.Date) / 1000), 0);
		//days
		this.days = Math.floor(this.timeDifference / 86400);
		this.daysDivNext.innerText = addZero(this.days.toString());

		//hours
		this.hours = Math.floor((this.timeDifference - this.days * 86400) / 3600);
		this.hoursDivNext.innerText = addZero(this.hours.toString());

		//minutes
		this.minutes = Math.floor((this.timeDifference - this.days * 86400 - this.hours * 3600) / 60);
		this.minutesDivNext.innerText = addZero(this.minutes.toString());

		//seconds
		this.seconds = Math.floor(this.timeDifference - this.days * 86400 - this.hours * 3600 - this.minutes * 60);
		this.secondsDivNext.innerText = addZero(this.seconds.toString());

		
		function restoreDiv(tempDiv, tempDivNext) {
			setTimeout(function() {
				tempDiv.classList.add('move');
				tempDivNext.classList.add('move');
			}, 20)
		}

		if (this.days != this.lastDays) {
			this.daysDiv.classList.remove('move');
			this.daysDivNext.classList.remove('move');
			this.daysDiv.innerText = addZero(this.lastDays.toString());
			restoreDiv(this.daysDiv, this.daysDivNext);
			this.lastDays = this.days;
		}

		if (this.hours != this.lastHours) {
			this.hoursDiv.classList.remove('move');
			this.hoursDivNext.classList.remove('move');
			this.hoursDiv.innerText = addZero(this.lastHours.toString());
			restoreDiv(this.hoursDiv, this.hoursDivNext);
			this.lastHours = this.hours;
		}

		if (this.minutes != this.lastMinutes) {
			this.minutesDiv.classList.remove('move');
			this.minutesDivNext.classList.remove('move');
			this.minutesDiv.innerText = addZero(this.lastMinutes.toString());
			restoreDiv(this.minutesDiv, this.minutesDivNext);
			this.lastMinutes = this.minutes;
		}

		if (this.seconds != this.lastSeconds) {
			this.secondsDiv.classList.remove('move');
			this.secondsDivNext.classList.remove('move');
			this.secondsDiv.innerText = addZero(this.lastSeconds.toString());
			restoreDiv(this.secondsDiv, this.secondsDivNext);
			this.lastSeconds = this.seconds;
		}
	},
	drawCounter: function(place) {
		//countering/
		this.counterDiv = document.createElement('div');
		this.counterDiv.className = 'counter';
		this.counterDiv.style.backgroundImage = 'url(img/clock.png)';
		document.body.appendChild(this.counterDiv);
		//Town
		this.townDiv = document.createElement('div');
		this.townDiv.className = 'town';
		this.townDiv.innerHTML = place;
		this.counterDiv.appendChild(this.townDiv);
		//layout
		this.counterChildrenLayoutDiv = document.createElement('div');
		this.counterChildrenLayoutDiv.className = 'counterChildrenLayout';
		this.counterDiv.appendChild(this.counterChildrenLayoutDiv);

		//days
		this.daysDiv = document.createElement('div');
		this.daysDiv.className = 'counterChildren days';
		this.daysDiv.style.backgroundImage = 'url(img/div.png)';
		this.daysDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.daysDiv);
		//hours
		this.hoursDiv = document.createElement('div');
		this.hoursDiv.className = 'counterChildren hours';
		this.hoursDiv.style.backgroundImage = 'url(img/div.png)';
		this.hoursDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.hoursDiv);
		//minutes
		this.minutesDiv = document.createElement('div');
		this.minutesDiv.className = 'counterChildren minutes';
		this.minutesDiv.style.backgroundImage = 'url(img/div.png)';
		this.minutesDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.minutesDiv);
		//seconds
		this.secondsDiv = document.createElement('div');
		this.secondsDiv.className = 'counterChildren seconds';
		this.secondsDiv.style.backgroundImage = 'url(img/div.png)';
		this.secondsDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.secondsDiv);

		//days next
		this.daysDivNext = document.createElement('div');
		this.daysDivNext.className = 'counterChildren counterChildrenNext days';
		this.daysDivNext.style.backgroundImage = 'url(img/div.png)';
		this.daysDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.daysDivNext);
		//hours next
		this.hoursDivNext = document.createElement('div');
		this.hoursDivNext.className = 'counterChildren counterChildrenNext hours';
		this.hoursDivNext.style.backgroundImage = 'url(img/div.png)';
		this.hoursDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.hoursDivNext);
		//minutes next
		this.minutesDivNext = document.createElement('div');
		this.minutesDivNext.className = 'counterChildren counterChildrenNext minutes';
		this.minutesDivNext.style.backgroundImage = 'url(img/div.png)';
		this.minutesDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.minutesDivNext);
		//seconds next
		this.secondsDivNext = document.createElement('div');
		this.secondsDivNext.className = 'counterChildren counterChildrenNext seconds';
		this.secondsDivNext.style.backgroundImage = 'url(img/div.png)';
		this.secondsDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.secondsDivNext);
	}
};