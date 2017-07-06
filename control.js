var myClock = new ClockCounter()
var animationStart = setTimeout(function animate() {
	myClock.countdown()
	animationStart = setTimeout(animate, 1000)
}, 1000)
var datesOfEvents = [
	{
		date: "2016-05-03T09:00:00+03:00",
		place: "Москва, Крокус Экспо"
	},

	{
		date: "2016-05-14T09:00:00+03:00",
		place: "Москва, Лидер"
	},

	{
		date: "2016-05-29T09:00:00+03:00",
		place: "Москва, Фирсановка"
	},

	{
		date: "2016-06-26T09:00:00+03:00",
		place: "Рязань, АСК Атрон"
	},

	{
		date: "2016-07-10T09:00:00+03:00",
		place: "Москва, Лидер"
	},

	{
		date: "2016-08-28T09:00:00+03:00",
		place: "Москва, Фирсановка"
	},

	{
		date: "2016-09-25T09:00:00+03:00",
		place: "Курск, к-м Кононова"
	}
];


// chooseEventDate()


function chooseEventDate() {
	for (var i = 0; i < datesOfEvents.length; i++) {
		var date = new Date(datesOfEvents[i].date)
		if (date - Date.now() > 0) {
			myClock.setDate(date)
			myClock.drawCounter(datesOfEvents[i].place)
			return
		}
	}
}

(function() {
	var date = new Date()
	date.setMonth(date.getDate() + 1)
	myClock.setDate(date)
	myClock.drawCounter(datesOfEvents[0].place)
})()
