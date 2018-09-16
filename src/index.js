const ZERO_DEGREES_CELCIUS = 32;
const CEL_TO_FAHR_FACTOR = 9/5;

module.exports = function warmup(temperature) {
    return temperature * CEL_TO_FAHR_FACTOR + ZERO_DEGREES_CELCIUS;
};
