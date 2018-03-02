let add = (function () {
    let sum = 0;
    function increase (num){
        sum += num;
        return increase;
    }
    increase.toString = () => sum.toString()

    return increase;
  })();

console.log(add(15)(12)(100) + '');