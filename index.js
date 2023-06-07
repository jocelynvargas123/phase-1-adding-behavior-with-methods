class Cat {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says meow!`
    }
}

class Dog {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
 
class Bird {
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
    speak(sex){
        (sex instanceof Bird)
        if( this.sex !== 'male'){
            return `${this.name} says squawk!`
        } else if (this.sex !== 'female') {
            return `It\'s me! ${this.name}, the parrot!`
        }
        
    }
}

