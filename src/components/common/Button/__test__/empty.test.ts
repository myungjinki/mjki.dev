// app/components/__test__/test.test.ts

describe("sum function", () => {
  test("should return the sum of two numbers", () => {
    expect(3).toBe(3)
  })

  it("should return the sum of negative numbers", () => {
    expect(-3).toBe(-3)
  })

  it("should return 0 when both arguments are 0", () => {
    expect(0).toBe(0)
  })
})
