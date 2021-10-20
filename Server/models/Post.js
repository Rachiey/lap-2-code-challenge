const db = require('../dbConfig/init');

module.exports = class Post {
    constructor(data){
        this.id = data.id;
        this.title = data.title;
        this.body = data.body;
        this.date = data.date;
        this.author = data.pseudonym;
    };

    static get all(){
        return new Promise (async (res, rej) => {
            try {
                const postsData = await db.query(`SELECT posts.*, authors.pseudonym
                                                    FROM posts 
                                                    INNER JOIN authors on posts.author_id = authors.id;`);
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
                const postData = await db.query(`SELECT posts.*, authors.pseudonym
                                                    FROM posts
                                                    INNER JOIN authors ON posts.author_id = authors.id
                                                    WHERE posts.id = $1;`, [ id ]);
                const post = new Post(postData.rows[0]);
                res(post)
            } catch (err) {
                console.log(err);
                rej("Error retrieving post");
            }
        })
    }
}