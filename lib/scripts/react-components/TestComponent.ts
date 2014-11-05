/// <reference path='../../typings/node.d.ts' />

var React = require('react');
var TypedReact = require("typed-react");

export interface ComponentProps {
    tickInterval: number;
}

interface ComponentState {
    ticksElapsed: number;
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
