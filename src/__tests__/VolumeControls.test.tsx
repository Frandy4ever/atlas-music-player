import { render } from "@testing-library/react";
import VolumeControls from "../components/VolumeControls";

describe("VolumeControls Component", () => {
  test("matches snapshot with default volume", () => {
    const { asFragment } = render(
      <VolumeControls onVolumeChange={() => {}} onLyricsToggle={() => {}} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
