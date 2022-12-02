import { Component } from "react";

class Carousel extends Component {
  state = {
    active: 0,
  };

  static defaultProps = {
    images: ["http://pets-images.dev-apis.com/pets/none.jpg"],
  };

  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index,
    });
  };

  render() {
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div
        id="animation-carousel"
        className="md:flex sm:grid justify-center pt-16"
        data-carousel="static"
      >
        <img
          src={images[active]}
          alt="animal"
          className="px-8 pb-8 md:max-w-[350px] md:px-0 md:pb-0 rounded-3xl"
        />
        <div className="lg:flex grid grid-cols-4 lg:space-x-8  justify-items-center">
          {images.map((photo, index) => (
            <img
              key={photo}
              src={photo}
              className={index === active ? "active" : ""}
              className="rounded-[360] outline outline-blue-500 max-w-[100px] max-h-[100px] ml-16 mt-3 transform transition duration-300 hover:scale-125 hover:shadow-2xl hover:shadow-indigo-800  "
              alt="animal thumbnail"
              onClick={this.handleIndexClick}
              data-index={index}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
