let repositories = [
    { repo: "A", stars: 100 },
    { repo: "B", stars: 200 }
];

let totalStars = repositories.reduce(
    (total, repository) => total + repository.stars,
    0
);

console.log(totalStars);