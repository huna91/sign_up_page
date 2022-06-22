let arr1=[["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"]];

//console.log(arr1.find(o=>o=="e"));
let arr3 = new Array();


let arr2=[{id:"yun",Pw:"aa"},{id:"ha",Pw:"bb"},{id:"yeung",Pw:"cc"}]
let check='ha';
for (const key in arr2) {
   // console.log(key);
    if (check==arr2[key].id) {
        //console.log("빙고");
        
    }
}
function loadJson(){
    return fetch("user_data.json")
    .then((res)=>res.json())
    .then((json)=>json.user)
    .catch((rej)=>{
    rej
    });
}



loadJson().then((user)=>{
    for (const key in user) {
            console.log(user[key].name)
    }
})