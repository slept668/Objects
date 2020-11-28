const ol = document.querySelector("ol");
const top5 = [
    {
        "name": "Billy Madison",
        "year": 1995,
        "director": "Tamra Davis",
        "pic": "https://images-na.ssl-images-amazon.com/images/I/51WK5K8X51L.jpg"
    },
    {
        "name": "Happy Gilmore",
        "year": 1996,
        "director": "Dennis Dugan",
        "pic": "https://images-na.ssl-images-amazon.com/images/I/51QNTxblthL._SX342_.jpg"
    },
    {
        "name": "Mr. Deeds",
        "year": 2002,
        "director": "Steven Brill",
        "pic": "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/mr_deeds_2002_800x1200.jpg?itok=DovJsJ9V"
    },
    {
        "name": "You Don't Mess With The Zohan",
        "year": 2008,
        "director": "Dennis Dugan",
        "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/With_the_zohan.jpg/220px-With_the_zohan.jpg"
    },
    {
        "name": "The Longest Yard",
        "year": 2005,
        "director": "Peter Segal",
        "pic": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Longest_yard_ver2.jpg/220px-Longest_yard_ver2.jpg"
    },
];

const template = top5.map(top => `
<li>
    <p>Name: ${top.name}</p>
    <p>Released: ${top.year}</p>
    <p>Director: ${top.director}</p>
    <img src="${top.pic}">
`);

console.log(template);
ol.innerHTML = template.join('');