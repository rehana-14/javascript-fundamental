const loadPosts = () =>{
    const url = "https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(response => response.json())
    .then(data => {
        // console.log(data);
        displayPosts(data);
    })
}

// {{
//     "userId": 9,
//     "id": 89,
//     "title": "sint soluta et vel magnam aut ut sed qui",
//     "body": "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
// }}

const displayPosts = (posts=>{
    // console.log(posts);
    // 1.get the post container and empty the container
    const postContainer = document.getElementById("post-container")
    postContainer.innerText = "";
    posts.forEach(post=>{
        // console.log(post);
        // 2. create a element
        const postCard = document.createElement("div");
        postCard.innerHTML = `<div class="post-card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
        </div>`

        // 3. add to the container
        postContainer.appendChild(postCard);
    })
})
loadPosts();
