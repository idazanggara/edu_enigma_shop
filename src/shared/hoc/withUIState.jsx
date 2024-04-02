import { Component } from "react";
import Toast from "@shared/components/Toast/Toast";

export default function withUIState(WrappedComponent) {
  return class HOC extends Component {
    state = {
      isLoading: false,
      showToast: false,
      toastMessage: "",
      toastColor: "primary",
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

    showToast = (message, color) => {
      this.setState({
        showToast: true,
        toastMessage: message,
        toastColor: color || this.state.toastColor,
      });

      setTimeout(() => {
        this.setState({ showToast: false });
      }, 4000);
    };

    render() {
      return (
        <>
          {this.state.showToast && (
            <Toast
              message={this.state.toastMessage}
              color={this.state.toastColor}
            />
          )}
          <WrappedComponent
            {...this.props}
            showToast={this.showToast}
            isLoading={this.state.isLoading}
            showLoading={this.handleShowLoading}
            hideLoading={this.handleHideLoading}
          />
        </>
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
