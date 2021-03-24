function applyNodeStyle(node, style) {
    for (var _i = 0, _a = Object.entries(style); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        node.style.setProperty(key, value);
    }
}
var ObjectDom = /** @class */ (function () {
    function ObjectDom(node, style, children) {
        this._node = node;
        this._style = style;
        this._children = [];
        this.updateStyle();
        for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
            var child = children_1[_i];
            this.addChild(child);
        }
    }
    Object.defineProperty(ObjectDom.prototype, "node", {
        get: function () {
            return this._node;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ObjectDom.prototype, "style", {
        get: function () {
            return this._style;
        },
        set: function (value) {
            this._style = value;
            this.updateStyle();
        },
        enumerable: false,
        configurable: true
    });
    ObjectDom.prototype.updateStyle = function () {
        applyNodeStyle(this.node, this.style);
    };
    Object.defineProperty(ObjectDom.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    ObjectDom.prototype.addChild = function (value) {
        this._children.push(value);
        if (value instanceof ObjectDom) {
            this._node.append(value.node);
        }
        else {
            this._node.append(value);
        }
    };
    return ObjectDom;
}());
function render(source, target) {
    if (target === void 0) { target = document.body; }
    target.innerHTML = '';
    target.appendChild(source.node);
    console.log('render node', target, source);
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Div = /** @class */ (function (_super) {
    __extends(Div, _super);
    function Div(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _a, _b;
        return _super.call(this, document.createElement('div'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
    }
    return Div;
}(ObjectDom));
var Flex = /** @class */ (function (_super) {
    __extends(Flex, _super);
    function Flex(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = 'flex';
        return _this;
    }
    return Flex;
}(Div));
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.flexDirection = 'row';
        return _this;
    }
    return Row;
}(Flex));
var Column = /** @class */ (function (_super) {
    __extends(Column, _super);
    function Column(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.flexDirection = 'column';
        return _this;
    }
    return Column;
}(Flex));
var Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = 'grid';
        return _this;
    }
    return Grid;
}(Div));
var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = 'block';
        return _this;
    }
    return Block;
}(Div));
var Inline = /** @class */ (function (_super) {
    __extends(Inline, _super);
    function Inline(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = 'inline';
        return _this;
    }
    return Inline;
}(Div));
var InlineBlock = /** @class */ (function (_super) {
    __extends(InlineBlock, _super);
    function InlineBlock(props) {
        if (props === void 0) { props = { style: {}, children: [] }; }
        var _this = _super.call(this, props) || this;
        _this.node.style.display = 'inline-block';
        return _this;
    }
    return InlineBlock;
}(Div));

var Text = /** @class */ (function (_super) {
    __extends(Text, _super);
    function Text(tag, props) {
        var _a, _b;
        var _this = _super.call(this, document.createElement(tag), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
        _this.value = props.value;
        return _this;
    }
    Object.defineProperty(Text.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (value)
                this.node.innerText = value;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(ObjectDom));
var Paragraph = /** @class */ (function (_super) {
    __extends(Paragraph, _super);
    function Paragraph(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'p', props) || this;
    }
    return Paragraph;
}(Text));
var Bold = /** @class */ (function (_super) {
    __extends(Bold, _super);
    function Bold(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'b', props) || this;
    }
    return Bold;
}(Text));
var Heading1 = /** @class */ (function (_super) {
    __extends(Heading1, _super);
    function Heading1(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h1', props) || this;
    }
    return Heading1;
}(Text));
var Heading2 = /** @class */ (function (_super) {
    __extends(Heading2, _super);
    function Heading2(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h2', props) || this;
    }
    return Heading2;
}(Text));
var Heading3 = /** @class */ (function (_super) {
    __extends(Heading3, _super);
    function Heading3(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h3', props) || this;
    }
    return Heading3;
}(Text));
var Heading4 = /** @class */ (function (_super) {
    __extends(Heading4, _super);
    function Heading4(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h4', props) || this;
    }
    return Heading4;
}(Text));
var Heading5 = /** @class */ (function (_super) {
    __extends(Heading5, _super);
    function Heading5(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h5', props) || this;
    }
    return Heading5;
}(Text));
var Heading6 = /** @class */ (function (_super) {
    __extends(Heading6, _super);
    function Heading6(props) {
        if (props === void 0) { props = {}; }
        return _super.call(this, 'h6', props) || this;
    }
    return Heading6;
}(Text));

var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        if (props === void 0) { props = {}; }
        var _a, _b;
        var _this = _super.call(this, document.createElement('button'), (_a = props === null || props === void 0 ? void 0 : props.style) !== null && _a !== void 0 ? _a : {}, (_b = props === null || props === void 0 ? void 0 : props.children) !== null && _b !== void 0 ? _b : []) || this;
        _this.onClick = function () { };
        _this.node.addEventListener('click', function () { return _this.onClick(); });
        _this.value = props.value;
        return _this;
    }
    Object.defineProperty(Button.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            if (value)
                this.node.innerText = value;
        },
        enumerable: false,
        configurable: true
    });
    return Button;
}(ObjectDom));

export { ObjectDom, render, Div, Flex, Row, Column, Grid, Block, Inline, InlineBlock, Paragraph, Bold, Heading1, Heading2, Heading3, Heading4, Heading5, Heading6, Button };
//# sourceMappingURL=object-dom.es5.js.map
