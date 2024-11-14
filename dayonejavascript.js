

//variables and Data Types
let full_name='Sanga Venkata Ramana'
console.log(full_name)

let Hobbies=["Solving riddles", "Playing chess", "Listening to music", "Cricket", "Watching tech news"];
console.log('my hobbies:',Hobbies)

let goals=['become proficient in react and js','developing a full stack project','improve problem solving']
console.log('my goals:',goals)



//if-else

let age=21;

if(age >= 18){
  console.log('your are eligible for  vote.');
}else{
  console.log('your are not eligible for vote.');
}



//Experiencelevel
let experienceLevel='Beginner';
if(experienceLevel === 'Beginner'){
  console.log('your are beginner.keep learning and practicing');
}else if(experienceLevel === 'Intermediate'){
  console.log('your have some experience.keep building on skills');
}else if(experienceLevel === 'advanced'){
  console.log('your are advanced.keep work on projects ');
}else{
  console.log("Experience level not specified");
}










//loops

let hobbies2=["Solving riddles", "Playing chess", "Listening to music", "Cricket", "Watching tech news"];
for(i=0; i < hobbies2.length; i++){
  console.log('Hobby' + (i + 1) + ':' + hobbies2[i]);
}



let hobbies1 = ["Solving riddles", "Playing chess", "Listening to music", "Cricket", "Watching tech news"];
let goals1 = ["Become proficient in React JS", "Develop a full-stack project", "Contribute to open-source", "Improve problem-solving skills"];

let choice = prompt("Type `hobbies1` to view hobbies or `goals1` to view goals:");

if (choice === "hobbies1") {
    console.log("Your Hobbies:");
    for (let i = 0; i < hobbies1.length; i++) {
      console.log('hobby'+(i+1)+':'+ hobbies1[i]);
    }
} else if (choice === "goals1") {
    console.log("Your Goals:");
    for (let i = 0; i < goals1.length; i++) {
      console.log('goals'+(i+1)+':' + goals1[i]);
    }
} else {
    console.log("Invalid choice. Please enter 'hobbies1' or 'goals2'.");
}


let userName=prompt("please enter your name");
alert('Hello, '+userName+"  " +"Welcome to profile page.");

document.getElementById("greeting").innerText="Hello,"+ userName + "Welcome to profile page.";






