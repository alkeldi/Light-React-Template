//Root
var root = document.getElementById('root');

//Generic Hello Class
class Hello extends React.Component {
    render() {
      return React.createElement('div', {class: 'light-blue'}, `Hello, ${this.props.name}`);
    }
}

//Hello object for Ali.
var element = React.createElement(Hello, {name: 'Ali'}, null);

//Rendering
ReactDOM.render(element, root);
