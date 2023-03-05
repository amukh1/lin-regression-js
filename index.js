import linearAlgebra from './linearAlgebra.js';
import calculus from './calculus.js';

// x -> 2x, f: R -> R

let xs = [[1,2], [2,4], [3,6], [4,8], [5,10], [6,12], [7,14], [8,16], [9,18], [10,20]]
let wab = [Math.random()*10, Math.random()*10]

// console.log(regression(xs,wab,1000,0.01))

function regression(xs,wab,epoch,lr) {
    for(var i = 0; i<epoch; i++) {
        xs.forEach((ex)=>{
            let x = ex[0]
            let y = ex[1]
            let yhat = (w,b) => w*x + b
            let loss = (w,b) => Math.pow(y - yhat(w,b), 2)
            // console.log(y, yhat)
            // gradient descent with calculus.gradientDescent(fn, n, dim,sl)
            let wab2 = calculus.gradientDescent(loss, 2, 3, lr, wab)
            // console.log(wab2)
            wab = wab2
            // console.log(y, yhat(wab[0], wab[1]))
        })
        }
        return wab
}

// console.log(wab)

export default regression