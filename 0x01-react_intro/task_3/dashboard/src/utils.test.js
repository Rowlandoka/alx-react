import { getFullYear, getFooterCopy, getLatestNotifications } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).tobe(2023);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).tobe("Holberton School");
  expect(getFooterCopy(false)).tobe("Holberton School main dashboard");
});

test("returns right notifications", () => {
  expect(getLatestNotifications()).tobe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
