process.env.NODE_ENV = 'test';

let chai = require('chai')
const Suite = require('mocha')

let functions = require("../../app/func")



suite("Test Say Hello", function(){

    // beforeEach(function() {
    //     console.log("Hello");
    // })

    test("Test sayHello", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })

    test("Test sayNo", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })

    test("Test sayBye", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })
})

suite("Test Say Haha", function(){

    // beforeEach(function() {
    //     console.log("Hello");
    // })

    test("Integrate sayHello", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })

    test("Integrate sayNo", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })

    test("Integrate sayBye", function(){
        let msg =  functions.sayHello();
        chai.assert.equal("Hello World!", msg, "Wrong message returned!")
    })
})