import test from 'ava'
import iconThemePath from './index.js'
test(t => {
    return iconThemePath().then(result => {
        t.is(typeof result, 'string')
        t.true(result.indexOf('/usr/share/icons/') > -1 )
    });
});
