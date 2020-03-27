const { expect } = require("chai");
const herdTheBabies = require("../herd-the-babies");

describe("herdTheBabies", () => {
  it("returns an empty string when given an empty string", () => {
    expect(herdTheBabies("")).to.equal("");
  });
  it("returns a copy of the original string in the same order when passed", () => {});
  it("returns an alphabetically ordered string when passed a jumpbled up string", () => {
    expect(herdTheBabies("cba")).to.equal("abc");
    expect(herdTheBabies("CBA")).to.equal("ABC");
  });
  it("returns an alphabetically ordered string where parents are followed by babies", () => {
    expect(herdTheBabies("BaA")).to.equal("AaB");
    //expect(herdTheBabies("BaAcDffFccDdCd")).to.equal("AaB");
  });
});
