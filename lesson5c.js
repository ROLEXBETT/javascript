//Exporting modules
//We export modules so that we can use/utilise them in other files/modules in our program

export const calculator = (x, y) =>{
    let difference = x-y
    
    console.log("The difference of the two number is: ", difference)
}

export const simpleinterest = (principle, rate, time) =>{
    let si = (principle* rate * time)
    console.log("The simple interestgained is:",si)
};

const bmi = (weight, height) =>{
    let answer = weight / height **2
    console.log("The bmi of the person is", answer)
};

export {bmi}