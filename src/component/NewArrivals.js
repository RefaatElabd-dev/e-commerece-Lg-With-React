import React, { Component } from "react";

class NewArrivals extends Component {
  state = {
    newproducts:this.props.sendnewarrivals,
  };
 
  
  render() {
console.log("hhhhhhhh",this.state.newproducts)
if(this.state.newproducts==undefined ||this.state.newproducts.length==0){
  return (<div>loading............................</div>)
}else{
    return (
      <React.Fragment>
        <section>
        
          <div className="container productCont">
            <h2>NewArrivals</h2>
           
           </div>
            <div id="gallery1" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row rbg rounded py-3">
                    {/* card 1 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408"
                            alt="chips"
                            className="rounded"
                          />
                          <h5>Chips</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$24.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 1 ends here */}
                    {/* card 2 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>Kamar El Din</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$23.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 2 ends here */}
                    {/* card 3 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>Pretzels</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$39.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 3 ends here */}
                    {/* card 4 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>vinegar</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$3.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 4 ends here */}
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row rbg rounded py-3">
                    {/* card 3 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>Pretzels</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$39.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 3 ends here */}
                    {/* card 4 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>vinegar</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$3.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 4 ends here */}
                    {/* card 1 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>Chips</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$24.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 1 ends here */}
                    {/* card 2 */}
                    <div className="col-md-3">
                      <div className="card mt-3">
                        <div className="product-1 align-items-center p-2 text-center">
                          <img
                            src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384"
                            alt="chips"
                            className="rounded"
                            width={160}
                          />
                          <h5>Kamar El Din</h5>
                          {/* card info */}
                          <div className="mt-3 info">
                            <span className="text1 d-block">
                              Lorem ipsum, dolor sit amet.
                            </span>
                            <span className="text1">Lorem, ipsum dolor.</span>
                          </div>
                          <div className="cost mt-3 text-dark">
                            <span>$23.99</span>
                            <div className="star mt-3 align-items-center">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                        </div>
                        {/* button for cards*/}
                        <div className="bbtn col-6 offset-3 p-2 bg-warning text-center text-white my-3 cursor rounded">
                          <span className="text-uppercase">Add to cart</span>
                        </div>
                      </div>
                    </div>
                    {/* cart 2 ends here */}
                  </div>
                </div>
              </div>
              <a
                className="carousel-control-prev slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next slide-arrow"
                href="#gallery1"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
       
        </section>
      </React.Fragment>
    );
  }}
}
export default NewArrivals;
