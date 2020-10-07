class BMI {

    constructor(weight, height){
        this.weight = weight
        this.height = height
    }

    calculateBMI(){
        return this.weight / (this.height ** 2)
    }
}

module.exports = BMI;