import { render, screen } from "@testing-library/react";
import CoverArt from "../components/CoverArt";
import { server } from "../mocks/server";
import { http, HttpResponse } from "msw";

test("renders cover art and fetches song details", async () => {
  // Arrange
  render(<CoverArt songId="1" showLyrics={false} />);

  // Act - Wait for the image to appear
  const image = await screen.findByRole("img", { name: "Album Cover" });

  // Assert
  expect(image).toHaveAttribute("src", "https://via.placeholder.com/150");
});

test("displays lyrics when showLyrics is true", async () => {
  render(<CoverArt songId="1" showLyrics={true} />);

  // Act - Wait for lyrics to appear
  const lyrics = await screen.findByText(/Lorem ipsum dolor sit amet/);

  // Assert
  expect(lyrics).toBeInTheDocument();
});

// ✅ Mock Error Response for Testing
test("handles API errors gracefully", async () => {
  server.use(
    http.get("/api/v1/songs/:songId", () => {
      return HttpResponse.error(); // Simulating API failure
    })
  );

  render(<CoverArt songId="1" showLyrics={false} />);

  // Expect that the cover art falls back to the placeholder image
  const image = await screen.findByRole("img", { name: "Album Cover" });
  expect(image).toHaveAttribute("src", expect.stringContaining("placeholder.svg"));
});
