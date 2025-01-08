const posts = [
    {
        title: "Google Chrome",
        content: "Google Chrome é um navegador web desenvolvido pela Google",
    },
    {
        title: "Mozilla Firefox",
        content: "Mozilla Firefox é um navegador web desenvolvido pela Mozilla Foundation",
    },
    {
        title: "Opera",
        content: "Opera é um navegador web desenvolvido pela Opera Software",
    }
];

const postsContainer = document.getElementById("posts");

for (var i = 0; i < posts.length; i++) {
    const postData = posts[i];

    const article = document.createElement("article");
    article.classList.add("article");

    const title = document.createElement("h2");
    title.classList.add("article-title");
    const titletext = document.createTextNode(postData.title);
    title.appendChild(titletext);
    article.appendChild(title);

    const content = document.createElement("p");
    const contentText = document.createTextNode(postData.content);
    content.appendChild(contentText);
    article.appendChild(content);

    postsContainer.appendChild(article);
}