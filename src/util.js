var GameboyJS;
(function (GameboyJS) {
"use strict";

// Utility functions
var Util = {
    // Add to the first argument the properties of all other arguments
    extend: function(target /*, source1, source2, etc. */) {
        var sources = Array.prototype.slice.call(arguments);
        for (var i in sources) {
            var source = sources[i];
            for (var name in source) {
                target[name] = source[name];
            }
        }

        return target;
    },
    testFlag: function(p, cc) {
        var test=1;
        var mask=0x10;
        if (cc=='NZ'||cc=='NC') test=0;
        if (cc=='NZ'||cc=='Z')  mask=0x80;
        return (test && p.r.F&mask) || (!test && !(p.r.F&mask));
    },
    getRegAddr: function(p, r1, r2) {return Util.makeword(p.r[r1], p.r[r2]);},
    makeword: function(b1, b2) {return (b1 << 8) + b2;},
    getSignedValue: function(v) {return v & 0x80 ? v-256 : v;}
};

GameboyJS.Util = Util;
}(GameboyJS || (GameboyJS = {})));
