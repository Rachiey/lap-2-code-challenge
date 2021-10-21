describe('posts endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(port, () => console.log(`Test server running on port ${port}`))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    });

    it('should return a list of all posts in database', async () => {
        const res = await request(api).get('/posts');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });

    it('should return a specific post', async () => {
        const res = await request(api).get('/posts/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.title).toEqual("Test post 1");
    });

    it('should create a new post', async () => {
        const testPost = {
            title: "Test post 3",
            body: "woah another test post!",
            author: "Dave"
        };
        const res = await request(api)
            .post('/posts')
            .send(testPost);
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("id");
    })
})