import '@testing-library/jest-dom';

globalThis.MessageChannel = class {
  port1 = { onmessage: null as ((ev: { data: unknown }) => void) | null, close() {} };
  port2 = {
    postMessage: (data: unknown) => {
      setTimeout(() => this.port1.onmessage?.({ data }), 0);
    },
    close() {},
  };
} as unknown as typeof MessageChannel;

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
    onchange: null,
  })),
});
