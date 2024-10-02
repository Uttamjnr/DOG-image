// let url ="https://catfact.ninja/fact";

// fetch(url)

// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log("data=", data.fact);
// })
// .catch((err){
//     console.log("Error =", err);
// })

let url = "https://dog.ceo/api/breeds/image/random";
let btn = document.querySelector("button");

btn.addEventListener("click",async ()=>{
    let data = await getImage();
    let store= document.querySelector("#image");
    store.setAttribute("src", data);
})

async function getImage() {
    try{

        let res = await axios.get(url);
        // console.log(res);
        return res.data.message;
    }
    catch(err){
        console.log("The error was :", err);
    }
}

