import { describe, it, expect, beforeEach, jest } from "@jest/globals";
import mockAxios from "jest-mock-axios";

import { findServer } from "./index";

describe("Test for findServer function", () => {
  beforeEach(() => {
    mockAxios.reset();
  });

  it("should return does-not-work.perfume.new", async () => {
    mockAxios.get.mockResolvedValue({
      status: 200,
    });

    const server = await findServer();
    expect(server).toEqual({
      url: "https://does-not-work.perfume.new",
      priority: 1,
    });
    // expect(server.url).toBe("https://gitlab.com");
  });

  it("Should return a rejected", async () => {
    mockAxios.get.mockRejectedValue({});

    try {
      await findServer();
      expect(0).toBe(1); // This can't be executed because we're expecting reject always for this test.
    } catch (error) {
      expect(error).toEqual("Not found");
    }
  });
});
