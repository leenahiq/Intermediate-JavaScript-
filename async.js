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

 //set time out 
 const myPost1 = [
    {title:"post one",body:"this is post one body"},
    {title:"post two",body:"this is post two body"}
];

 function getPost(){
     setTimeout(()=>{
     myPost1.forEach((post)=>{
         console.log(post.title);
     })
     console.log(myPost1);
 },1000);
}

// function createPost(post,callback){
//     setTimeout(()=>{
//         myPost.push(post);
//         callback();
//     },5000);
    
// }


// createPost({title:"post four",body:"this is post four body"},getPost)



