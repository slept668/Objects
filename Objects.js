var top5 = [
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

var array0 = [
    top5[0].name, top5[0].year, top5[0].director, top5[0].pic
];
var array1 = [
    top5[1].name, top5[1].year, top5[1].director, top5[1].pic
];
var array2 = [
    top5[2].name, top5[2].year, top5[2].director, top5[2].pic
];
var array3 = [
    top5[3].name, top5[3].year, top5[3].director, top5[3].pic
];
var array4 = [
    top5[4].name, top5[4].year, top5[4].director, top5[4].pic
];

const olContent = `
    <section>
        <li>
            <ol>${array0[0]}</ol>
            <ol>Year: ${array0[1]}</ol>
            <ol>Director: ${array0[2]}</ol>
            <img src=${array0[3]}>
        </li>
            <li>
            <ol>${array1[0]}</ol>
            <ol>Year: ${array1[1]}</ol>
            <ol>Director: ${array1[2]}</ol>
            <img src=${array1[3]}>
        </li>
            <li>
            <ol>${array2[0]}</ol>
            <ol>Year: ${array2[1]}</ol>
            <ol>Director: ${array2[2]}</ol>
            <img src=${array2[3]}>
        </li>
            <li>
            <ol>${array3[0]}</ol>
            <ol>Year: ${array3[1]}</ol>
            <ol>Director: ${array3[2]}</ol>
            <img src=${array3[3]}>
        </li>
        <li>
            <ol>${array4[0]}</ol>
            <ol>Year: ${array4[1]}</ol>
            <ol>Director: ${array4[2]}</ol>
            <img src=${array4[3]}>
        </li>
    </section>
`;

const ol = document.querySelector('ol');
ol.innerHTML = olContent;