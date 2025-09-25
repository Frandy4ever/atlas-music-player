import { render } from "@testing-library/react";
import CoverArt from "@/components/CoverArt";

describe("CoverArt Component", () => {
  const mockSongId = "123";

  it("renders with default placeholder cover", () => {
    const { asFragment } = render(
      <CoverArt songId={mockSongId} showLyrics={false} />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with lyrics overlay when showLyrics=true and lyrics exist", async () => {
    // mock fetch to return cover + lyrics
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            cover: "http://example.com/cover.jpg",
            lyrics: "These are the test lyrics",
          }),
      })
    ) as unknown as typeof fetch;

    const { asFragment, findByText } = render(
      <CoverArt songId={mockSongId} showLyrics={true} />
    );

    // wait for lyrics to render
    await findByText("These are the test lyrics");

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders with fetched cover but no lyrics when showLyrics=false", async () => {
    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            cover: "http://example.com/cover.jpg",
            lyrics: null,
          }),
      })
    ) as unknown as typeof fetch;

    const { asFragment, findByAltText } = render(
      <CoverArt songId={mockSongId} showLyrics={false} />
    );

    // wait for image to update
    await findByAltText("Album Cover");

    expect(asFragment()).toMatchSnapshot();
  });
});
