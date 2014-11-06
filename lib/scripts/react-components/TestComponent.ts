/// <reference path='../../typings/node.d.ts' />

import React = require('react');
import TypedReact = require("typed-react");

export interface ComponentProps {
    bar: number;
}

interface ComponentState {
    baz: number;
}

class Component extends TypedReact.Component<ComponentProps, ComponentState> {
    private foo: number;

    getInitialState() {
        return {

        };
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return React.DOM.div(null, "My Component");
    }
}

export var component = TypedReact.createClass<ComponentProps, ComponentState>(React.createClass, Component);
