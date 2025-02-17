import { render } from "@testing-library/react";
import PlayListItem from "../components/PlayListItem";

describe("PlayListItem Component", () => {
  test("matches snapshot when playing", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Song 1"
        artist="Artist 1"
        duration="3:45"
        isPlaying={true}
        isPaused={false}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });

  test("matches snapshot when paused", () => {
    const { asFragment } = render(
      <PlayListItem
        title="Song 2"
        artist="Artist 2"
        duration="4:20"
        isPlaying={false}
        isPaused={true}
        onClick={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
