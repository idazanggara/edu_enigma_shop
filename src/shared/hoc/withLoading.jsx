import { Component } from "react";

export default function withLoading(WrappedComponent) {
  return class HOC extends Component {
    state = {
      isLoading: false,
    };

    handleShowLoading = () => {
      this.setState({
        isLoading: true,
      });
    };

    handleHideLoading = () => {
      this.setState({
        isLoading: false,
      });
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          isLoading={this.state.isLoading}
          showLoading={this.handleShowLoading}
          hideLoading={this.handleHideLoading}
        />
      );
    }
  };
}

// function withLoading2(WrappedComponent) {
//     return function HOC(props) {
//         const [isLoading, setLoading] = useState(false);

//         const handleShowLoading = () => {
//             setLoading(true)
//           };

//           const handleHideLoading = () => {
//             setLoading(false);
//           };

//           <WrappedComponent
//           {...props}
//           isLoading={isLoading}
//           showLoading={handleShowLoading}
//           hideLoading={handleHideLoading}
//         />
//     }
// }

// function Tes() {
//     // hooks
//     const [state, setState] = useState();

//     // componentDidMount, componentDidUpdate, componentWillUnmount
//     useEffect();

//     return <h1></h1>
// }
