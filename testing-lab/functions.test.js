const { TestWatcher } = require("@jest/core")
const {returnTwo, greeting, add, multiply, subtract, divide} = require("./functions")

test('should return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test("should return Hello James", () => {
    expect(greeting('James')).toEqual("Hello James")
})

test("should return 3", () => {
    expect(add(1,2)).toEqual(3)
    // expect(add(5,9)).toEqual(14)
})

describe(`Math Functions`,() => {
    test(`should return 4`,() => {expect(add(1,3)).toEqual(4)}) 
    test(`should return 2`, () => {expect(divide(10,5)).toEqual(2)})
    test(`should return 12`, () => {expect(multiply(2,6)).toEqual(12)})
    test(`should return 3`, () => {expect(subtract(6,3)).toEqual(3)})

})