const db = require('../dbConfig/init');

function getOrdinal(day) {
    // Gives the superscript ordinal for the given day of the month
    if (day > 3 && day < 21) return 'th';
    switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function getCurrentDate(){
    // Gets current date in format dd[th/st/nd/rd] Month yyyy e.g. 20th October 2021
    const day = new Date().getDate();
    const month = new Date().toLocaleString('default', {month: 'long'});
    const year = new Date().getFullYear();
    return `${day}${getOrdinal(day)} ${month} ${year}`;
}

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.date = data.date;
        this.author = data.author;
    };

    static get all(){
        return new Promise (async (res, rej) => {
            try {
                const postsData = await db.query(`SELECT * FROM posts;`);
                const posts = postsData.rows.map(p => new Post(p));
                res(posts);
            } catch (err) {
                console.log(err);
                rej("Error retrieving posts");
            }
        })
    }

    static findById(id){
        return new Promise (async (res, rej) => {
            try {
                const postData = await db.query(`SELECT * FROM posts WHERE posts.id = $1;`, [ id ]);
                const post = new Post(postData.rows[0]);
                res(post)
            } catch (err) {
                console.log(err);
                rej("Error retrieving post");
            }
        })
    }

    static create(postData){
        return new Promise (async (res, rej) => {
            try{
                const { title, body, author } = postData;
                const date = getCurrentDate();
                const query = {
                    text: 'INSERT INTO posts (title, body, date, author) VALUES ($1, $2, $3, $4) RETURNING *',
                    values: [title, body, date, author]
                };
                let newPost = await db.query(query);
                res(newPost.rows[0]);
            } catch (err) {
                console.log(err);
                rej("Error creating post");
            }
        })
    }
}