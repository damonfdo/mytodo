import request from 'supertest'
import app from '../app.js'

describe("/task", () => {
    describe("GET", () => {

        //Should be a logged in User
        test("Should be logged In", async () => {
            const header = { Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbW9uQGV4YW1wbGUubGsiLCJpYXQiOjE2Njk1NTYzNTh9.iQdaPhZvPioyObGrpDR48nq5F8OCBXgFEtUEGt7fg-M" }
            const res = await request(app).get("/task/get").set(header)
            expect(res.statusCode).toBe(201)
        })

    })

    describe('POST', () => {
        // Should create task 
        // Should Update Task 
    })
})