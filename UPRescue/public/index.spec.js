/** @jest-environment jsdom */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest
    .dontMock('fs');

describe('Has all map elements', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        jest.resetModules();
    });

    test('Navigation bar exists', function () {
        expect(document.getElementById('topNav')).toBeTruthy();
    });
    
    test('Auto Complete Box exists', function () {
        expect(document.getElementById('autoCompBox')).toBeTruthy();
    });

    test('Map exists', function () {
        expect(document.getElementById('map')).toBeTruthy();
    });

    test('Load screen exists', function () {
        expect(document.getElementById('loadingScreen')).toBeTruthy();
    });

    test('Filter buttons exists', function () {
        expect(document.getElementById('filterForm')).toBeTruthy();
    });
    
    test('Database exists', function () {
        expect(document.getElementById('foodBanksList')).toBeTruthy();
    });
});
