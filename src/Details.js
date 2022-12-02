import React from "react";
import { useParams } from "react-router-dom";
import { Component } from "react";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import Button from "./Button";

class Details extends Component {
  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();
    this.setState(Object.assign({ loading: false }, json.pets[0]));
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal });

  render() {
    if (this.state.loading) {
      return <h2>Loading . . .</h2>;
    }
    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div className="details">
        <Carousel images={images} />
        <div className="pt-8">
          <h1 className=" text-center font-bold text-5xl">{name}</h1>
          <h2 className=" text-center font-semibold text-3xl">{`${animal} - ${breed} -${city} -${state}`}</h2>
          <div className="flex justify-center py-4">
            <p className="px-8 py-16 max-w-[50%]">{description}</p>
            <button onClick={this.toggleModal}>
              <Button petName={name} />
            </button>
          </div>
          {showModal ? (
            <Modal>
              <div className="bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
                <div className="bg-white px-16 py-14 rounded-md text-center">
                  <h1 className="text-xl mb-4 font-bold text-slate-500">
                    {" "}
                    Would you like to adopt {name}?
                  </h1>
                  <div className="buttons">
                    <a
                      href="https://bit.ly/pet-adopt"
                      className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                    >
                      yes
                    </a>
                    <button
                      onClick={this.toggleModal}
                      className="bg-red-500 px-4 py-2 rounded-md text-md text-white"
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

const WrappedDetails = () => {
  const params = useParams();
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
