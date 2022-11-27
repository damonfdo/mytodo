
import request from 'supertest'
import app from "../app.js"


describe("POST /user", () => {
    describe("Sign In", () => {
        test("Should provide email and password", async () => {
            const res = await request(app).post('/user/signin').send({
                name: "password"
            })
            expect(res.statusCode).toBe(400)
        })

        test("User Should Exists", async () => {
            const res = await request(app).post('/user/signin').send({
                email: "email",
                password: "password"
            })
            expect(res.statusCode).toBe(404)
        })


        test("User Should Exists", async () => {
            const res = await request(app).post('/user/signin').send({
                email: "damon@example.lk",
                password: "admin"
            })
            expect(res.statusCode).toBe(201)
        })

    })

    describe("Sign Up", () => {

        test("Should be new user", async () => {
            const res = await request(app).post('/user/signup').send({
                email: "damon@exasmple.lk",
                password: "damon"
            })
            expect(res.body).toBe("User already exisits. Please log in")
        })
    })
})