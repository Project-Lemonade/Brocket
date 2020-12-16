# Brocket Bot for Project Lemonade
This will be a simple bot for Project Lemonade. For now it will cointain a Poll creation system.  

## Syntax

### To make new polls (The features that are not included in the bot yet are marked with "~~"):

`!newpoll "poll name" [Option 1, Option 2] --yn|yesno --num|numbers--time|timeout 5 --mult|multiple --rxn|reactions --maybe|idk --pub|public --role "role" --lo|leaveopen|dontcloseearly --color 2555834`


* `yn`: convert to a yes/no poll (has no effect if more than two options)
* `num`: convert to a number poll (1,2,3,4) (has no effect if more than 10 options) 
* ~~`lock`: answers cannot be edited even if there is time left. If everyone answers, poll ends immediately.~~
* ~~`blind`: answers are private (answer with DMs, blind ballot style)~~
* `time #`: # = time in minutes before poll ends (defaults to 30)
* ~~`multiple`: allows for voting for multiple items (rather than just one each)~~
* ~~`rxn`: vote by reactions instead of messages (enables mult)~~
* `maybe`: adds a 'maybe' option in addition to other choices
* ~~`role "role"`: restricts voting to users with a matching role~~
* ~~`leaveopen`: Leave the poll open if there's time left, even if everyone in the server has voted.~~
* `color #`: # = [RGB integer color code]

### To vote:

`>vote #PollID Option`

* `#PollID` Optional if only one poll running. The ID for the poll being voted in.
* `Option` The option to be voted for.

### To request results:

`>results #PollID --users|detail --chart|graph` ("users|detail"  and "chart|graph" flag are not working yet)

* `#PollID` Optional if only one poll running. The ID for the poll results are being requested for.
* ~~`users`: Show who voted for what~~
* ~~`chart`: generate a chart when the poll ends~~