import { assertEquals, assertThrows } from "https://deno.land/std@0.63.0/testing/asserts.ts";
import * as _ from "../src/mylodash.js";

Deno.test("default", () => {
  assertEquals(_.defaults({a:1}, {b:2}), {a:1, b:2})
})
