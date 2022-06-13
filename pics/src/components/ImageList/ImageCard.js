import React, { createRef } from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imgRef = createRef();
  }
  componentDidMount() {
    this.imgRef.current.addEventListener("load", this.setSpan);
  }
  setSpan = () => {
    const height = this.imgRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imgRef} src={urls.regular} alt={description}></img>
      </div>
    );
  }
}

export default ImageCard;
