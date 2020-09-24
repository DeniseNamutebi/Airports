const Bag = require("./Bag.js")
const Passenger = require("./Passenger.js")


describe("Passenger", () => {
    test("Passsenger", () => {
        const denise = new Passenger("Denise")
        expect(denise.name).toEqual("Denise")
    })

    test("has bags", () => {
        const John = new Passenger("John")
        const JohnsCabinCase = new Bag(11)
        const JohnBigCase = new Bag(28)
        John.addBag(JohnsCabinCase)
        John.addBag(JohnBigCase)
        expect(John.bags.length).toBe(2)
    })
})