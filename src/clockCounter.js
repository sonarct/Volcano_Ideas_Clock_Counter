function ClockCounter() {
	this.lastSeconds = '--';
	this.lastHours = '--';
	this.lastMinutes = '--';
	this.lastDays = '--';

	this.daysEnding = ['день', 'дня', 'дней'],
	this.hoursEnding = ['час', 'часа', 'часов'],
	this.minutesEnding = ['минута', 'минуты', 'минут'],
	this.secondsEnding = ['секунда', 'секунды', 'секунд']
}


ClockCounter.prototype = {

	setDate: function(userDate) {
		this.countDate = new Date(userDate);
	},

	countdown: function() {

		function addZero(n) {
			return n.length > 1 ? n : "0" + n;
		}


		function repairEnding(number) {
			if (number>10 && number <15) {
				return 2;
			}
			var temp = number % 10
			switch(temp) {
				case 1: 
					return 0;
					break;
				case 2:
					return 1;
					break;
				case 3:
					return 1;
					break;
				case 4:
					return 1;
					break;
				default:
					return 2;
			}
		}

		this.Date = Date.now();
		this.timeDifference = Math.max(Math.floor((this.countDate - this.Date) / 1000), 0);
		//days
		this.days = Math.floor(this.timeDifference / 86400);
		this.daysDivNext.innerText = addZero(this.days.toString());
		this.textDaysDiv.innerText = this.daysEnding[repairEnding(this.days)]

		//hours
		this.hours = Math.floor((this.timeDifference - this.days * 86400) / 3600);
		this.hoursDivNext.innerText = addZero(this.hours.toString());
		this.textHoursDiv.innerText = this.hoursEnding[repairEnding(this.hours)]


		//minutes
		this.minutes = Math.floor((this.timeDifference - this.days * 86400 - this.hours * 3600) / 60);
		this.minutesDivNext.innerText = addZero(this.minutes.toString());
		this.textMinutesDiv.innerText = this.minutesEnding[repairEnding(this.minutes)]

		//seconds
		this.seconds = Math.floor(this.timeDifference - this.days * 86400 - this.hours * 3600 - this.minutes * 60);
		this.secondsDivNext.innerText = addZero(this.seconds.toString());
		this.textSecondsDiv.innerText = this.secondsEnding[repairEnding(this.seconds)]

		
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
			this.lastMinutes = this.minutes;
			restoreDiv(this.minutesDiv, this.minutesDivNext);
			
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
		this.townDiv.innerText = place;
		this.counterDiv.appendChild(this.townDiv);
		//layout
		this.counterChildrenLayoutDiv = document.createElement('div');
		this.counterChildrenLayoutDiv.className = 'counterChildrenLayout';
		this.counterDiv.appendChild(this.counterChildrenLayoutDiv);

		//text
		//days
		this.textDaysDiv = document.createElement('div');
		this.textDaysDiv.className = 'text days';
		this.textDaysDiv.innerText = 'дней';
		this.counterDiv.appendChild(this.textDaysDiv);
		//hours
		this.textHoursDiv = document.createElement('div');
		this.textHoursDiv.className = 'text hours';
		this.textHoursDiv.innerText = 'часов';
		this.counterDiv.appendChild(this.textHoursDiv);
		//minutes
		this.textMinutesDiv = document.createElement('div');
		this.textMinutesDiv.className = 'text minutes';
		this.textMinutesDiv.innerText = 'минуты';
		this.counterDiv.appendChild(this.textMinutesDiv);
		//seconds
		this.textSecondsDiv = document.createElement('div');
		this.textSecondsDiv.className = 'text seconds';
		this.textSecondsDiv.innerText = 'секунд';
		this.counterDiv.appendChild(this.textSecondsDiv);		

		//days
		this.daysDiv = document.createElement('div');
		this.daysDiv.className = 'counterChildren days';
		this.daysDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.daysDiv);
		//hours
		this.hoursDiv = document.createElement('div');
		this.hoursDiv.className = 'counterChildren hours';
		this.hoursDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.hoursDiv);
		//minutes
		this.minutesDiv = document.createElement('div');
		this.minutesDiv.className = 'counterChildren minutes';
		this.minutesDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.minutesDiv);
		//seconds
		this.secondsDiv = document.createElement('div');
		this.secondsDiv.className = 'counterChildren seconds';
		this.secondsDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.secondsDiv);

		//days next
		this.daysDivNext = document.createElement('div');
		this.daysDivNext.className = 'counterChildren counterChildrenNext days';
		this.daysDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.daysDivNext);
		//hours next
		this.hoursDivNext = document.createElement('div');
		this.hoursDivNext.className = 'counterChildren counterChildrenNext hours';
		this.hoursDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.hoursDivNext);
		//minutes next
		this.minutesDivNext = document.createElement('div');
		this.minutesDivNext.className = 'counterChildren counterChildrenNext minutes';
		this.minutesDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.minutesDivNext);
		//seconds next
		this.secondsDivNext = document.createElement('div');
		this.secondsDivNext.className = 'counterChildren counterChildrenNext seconds';
		this.secondsDiv.innerText = '--';
		this.counterChildrenLayoutDiv.appendChild(this.secondsDivNext);
	}
};

export default ClockCounter;
