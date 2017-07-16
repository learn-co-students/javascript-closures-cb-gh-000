function closuretest(argument) {
    function checkArgument() {
        if (argument) {
            console.log(argument);
        } else {
            console.log('there\'s no any argument');
        }
    }

    return checkArgument
}

const variable = closuretest("test");
variable();
