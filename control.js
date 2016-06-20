var myClock = new ClockCounter();

myClock.setDate('2016-06-26 09:00:00');
myClock.drawCounter();

var animationStart = setTimeout(function animate() {
	myClock.countdown();
	animationStart = setTimeout(animate, 1000);
}, 1000);