const request = require("supertest");
const app = require("../index");

describe("Demo App", () => {
  it("should return hello message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.text).toContain("Hello from Demo Node.js App!");
  });

  it("health check should return healthy", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual("healthy");
  });
});
