var pkg = require('../package.json');

// 兼容 extend 和 @jsmini/extend，@jsmini/extend 替换为 jsmini_extend
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * extend ${version} (https://github.com/jsmini/extend)
 * API https://github.com/jsmini/extend/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/extend/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;
