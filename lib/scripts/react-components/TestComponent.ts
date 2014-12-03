/// <reference path='../../typings/react.d.ts' />
/// <reference path='../../../node_modules/typed-react/dist/typed-react.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");

export interface ComponentIProps {
    title?: string;
}

class Component extends TypedReact.Component<ComponentIProps, {}> {

    getInitialState() {
        return {};
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return React.DOM.h1(null, "heyoo " + this.props.title);
    }
}

export var MyComponent = TypedReact.createClass(Component);
