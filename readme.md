[![npm version](https://badge.fury.io/js/Ritchie.svg)](https://www.npmjs.com/package/lin-regression-js)

# lin-regression-js

## Linear Regression in JavaScript

This is a simple linear regression implementation in JavaScript. It uses the [gradient descent](https://en.wikipedia.org/wiki/Gradient_descent) algorithm to find the best fit line for a set of data points and [mean squared error](https://en.wikipedia.org/wiki/Mean_Squared_Error) to calculate the error. 

### Usage

```javascript
const regression = require('lin-regression-js');

regression.gradientDescent(data, weightsbias,iterations, learningRate);
```

The weights and biases can be initialized to random values.

```javascript
const data = [[1,2],[2,4],[3,6],[4,8],[5,10],[6,12],[7,14],[8,16],[9,18],[10,20]];
const weightsbias = [Math.random(), Math.random()];

regression(data, weightsbias, 1000, 0.01); // returns [slope, intercept]
```

## Contributing

You can contribute to the project by making a pull request on [GitHub](https://github.com/amukh1/lin-regression-js).

## Credits

### Amukh1.

## Built With

* [Node](https://nodejs.org/)
* [Assembly](http://x86asm.net/)
* [Love](https://amukh1.dev)

## Authors

* **Amukh1** - [Github](https://github.com/amukh1)

See also the list of [contributors](https://github.com/amukh1/lin-regression-js/contributors) who participated in this project.

## License

[MIT License](https://mit-license.org/2022) © Amukh1