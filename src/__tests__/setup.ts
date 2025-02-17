import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "../mocks/server"; // Ensure correct path to MSW setup
import "@testing-library/jest-dom/vitest";

// Mock `window.matchMedia` to prevent errors in tests
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Start the MSW mock server before tests run
beforeAll(() => server.listen());

// Reset any request handlers between tests (prevents test data conflicts)
afterEach(() => server.resetHandlers());

// Close the server after all tests complete
afterAll(() => server.close());
