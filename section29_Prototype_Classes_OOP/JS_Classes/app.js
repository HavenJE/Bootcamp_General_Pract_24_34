// Classes are capitalised to indidcate that they are Classes 
// Class contains a constructor => which is a function that will immediately execute whenver a class is created. 


class Color {
    constructor(r,g,b,name) {
        console.log('Inside constructor')
        console.log(r,g,b,name)
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name; 
    }
    // Now, let's make a function - this function only works on the Class, not the individual objects 
    rgb(){
        const {r,g,b} = this; 
        return `rgb(${r}, ${g}, ${b})`
    }

    rgba(a = 0.9){
        return `rgba(${this.rgb()}, ${a})`
    }
}

const c1 = new Color(255, 67, 89, "red");  

// c1.rgb()
// c1.rgba()