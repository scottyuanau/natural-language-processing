import {merge, mergeSort} from "../src/client/js/validateForm"


describe("Testing the validation functionality", () => {
    test("Testing the mergeSort() function", () => {
        expect(mergeSort([3,5,77,31,4])).toEqual([3,4,5,31,77]);
    })});