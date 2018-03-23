# Casino Betting Simulator
[Running here on Heroku for demo](https://enigmatic-brook-29267.herokuapp.com/simulate?balance=50&unit=10&rounds=2)
### Work in progress

This project involves a lot of messy code right now, but I'm fairly happy with what it does for this 'alpha' version. The refactoring can come soon as I build in a few more features.

This web app runs on Node.js and allows you to create a 'session' of betting on a strategy, like the Martingale in this version. Enter your balance, your betting unit, and how many rounds you will be playing. The app will then simulate this strategy many, many times to determine how likely you are to walk out of the casino with any profit if you do not deviate from the strategy. It also provides the average profit for success, and the average loss for a failure.

I believe some of the calculations (see simulators.js for the code) are a bit wonky and could be improved in places, but there's a solid foundation. The code isn't really able to be built upon with more strategy options yet (like the Fibonacci which involves a counter and scale) but refactoring in another release will handle this.
