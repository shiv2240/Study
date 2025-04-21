// 20 floors
// 2 lifts
// (button up and down)
// most optimised for fastest

class Lift{
    constructor(total, curr = 1){
        this.total = total
        this.curr = curr;
        this.dir = 0;
        this.arr = [];
    }
    buttonClick(floor){
        if ( floor>=1 && floor <= this.total){
            this.arr.push(floor)
    }else{
        console.log("Floor do not exist")
        }
    }
    direction(){
        if (this.arr.length>0){
            const newFloor = this.arr[0];
            if (newFloor>this.curr){
                this.dir = 1;
                this.curr++;
                console.log(`Lift is going to ${this.curr}`)
            }else if (newFloor < this.curr){
                this.dir = -1;
                this.curr--;
                console.log(`Lift is going to ${this.curr}`)
            }else{
                this.arr.shift()
                this.dir = this.arr.length>0? this.arr[0]> this.curr?1:-1:0
            }
        }else{
            this.dir = 0;
            console.log(`Lift is IDle`)
        }
    }
    start(){
        setInterval(()=>{
            this.direction()
        },1000);
    }
}

const check = new Lift(20)
check.buttonClick(5)
check.buttonClick(7)
check.buttonClick(2)
check.buttonClick(12)
check.start();
