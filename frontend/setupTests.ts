import 'zone.js/dist/zone-node';
import 'zone.js/testing';
import 'jest-preset-angular';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configure } from '@testing-library/dom';
import { TestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';

configure({
  testIdAttribute: 'data-cy',
});

beforeEach(() => {
  TestBed.resetTestEnvironment();
  TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting(),
    {
      teardown: { destroyAfterEach: true },
    },
  );
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
