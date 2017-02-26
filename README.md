# timer
Just a regular timer.

Call Timer.init() to set up Timer with 4 mandatory parameters :
- days
- hours
- minutes
- seconds

You can also set up 3 optional parameters :
- the one you want to decrement : "days", "hours", "minutes" or "seconds"
- by which amount
- every how many milliseconds

Default values for these optional parameters are 
- "seconds"
- 1
- 1000 
Wich is the normal behavior of time

Call Timer.start() to start Timer

Call Timer.stop() to stop Timer

Call Timer.start() to start Timer again

Timer will stop automatically at 0 and change its Timer.status from "running" to "over"
