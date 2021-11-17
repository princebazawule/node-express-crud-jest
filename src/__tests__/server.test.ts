const request = require("supertest")
const router = require("../app")

interface Book {
  userId: Number
  id: Number
  title: String
  author: String
}

describe("Testing endpoints", () => {
    describe("For All /books endpoint", () => {
      test("A GET request should return 200", async () => {
        const response = await request(router).get("/books")
        expect(response.statusCode).toBe(200)
      })
    })

  describe("For the Single book endpoint", () => {
    test("A GET request should return 200", async () => {
      const id = 1
      const response = await request(router).get(`/books/${id}`)
      expect(response.statusCode).toBe(200)
    })
  })

  describe("Adding a new book", () => {
    const book: Book = {
      userId: 1,
      id: 10,
      title: "the prince bix",
      author: "pee bee",
    }

    describe("For a request to POST /books:", () => {
      test("- the status code should return 200", async () => {
        const res:any = await request(router).post("/books/").send(book)
        expect(res.statusCode).toBe(200)
      })

      it("- the response should be an object", async () => {
        const res:any = await request(router)
        .post("/books/")
        .send(book)
        
        expect(res.body)
        .toMatchObject(book)
      })

      it("- the response title should match the test data", async () => {
        const res:any = await request(router)
        .post("/books/")
        .send(book)

        expect(res.body.id)
        .toEqual(book.id)
      })

      it("- the response author should match the test data", async () => {
        const res:any = await request(router)
        .post("/books/")
        .send(book)

        expect(res.body.author)
        .toEqual(book.author)
      })
    })



    describe("For a request to POST /books:", () => {
      test("- the status code should return 200", async () => {
        const response = await request(router).post("/books/").send(book)

        expect(response.statusCode).toBe(200)
      })

      it("- the response should be an object", async () => {
        const book = { id: 10, title: "the prince bix", author: "pee bee" }
        const response = await request(router).post("/books/").send(book)

        expect(typeof response.body === "object").toBeTruthy()
      })

      it("- the response title should match the test data", async () => {
        const book = { id: 10, title: "the prince bix", author: "pee bee" }
        const response = await request(router).post("/books/").send(book)

        expect(response.body.id).toEqual(book.id)
      })

      it("- the response author should match the test data", async () => {
        const book = { id: 10, title: "the prince bix", author: "pee bee" }
        const response = await request(router).post("/books/").send(book)

        expect(response.body.author).toEqual(book.author)
      })
    })
  })
})
