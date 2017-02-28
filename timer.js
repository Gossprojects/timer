
var running, timerSelf;
InitialValues = {days:"", hours:"", minutes:"", seconds:"", type:"", interval:"", time:""};

Timer = {
	days: "Nombre de jours non défini",
	hours: "Nombre d'heures non défini",
	minutes: "Nombre de minutes non défini",
	seconds: "Nombre de secondes non défini",
	type: "seconds",
	interval: 0,
	time: 1000,
	status: "running",
	init: function(userDays, userHours, userMinutes, userSeconds, userType = "seconds", userInterval = 0, userTime = 1000) {
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

		InitialValues.days = userDays;
		InitialValues.hours = userHours;
		InitialValues.minutes = userMinutes;
		InitialValues.seconds = userSeconds;
		InitialValues.type = userType;
		InitialValues.interval = userInterval;
		InitialValues.time = userTime;

		this.status = "running";
	},
	update: function() {
		var modulo;
		if (timerSelf.seconds < 0) {
			modulo = Math.abs(timerSelf.seconds);
			timerSelf.minutes --;
			timerSelf.seconds = 60 - modulo;
		}
		if (timerSelf.minutes < 0) {
			modulo = Math.abs(timerSelf.minutes);
			timerSelf.hours --;
			timerSelf.minutes = 60 - modulo;
		}
		if (timerSelf.hours < 0) {
			modulo = Math.abs(timerSelf.hours);
			timerSelf.days --;
			timerSelf.hours = 24 - modulo;
		}
	},
	run: function() {
		switch(timerSelf.type) {
			case "days":
				timerSelf.days -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "hours":
				timerSelf.hours -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "minutes":
				timerSelf.minutes -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			case "seconds":
				timerSelf.seconds -= (1 + timerSelf.interval);
				timerSelf.update();
				break;
			default:
				return "config error";
		}
		if (timerSelf.days === 0 && timerSelf.hours === 0 && timerSelf.minutes === 0 && timerSelf.seconds === 0) {
			timerSelf.stop();
			timerSelf.status = "over";
		}
	},
	stop: function() {
		clearInterval(running);
	},
	start: function() {
		timerSelf = this; /* bringing the object into setInterval's scope */
		running = setInterval(this.run, this.time);
	},
	reset: function() {
		this.days = InitialValues.days;
		this.hours = InitialValues.hours;
		this.minutes = InitialValues.minutes;
		this.seconds = InitialValues.seconds;
		this.type = InitialValues.type;
		this.interval = InitialValues.interval;
		this.time = InitialValues.time;
		this.status = "running";
		this.stop();
	}
};
