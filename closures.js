var tick = (function() {
    var contador = 0;

    return function() {
        console.log(contador++);
    }

})();

tick();
tick();
tick();