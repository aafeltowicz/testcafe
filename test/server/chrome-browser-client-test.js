const BrowserClient   = require('../../lib/browser/provider/built-in/dedicated/chrome/cdp-client').BrowserClient;
const expect          = require('chai').expect;

describe('BrowserClient', () => {
    describe('Regression', () => {
        it('Shouldn\'t be referenced inside RuntimeInfo', () => {
            const runtimeInfo = {};

            /* eslint-disable no-new */
            new BrowserClient(runtimeInfo, true);
            expect(runtimeInfo).to.not.have.property('browserClient');
        });
    });
});
