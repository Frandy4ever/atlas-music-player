import "@testing-library/jest-dom";
// setupTests.ts  (root or src/ — match what you configured in vitest.config.ts)
import "@testing-library/jest-dom/vitest";
import { beforeAll, afterEach, afterAll, vi } from "vitest";
import { server } from "@/mocks/server";

// Mock window.matchMedia for components that read media queries (e.g., ThemeToggle)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),            // deprecated but some libs still call these
    removeListener: vi.fn(),         // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Start the MSW server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
// Reset any runtime request handlers we may add during the tests
afterEach(() => server.resetHandlers());
// Clean up after all tests are done, preventing this
// interception layer from affecting irrelevant tests
afterAll(() => server.close());
