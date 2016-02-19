import test from 'ava'
import iconThemePath from './index.js'
test(t => {
    t.plan(2)
    return iconThemePath().then(result => {
        console.log(result)
        t.is(typeof result, 'string')
        t.true('icons' in result)
    });
});
