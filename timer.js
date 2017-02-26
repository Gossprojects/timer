/*

1. Call Timer.init() to set up Timer with 4 mandatory parameters :
- days
- hours
- minutes
- seconds

You can also set up 3 optional parameters :
- the one you want to decrement : "days", "hours", "minutes" or "seconds"
- by which amount
- every how many milliseconds

Their default values are 
"seconds", 1, 1000 
Wich is the normal behavior of time

2. Call Timer.start() to start Timer

3. Call Timer.stop() to stop Timer

4. Call Timer.start() to start Timer again

5. Timer will stop automatically at 0 and change its Timer.status to ""

*/

var running;

Timer = {
	days: "Nombre de jours non défini",
	hours: "Nombre d'heures non défini",
	minutes: "Nombre de minutes non défini",
	seconds: "Nombre de secondes non défini",
	type: "seconds",
	interval: 0,
	time: 1000,
	init: function(userDays, userHours, userMinutes, userSeconds, userType, userInterval, userTime) {
		this.days = userDays;
		this.hours = userHours;
		this.minutes = userMinutes;
		this.seconds = userSeconds;
		this.type = userType;
		this.interval = userInterval;
		this.time = userTime;

		if (this.interval != 0) {
			this.interval -= 1;
		}
	},
	update: function() {
		var modulo;
		if (this.seconds < 0) {
			modulo = Math.abs(this.seconds);
			this.minutes --;
			this.seconds = 60 - modulo;
		}
		if (this.minutes < 0) {
			modulo = Math.abs(this.minutes);
			this.hours --;
			this.minutes = 60 - modulo;
		}
		if (this.hours < 0) {
			modulo = Math.abs(this.hours);
			this.days --;
			this.hours = 24 - modulo;
		}
	},
	run: function() {
		switch(this.type) {
			case "days":
				this.days -= (1 + this.interval);
				update();
			case "hours":
				this.hours -= (1 + this.interval);
				update();
			case "minutes":
				this.minutes -= (1 + this.interval);
				update();
			case "seconds":
				this.seconds -= (1 + this.interval);
				update();
			default:
				return "config error";
		}
		if (this.days === 0 && this.hours === 0 && this.minutes === 0 && this.seconds === 0) {
			this.stop();
		}
	},
	stop: function() {
		clearInterval(running);
	},
	start: function() {
		running = setInterval(this.run, this.time);
	}
};