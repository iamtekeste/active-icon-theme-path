#active-icon-theme-path
> Get the path to the currently used icon theme.


## Install

```
$ npm install --save active-icon-theme-path
```

Tested on Ubuntu.


## Usage

```js
var iconThemePath = require('active-icon-theme-path');

iconThemePath().then(path => {
	console.log(path);
	//=> '/usr/share/icons/name-of-the-active-icon-theme'
});
```

## License

MIT © [Tekeste G](https://github.com/iamtekeste)
