import request from "supertest"
import app from "./app"

describe("App",()=>{
    test("it should work",()=>{})
})



test("it should run return 200 statuscode",async ()=>{
  const response = await request(app).get("/").send()
  expect(response.statusCode).toBe(200)
})