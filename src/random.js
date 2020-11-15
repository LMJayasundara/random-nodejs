exports.random = (base, fixedNum) =>{
    fixedNum = typeof fixedNum !== 'undefined' ? fixedNum : Math.random().toString().length;
    base = typeof base !== 'undefined' ? base : 1;
    return Number((Math.random()*base).toFixed(fixedNum));
}

exports.bool = (thresholdNum) => { 
    thresholdNum = typeof thresholdNum !== 'undefined' ? thresholdNum : 0.5;
    return Math.random() < thresholdNum; 
}

exports.intnum = (min, max) => { 
    min = typeof min !== 'undefined' ? min : 0;
    max = typeof max !== 'undefined' ? max : 1;
    return Math.round(Math.random() * (max - min) + min);
}

exports.floatnum = (min, max, fixedNum) => { 
    min = typeof min !== 'undefined' ? min : 0;
    max = typeof max !== 'undefined' ? max : 1;
    fixedNum = typeof fixedNum !== 'undefined' ? fixedNum : Math.random().toString().length;
    return Number((Math.random() * (max - min) + min).toFixed(fixedNum));
}

exports.option = (options) => { 
    return options[Math.floor(Math.random() * options.length)]
}

exports.multiples = (min, max, mul) => {
    min = typeof min !== 'undefined' ? min : 0;
    max = typeof max !== 'undefined' ? max : 1;
    mul = typeof mul !== 'undefined' ? mul : 0.1;
    return Math.ceil((Math.random() * (max - min) + min) / mul) * mul;
}

exports.capital = () => {
    return String.fromCharCode(65+Math.floor(Math.random() * 26))
}

exports.simple = () => {
    return String.fromCharCode(97+Math.floor(Math.random() * 26))
}

exports.words = (words) => {
    return words[Math.floor(Math.random()*words.length)]
}