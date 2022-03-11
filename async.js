//async JavaScript

//callbacks

const myPost = [
    {title:"post one",body:"this is post one body"},
    {title:"post two",body:"this is post two body"}
];

function getPost(){
    console.log(myPost);
}

function createPost(post){
    myPost.push(post)
}

getPost();
createPost({title:"post three",body:"this is post three body"})
getPost(); 

//  //set time out 
//  const myPost1 = [
//     {title:"post one",body:"this is post one body"},
//     {title:"post two",body:"this is post two body"}
// ];

 function getPost1(){
     setTimeout(()=>{
     myPost1.forEach((post)=>{
         console.log(post.title);
     })
     console.log(myPost1);
 },1000);
}

function createPost1(post,callback){
    setTimeout(()=>{
        myPost.push(post);
        callback;
    },5000);
    
}


createPost1({title:"post four",body:"this is post four body"},getPost1);

//promises

const myPosts = [
    {title:"post one",body:"this is post one body"},
    {title:"post two",body:"this is post two body"}
];
function getPosts(){
    setTimeout(() => {
        myPosts.forEach((post)=>{
            console.log(post.title)
        })
        console.log(myPosts);
    }, 1000);
}


function createPosts(post){
return new Promise((resolve, reject)=>{
    setTimeout(() => {
        myPosts.push(post);
        const error = false;
        if(!error){
            resolve();
        }else{
            reject("Error something wrong")
        }
    },2000);
})
}

createPosts({title:"post four",body:"this is post four body"}).then(getPost).catch((e)=>{});


