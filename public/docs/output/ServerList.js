Ext.data.JsonP.ServerList({"tagname":"class","name":"ServerList","extends":"Backbone.Collection","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"code_type":"assignment","inheritable":false,"inheritdoc":null,"meta":{},"id":"class-ServerList","members":{"cfg":[],"property":[],"method":[{"name":"fetch","tagname":"method","owner":"ServerList","meta":{},"id":"method-fetch"},{"name":"parse","tagname":"method","owner":"ServerList","meta":{"private":true},"id":"method-parse"}],"event":[],"css_var":[],"css_mixin":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"files":[{"filename":"ServerList.js","href":"ServerList.html#ServerList"}],"html_meta":{},"component":false,"superclasses":["Backbone.Collection"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Backbone.Collection<div class='subclass '><strong>ServerList</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/ServerList.html#ServerList' target='_blank'>ServerList.js</a></div></pre><div class='doc-contents'><p>List of servers associated with User's account</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-fetch' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerList'>ServerList</span><br/><a href='source/ServerList.html#ServerList-method-fetch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerList-method-fetch' class='name expandable'>fetch</a>( <span class='pre'>[Object options]</span> ) : Object</div><div class='description'><div class='short'>Overrides for Backbone.Model.fetch. ...</div><div class='long'><p>Overrides for Backbone.Model.fetch.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object (optional)<div class='sub-desc'><p>config options for Backbone.Collection.fetch</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Collection of server model objects</p>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ServerList'>ServerList</span><br/><a href='source/ServerList.html#ServerList-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/ServerList-method-parse' class='name expandable'>parse</a>( <span class='pre'>Object response, [Object jqXHR]</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Formats data returned from the server after fetch is called. ...</div><div class='long'><p>Formats data returned from the server after fetch is called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>JSON data from the server</p>\n</div></li><li><span class='pre'>jqXHR</span> : Object (optional)<div class='sub-desc'><p>jQuery jqXHR</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>re-formmated JSON data</p>\n</div></li></ul></div></div></div></div></div></div></div>"});