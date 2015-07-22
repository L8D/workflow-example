/* global before */

import {jsdom} from 'jsdom';

before(function() {
    global.document = jsdom('<html></html>');
    global.window = global.document.parentWindow;
});
