# timer
This Timer allows you to choose which time unit is to be decreased and at what pace, in the form of a Javascript object.
Ex : displaying a week of game time in a game where a game day passes every real hour takes three lines of code.
Timer.init(7, 0, 0, 0, "days", 1, 3600000);
Timer.start();
setInterval(yourDisplay, yourInterval);

1- Call Timer.init() to set up your Timer with 4 mandatory parameters :
- days
- hours
- minutes
- seconds

You can also set up 3 optional parameters :
- the time unit you want to decrement : "days", "hours", "minutes" or "seconds"
- by which amount
- at what pace, in milliseconds

Default values for these optional parameters are 
"seconds", 1, 1000 
Wich is the classic behavior of time. 1 second passes every 1000 milliseconds.
You may want a Timer day to pass every hour, or 30 Timer minutes every 120 seconds, etc.
/!\ Last parameter has to be MILLISECONDS /!\

2- Call Timer.start() to start Timer

3- Call Timer.stop() to stop Timer

4- Call Timer.start() to start Timer again

5- Call Timer.reset() to give the Timer its initial values. Also it stops it. You'll need to call Timer.start() again.

Timer will stop automatically at 0 and change its Timer.status from "running" to "over".
Timer.init() and Timer.reset() will change Timer.status back to "running".

There is no display function in this object. To display the Timer values you'll have to call its properties.
There is no "time acceleration" feature, which means only the time unit you chose and larger ones will decrement. Smaller ones won't be accelerated in decrementation, they won't decrement at all. In the example above, seconds and minutes WILL NOT DECREMENT. Only days will.
