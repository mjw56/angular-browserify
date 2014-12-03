/// <reference path='../../typings/react.d.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");

export interface ComponentIProps {
    counter?: string;
}

class Component extends TypedReact.Component<ComponentIProps, {}> {

    getInitialState() {
        return {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return React.DOM.h1(null, "Mah counter: " + this.props.counter);
    }
}

export var MyComponent = TypedReact.createClass(Component);
