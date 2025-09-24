const loadData = ()=> {
    fetch('https://jsonplaceholder.typicode.com/todos/1')       //give a promise
.then((response) => response.json())      // make the promise to json 
.then((data) => console.log(data));      // keep the json in data variable and give the actual data as an object
}

// const loadPost = () =>{
//     const url = 'https://jsonplaceholder.typicode.com/posts'
//     fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         // console.log(data);
//         displayPost(data);
//     });
// };

// const displayPost = (posts) =>{
//     // console.log(posts);
//     posts.forEach((post) => {
//         console.log(post)
//     })
// }