export class Greedy{
    nominals: number[] = [64,32,16,8,4,2,1];
    sum!: number
    total_nominals: number[] = []
    nominals_count: number[] = [0,0,0,0,0,0,0]
    constructor(sum: number){
        this.sum = sum
    }
    calculate(){
        for(let i = 0; i < this.nominals.length; i++){
            while(this.sum >= this.nominals[i]){
                this.sum -= this.nominals[i]
                this.total_nominals.push(this.nominals[i])
                this.nominals_count[i]++
            }
            
        }
    }
}