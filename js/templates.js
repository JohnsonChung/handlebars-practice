this["JST"] = this["JST"] || {};

this["JST"]["templates/contents.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "contents";
},"useData":true});

this["JST"]["templates/nav.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "<ul>\n	<li><a href=\"#\" onClick=\"hbs.change('pageA')\">pageA</a></li>\n	<li><a href=\"#\" onClick=\"hbs.change('pageB')\">pageB</a></li>\n	<li><a href=\"#\" onClick=\"hbs.change('pageC')\">pageC</a></li>\n</ul>";
},"useData":true});

this["JST"]["templates/pageA.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "pageA";
},"useData":true});

this["JST"]["templates/pageB.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "pageB";
},"useData":true});

this["JST"]["templates/pageC.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "pageC";
},"useData":true});