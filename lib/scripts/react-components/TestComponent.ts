/// <reference path='../../typings/react.d.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");

export interface ComponentIProps {
    bar?: number;
}

class Component extends TypedReact.Component<ComponentIProps, {}> {

    getInitialState() {
        return {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return React.DOM.div(null, "My Component");
    }
}

export var MyComponent = TypedReact.createClass<ComponentIProps, {}>(React.createClass, Component);
