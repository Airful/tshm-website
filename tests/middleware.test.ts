import assert from "node:assert/strict";
import { test } from "node:test";
import { getLegacyRedirectPath } from "../src/app/lib/legacy-routes.ts";

test("legacy non-localized web URLs resolve directly to the matching current page", () => {
  assert.equal(
    getLegacyRedirectPath("/web/Dm8LaFYxADMFNA==/Contact-Us", "en"),
    "/en/contact"
  );
});

test("legacy localized web URLs resolve directly instead of continuing to 404", () => {
  assert.equal(
    getLegacyRedirectPath("/bn/web/BWQPbANkVmVdag==/Gallery", "en"),
    "/bn/gallery"
  );
});
