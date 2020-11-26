let database=[{
    username:"Ali",
    password:"strongpass"
},
{
    username:"Khan",
    password:"notstrongpass"
}];

let newsfeed=[{
    username:"Khan",
    timeline:"Helloooo there"
},
{
    username:"Asad",
    timeline:"Hi everyone"
}
];
let usernamePrompt=prompt("What id your username");
let passPrompt=prompt("What is your password ");

function isUserValid(user,pass){
   for(let i=0;i<database.length;i++){
    if(user===database[0].username && pass===database[0].password){
        return true;
    }
   }
   return false;
}

function signIn(user,pass){
    if(isUserValid(user,pass)){
        console.log(newsfeed);
    }else{
        alert("Sorry Wrong username or password");
    }
}

signIn(usernamePrompt,passPrompt);