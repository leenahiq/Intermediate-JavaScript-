const myPost =[
  
    { title: 'post one', body: 'this is post one body' },
    { title: 'post two', body: 'this is post two body' }  
];

function getPost(){
    setTimeout(() => {
        myPost.forEach((post)=>{
            console.log(post.title);
        })
        console.log(myPost)
    }, 1000);

}
function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
           myPost.push(post)
           const error = false ;
           if(!error){
               resolve();
           } else{
               reject("Error something wrong")
           }
        },2000);
    })

}

async function init(){
try{
    await createPost({title:"post three",body:"this is post three body"});
    getPost();
}catch (err){
    console.log(err)
}

 }
