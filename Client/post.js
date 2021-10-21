async function getPostById(idNum){
    try {
        const response = await fetch(`http://localhost:3000/posts/${idNum}`);
        const post = await response.json();
        return post
    } catch (err) {
        console.warn(`Error retrieving post: ${err}`);
    }
    
};
async function renderPost(id) {
    // Get the HTML elements
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const date = document.getElementById('date');
    const postBody = document.getElementById('postBody');
    // Get the post Data
    const postData = await getPostById(id);

    // Insert post data to HTML elements
    title.textContent = postData.title;
    author.textContent = postData.author;
    date.textContent = postData.date;
    postBody.textContent = postData.body;
};

document.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get("id");
    renderPost(postId);
})