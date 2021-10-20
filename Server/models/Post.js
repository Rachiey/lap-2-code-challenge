const db = require('../dbConfig/init');

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
}