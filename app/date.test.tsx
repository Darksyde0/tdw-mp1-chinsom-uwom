import { describe, it, expect } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import DateComponent from "./date";

describe("DateComponent", () => {
  it("formats a blog post date correctly", () => {
    const html = renderToStaticMarkup(
      <DateComponent dateString="2026-10-19T12:00:00Z" />,
    );

    expect(html).toContain("October 19, 2026");
    expect(html).toContain('dateTime="2026-10-19T12:00:00Z"');
  });
});
