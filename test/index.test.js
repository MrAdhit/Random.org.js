const { describe, it } = require("mocha");
const assert = require('assert');
const { generateInteger, generateIntegerSequences, generateStrings } = require("../src/Random");

describe("Testing generateInteger", () => {
    it("should return array", (done) => {
        generateInteger(1, 5, 5, "Decimal").then((v)=>{
            assert.strictEqual(Array.isArray(v), true);
            done();
        }).catch(done);
    });
    it("should return number", (done) => {
        generateInteger(1, 5, 5, "Decimal").then((v)=>{
            assert.strictEqual(typeof(v[0]), "number");
            done();
        }).catch(done);
    });
});

describe("Testing generateIntegerSequences", () => {
    it("should return array", (done) => {
        generateIntegerSequences(1, 5).then((v)=>{
            assert.strictEqual(Array.isArray(v), true);
            done();
        }).catch(done);
    });
    it("should return number", (done) => {
        generateIntegerSequences(1, 5).then((v)=>{
            assert.strictEqual(typeof(v[0]), "number");
            done();
        }).catch(done);
    });
    it("should return 5", (done) => {
        generateIntegerSequences(1, 5).then((v)=>{
            assert.strictEqual(v.length, 5);
            done();
        }).catch(done);
    });
});

describe("Testing generateStrings", () => {
    it("should return array", (done) => {
        generateStrings(1, 1).then((v)=>{
            assert.strictEqual(Array.isArray(v), true);
            done();
        }).catch(done);
    });
    it("should return string", (done) => {
        generateStrings(1, 1).then((v)=>{
            assert.strictEqual(typeof(v[0]), "string");
            done();
        }).catch(done);
    });
    it("should return 5", (done) => {
        generateStrings(1, 5).then((v)=>{
            assert.strictEqual(v[0].length, 5);
            done();
        }).catch(done);
    });
});