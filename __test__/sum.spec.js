import {sum} from "../src/client/js/formHandler"


describe("Testing the validation functionality", () => {
    test("Testing the sum() function", () => {
        expect(sum(1,3)).toEqual(4);
    })});