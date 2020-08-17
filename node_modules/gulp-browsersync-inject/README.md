# gulp-browsersync-inject

> Injects BrowserSync JavaScript into an HTML file; this is useful for proxy mode without directly modifying the HTML file..

[![Build Status](http://img.shields.io/travis/hal313/gulp-browsersync-inject/master.svg?style=flat-square)](https://travis-ci.org/hal313/gulp-browsersync-inject)
[![NPM version](http://img.shields.io/npm/v/gulp-browsersync-inject.svg?style=flat-square)](https://www.npmjs.com/package/gulp-browsersync-inject)
[![Dependency Status](http://img.shields.io/david/hal313/gulp-browsersync-inject.svg?style=flat-square)](https://david-dm.org/hal313/gulp-browsersync-inject)

## Information

<table>
<tr>
<td>Package</td><td>gulp-browsersync-inject</td>
</tr>
<tr>
<td>Description</td>
<td>Inject BrowserSync code into an HTML document. This is useful to support proxy mode without modifying the HTML document.</td>
</tr>
<tr>
<td>Node Version</td>
<td>>= 0.9</td>
</tr>
<tr>
<td>Gulp Version</td>
<td>3.x</td>
</tr>
</table>

## Usage

#### Install

```bash
$ npm install gulp-browsersync-inject --save-dev
```

## Example

```js
var gulp = require('gulp');
var browserSyncInject = require('gulp-browsersync-inject');

// Basic usage:
gulp.task('injectBrowserSync', function(){
  gulp.src('./index.html')
  .pipe(browserSyncInject({port: 5000})) // BrowserSync will output the proxy port
  .pipe(gulp.dest('./'));
});

```

## Options

### options.port (REQUIRED)
The port to which is being proxied. This is the port which BrowserSync is
listening on.

    Type: `Number`

Example:

```js
.pipe(browserSyncInject({port: 5000}))
```

### options.version
The version of the BrowserSync library. BrowserSync will output this value when launched.

    Type: `String`
    Default: `2.24.4`

Example:

```js
.pipe(browserSyncInject({version: true}))
```

### options.protocol
The protocol to use (http or https). If not specified, the injected code will default to no protocol, causing the browser will use the served protocol.

    Type: `String`
    Default: ``

Example:

```js
.pipe(browserSyncInject({protocol: 'http', port: 5000}))
```

### options.path
The path to the JavaScript file. Only specify the file without version or extension.

    Type: `String`
    Default: `/browser-sync/browser-sync-client`

Example:

```js
.pipe(browserSyncInject({path: '/browser-sync/custom-browser-sync-client', port: 5000})) // Puts the information into the 'head' DOM element
```

### options.tag
Set a specific tag to insert before it.

    Type: `String`
    Default: `head`

Example:

```js
.pipe(browserSyncInject({tag: 'head', port: 5000})) // Puts the information into the 'head' DOM element
```

### options.indent
Number of spaces for indentation (for formatting).

    Type: `Number`
    Default: `4`

Example:

```js
.pipe(browserSyncInject({indent: 2, port: 5000}))
```

### options.template
The raw template to inject. All options are resolvers and will be resolved at injection time.

    Type: `String`
    Default:
```
'<script type=\'text/javascript\' id="__bs_script__">//<![CDATA[
        document.write("<script async src=\'${PROTOCOL}//HOST:${PORT}${PATH}.${VERSION}.js\'><\\\/script>".replace("HOST", location.hostname));
'//]]></script>'
```

Example:

```js
.pipe(browserSyncInject({template: customTemplateString, port: 5000}))
```


## LICENSE

[MIT License](https://raw.githubusercontent.com/hal313/gulp-npm-buildinfo-replace/master/LICENSE)
