import { render } from "@testing-library/react";
import SongTitle from "../components/SongTitle";

describe("SongTitle Component", () => {
  test("matches snapshot with song details", () => {
    const { asFragment } = render(<SongTitle songId="1" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
