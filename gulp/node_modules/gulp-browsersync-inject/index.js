var through = require('through2'),
    gutil = require('gulp-util'),
    fs = require('fs'),
    packageJSON = JSON.parse(fs.readFileSync('./package.json'));

module.exports = function(opts) {
    opts                 = opts || {};
    opts.port            = opts.port; // <-- Mandatory!
    opts.version         = opts.version || '2.24.4';
    opts.protocol        = opts.protocol || '';
    opts.path            = opts.path || '/browser-sync/browser-sync-client';
    opts.tag             = opts.tag || 'body';
    // opts.indent can be 0, so check for undefined instead of presence
    opts.indent          = undefined != opts.indent ? opts.indent : 4;
    opts.template        = opts.template ||'' +
    '<script type=\'text/javascript\' id="__bs_script__">//<![CDATA[\n' +
    '    document.write("<script async src=\'${PROTOCOL}//HOST:${PORT}${PATH}.${VERSION}.js\'><\\\/script>".replace("HOST", location.hostname));\n' +
'//]]></script>\n';

    if (undefined === opts.port || null === opts.port) {
        throw new Error('gulp-browsersync-inject: Port must be specified');
    }

    // Append ":" to the protocol, or make sure the protocol is blank
    opts.protocol = !!opts.protocol ? opts.protocol + ':' : '';

    return through.obj(function(file, enc, cb) {
        var injectedString = '',
            indentString = new Array(opts.indent + 1).join(' '),
            content,
            replace = function replace(target, key, value) {
                return target.replace(new RegExp('\\${' + key + '}', 'gi'), value);
            };

        if (file.isNull()) {
            return cb(null, file);
        }

        if (file.isStream()) {
            return cb(new Error('gulp-browsersync-inject: streams not supported'));
        }

        // Create the injected string
        injectedString = opts.template;
        injectedString = replace(injectedString, 'PROTOCOL', opts.protocol);
        injectedString = replace(injectedString, 'PORT', opts.port);
        injectedString = replace(injectedString, 'PATH', opts.path);
        injectedString = replace(injectedString, 'VERSION', opts.version);

        injectedString += '</' + opts.tag + '>\n';

        // Get the file content
        content = file.contents.toString();

        // Replace the content with the augmented markup
        content = content.replace('</' + opts.tag + '>', injectedString);

        // Reassign the buffer
        file.contents = new Buffer(content);

        // Notify Gulp that we are done
        cb(null, file);
    });

};
