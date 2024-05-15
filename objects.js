
const vector={
    name:"vector",
    gender:"male",
    quality:"SmartBoy",
    age:18,
    move:"dance"
};

console.log(vector.move);
console.log(vector.name+" "+ vector.quality+" "+ vector.age+" "+vector.move);
console.log("/////////////////////////")
console.log(vector["move"]);
console.log(vector["name"]+" "+vector["quality"]+" "+vector["age"]+" "+vector["movectore"]);

delete vector.age;
delete vector["move"];

let ans="";
for(let i in vector){
    ans+=vector[i]+" ";
}
console.log("///////////////////////")
console.log(ans);
console.log("///////////////////////")
console.log(ans);
    
