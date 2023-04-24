//conditonal and looping stetemnts

//1>If-Else
//2>switch
//3>for loop
//4>while loop
//5>do-while loop


console.log("good morning")

//switch statememnts

let day=new Date().getDay();
console.log(day);
day=0;
switch(day){
    case 1:console.log("Monday");
    break;
    case 2:console.log("tuesday");
    break;
    case 3:console.log("Wensday");
    break;
    case 4:console.log("Thursday");
    break;
    case 5:console.log("Fridy");
    break;
    case 6:console.log("Saturday");
    break;
    case 0:console.log("Sunday");
    break;
    default:
        console.log("Enter proper day");
        break;
    

    

}
