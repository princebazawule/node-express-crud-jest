test("initialising...", async () => {
  expect(true).toBe(true)
})


// const request = require("supertest")
// const app = require("./app")


// // done

// describe("1- Test the root path", () => {
//   test("1- It should respond to the GET method", (done) => {
//     request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(200)
//         done()
//       })
//   })
// })


// // promise

// describe("2- Test the root path", () => {
//   test("2- It should respond to the GET method", () => {
//     return request(app)
//       .get("/")
//       .then((response) => {
//         expect(response.statusCode).toBe(200)
//       })
//   })
// })


// // async/await

// describe("3- Test the root path", () => {
//   test("3- It should respond to the GET method", async () => {
//     const response = await request(app).get("/")
//     expect(response.statusCode).toBe(200)
//   })
// })


// // supertest

// describe("4- Test the root path", () => {
//   test("4- It should respond to the GET method", () => {
//     return request(app)
//     .get("/")
//     .expect(200)
//   })
// })