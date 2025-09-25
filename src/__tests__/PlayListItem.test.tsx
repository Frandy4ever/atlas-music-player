import { render } from "@testing-library/react";
import PlayListItem from "@/components/PlayListItem";

describe("PlayListItem Component", () => {
  it("renders a paused song item", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Test Song"
        artist="Test Artist"
        duration="3:45"
        isPlaying={false}
        isPaused={true}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a playing song item", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Now Playing"
        artist="The Band"
        duration="4:20"
        isPlaying={true}
        isPaused={false}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("renders a normal inactive song item", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Inactive Song"
        artist="No One"
        duration="2:30"
        isPlaying={false}
        isPaused={false}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
