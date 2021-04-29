const fetch = require("node-fetch");

class Random {
    constructor(){}

    /**
     * Generates true random integers within a user-defined range
     * @param {number} min The smallest value allowed for each integer.
     * @param {number} max The largest value allowed for each integer.
     * @param {number} [amount] The number of integers requested.
     * @param {("Hex" | "Octal" | "Decimal" | "Hexadeximal")} [format] The format that will be used to print the numbers, i.e., binary, octal, decimal or hexadecimal.
     * @returns {Promise<Array<number>>}
     */
    async generateInteger(min, max, amount, format){
        if([min, max].includes(undefined)) throw new Error("Min or Max number is not defined")
        if(min >= max) throw new Error("Max number is bigger than Min!");
        format = ((format != undefined) ? format.toLowerCase() : undefined);
        format = ((format == undefined) ? 10 : ((format == "hex") ? 2 : ((format == "octal") ? 8 : ((format == "decimal") ? 10 : ((format == "hexadecimal") ? 16 : 10)))));
        amount = ((amount == undefined) ? 1 : amount);

        return new Promise((resolve, reject) => {
            fetch(`https://www.random.org/integers/?num=${amount}&min=${min}&max=${max}&col=1&base=${format}&format=plain&rnd=new`)
                .then(res => res.text())
                .then(text=>{
                    text = text.split("\n").filter((v) => v != "").map((v) => parseInt(v));
                    
                    resolve(text);
                })
                .catch(reject);
        });
    }

    /**
     * Generates uniform or multiform sequences of true random integers within user-defined ranges.
     * @param {number} min The lower bound of the interval (inclusive).
     * @param {number} max The upper bound of the interval (inclusive).
     * @returns {Promise<Array<number>>}
     */
    async generateIntegerSequences(min, max){
        if([min, max].includes(undefined)) throw new Error("Min or Max number is not defined")
        if(min >= max) throw new Error("Max number is bigger than Min!");

        return new Promise((resolve, reject) => {
            fetch(`https://www.random.org/sequences/?min=${min}&max=${max}&col=1&format=plain&rnd=new`)
                .then(res=>res.text())
                .then(text=>{
                    text = text.split("\n").filter((v) => v != "").map((v) => parseInt(v));
                    
                    resolve(text);
                })
                .catch(reject);
        });
    }

    /**
     * Generates true random strings.
     * @param {number} amount The number of strings requested.
     * @param {number} length The length of the strings. All the strings produced will have the same length.
     * @param {boolean} [enableNumber] Determines whether digits (0-9) are allowed to occur in the strings.
     * @param {boolean} [enableUppercase] Determines whether uppercase alphabetic characters (A-Z) are allowed to occur in the strings.
     * @param {boolean} [enableLowercase] Determines lowercase alphabetic characters (a-z) are allowed to occur in the strings.
     * @param {boolean} [enableUnique] Determines whether the strings picked should be unique (as a series of raffle tickets drawn from a hat) or not (as a series of die rolls)res.status(200).send('ok :)')
     * @returns {Promise<Array<string>>}
     */
    async generateStrings(amount, length, enableNumber = true, enableUppercase = true, enableLowercase = true, enableUnique = true){
        if(amount <= 0) throw new Error("The amount params must be an number in the [1,1e4] interval!");
        if(length <= 0 || length > 50) throw new Error("The length params must be an number in the [1,50] interval!");
        
        if(![enableNumber, enableUppercase, enableLowercase, enableUnique].includes(true)) throw new Error("At least one of the number, uppercase or lowercase params must be true!");

        return new Promise((resolve, reject) => {
            fetch(`https://www.random.org/strings/?num=${amount}&len=${length}&digits=${((enableNumber) ? "on" : "off")}&upperalpha=${((enableUppercase) ? "on" : "off")}&loweralpha=${((enableLowercase) ? "on" : "off")}&unique=${((enableUppercase) ? "on" : "off")}&format=plain&rnd=new`)
                .then(res=>res.text())
                .then(text=>{
                    text = text.split("\n").filter((v) => v != "");

                    resolve(text);
                })
        })
    }

    /**
     * This allows you to examine your quota at any point in time. The quota system works on the basis of IP addresses. Each IP address has a base quota of 1,000,000 bits. When your client makes a request for random numbers (or strings, etc.), the server deducts the number of bits it took to satisfy your request from the quota associated with your client's IP address.
     * @returns {Promise<number>}
     */
    async getQuota(){
        return new Promise((resolve, reject) => {
            fetch("https://www.random.org/quota/?format=plain")
            .then(res=>res.text())
            .then(res=>resolve(parseInt(res)))
            .then(reject);
        })
    }
}

module.exports = new Random();