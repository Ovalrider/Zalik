import { Greedy } from "./Greedy"



describe('Testing Greedy algo', () => {
    let greed : Greedy
    beforeEach(() => {
        greed = new Greedy(92)
    })
    it('should be able to create Greedy object', () => {
        expect(greed).toBeTruthy()
    })
    it('92 must be equal to 64+16+8+4', () => {
        greed.calculate()
        let sum = 0
        let noms = [64,16,8,4]
        expect(noms).toEqual(greed.total_nominals)
        //64: 1 одиниць, 16: 1 одиниць, 8: 1 одиниць, 4: 1 одиниць,
    })

})