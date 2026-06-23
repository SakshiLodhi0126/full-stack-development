let posts = [
    { postId: 1, likes: 100 },
    { postId: 2, likes: 200 }
];

let totalLikes = posts.reduce(
    (total, post) => total + post.likes,
    0
);

console.log(totalLikes);