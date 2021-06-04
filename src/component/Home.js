import React, { Component } from 'react';
import axios from 'axios';
class Login extends Component {
    state = { 
      Catogeries:[],
      Products:[]
     
     }
     getDataCategoryFromApi = () => {
      axios("http://localhost:21231/api/Categories").then(res => {
          this.setState({
              Catogeries: res.data
          })
          console.log(res)
      });
  }
  getDataProductFromApi = () => {
    axios("http://localhost:21231/api/products").then(res => {
        
        this.setState({
            Products: res.data
        })
        console.log(res)
    });
  }
      componentDidMount(){
      this.getDataCategoryFromApi();
      this.getDataProductFromApi();
     

     }
    render() { 
      if(this.state.Catogeries.length==0){
        return(
        <div>Loading......................</div>)
      }else{
        return ( <>
        
  <div className="container my-2">
    <div className="row">
      {/* Block1 */}
      <div className="col-6 col-md-2">
        <div className="bloc1">
         
         { this.state.Catogeries.map((cat,i)=>
          <a href="#" key={i} className="itm" role="menuitem" data-toggle="tooltip" data-placement="top" title="Refaat"> <i className="bi-alarm itmicon" /> <span className="text">{cat.categoryName}</span></a>
            )}
          
 
        </div>
      </div>
      {/* Block2 */}
      <div className="d-none d-md-inline-block col-md-7 bloc1 mt-0">
        <div className=" ">
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#carouselExampleCaptions " data-slide-to={0} className="active" />
              <li data-target="#carouselExampleCaptions" data-slide-to={1} />
              <li data-target="#carouselExampleCaptions" data-slide-to={2} />
              <li data-target="#carouselExampleCaptions" data-slide-to={3} />
            </ol>
            <div className="carousel-inner bloc1">
              <div className="carousel-item active sliditem">
                <img src="https://eg.jumia.is/cms/ramadan-21/1day-offer/7April/slider_Desktop_EN.jpg" className="d-block w-100 h-100 img-fluid imgslid" alt="..." />
              </div>
              <div className="carousel-item bloc1">
                <img src="https://eg.jumia.is/cms/ramadan-21/sliders/Slider-Desktop-EN_.jpg" className="d-block w-100 h-100 imgslid img-fluid " alt="..." />
              </div>
              <div className="carousel-item bloc1">
                <img src="https://eg.jumia.is/cms/ramadan-21/wof/7-4/Slider-Desktop-EN_-(1).jpg" className="d-block w-100 h-100 imgslid img-fluid " alt="..." />
              </div>
              <div className="carousel-item bloc1">
                <img src="https://eg.jumia.is/cms/ramadan-21/sliders/slider_Desktop_EN_copy.jpg" className="d-block w-100 h-100 imgslid img-fluid " alt="..." />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      {/* Block3 */}
      <div className="col-6 col-md-3 text-right rounded">
        <div className="bloc1">
          <div className=" mb-2">
            <a className="card row shadow-none rounded">
              <img src="https://eg.jumia.is//cms/ramadan-21/teasers/Teaser-(1).jpg" className alt="..." />
            </a>
          </div>
          <div className>
            <a className="card row shadow-none">
              <img src="https://eg.jumia.is//cms/ramadan-21/teasers/Teaser_.jpg" className alt="..." />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <div className="container productCont">
      <h2 className="productHeader"><a href="#">New Arrivals</a></h2>
      <div id="gallery1" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row rbg rounded py-3">
              {/* card 1 */}
              { this.state.Products.map((p,i)=>

              <div className="col-md-3" key={i}>
                <div className="card mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" />
                    <h5>{p.productName}</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">{p.description}</span>
                      <span className="text1">{p.color}</span>
                    </div>
                    <div className="cost mt-3 text-dark">
                      <span>{p.price}</span>
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
              )}
              {/* cart 1 ends here */}
             
            </div>
          </div>
        </div>
        <a className="carousel-control-prev slide-arrow" href="#gallery1" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next slide-arrow" href="#gallery1" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  <section>
    <div className="container productCont my-5">
      <h2 className="productHeader"><a href="#">New Arrivals</a></h2>
      <div id="gallery2" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row rbg rounded py-3">
              {/* card 1 */}
              <div className="col-md-3">
                <div className="card mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
        <a className="carousel-control-prev slide-arrow" href="#gallery2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next slide-arrow" href="#gallery2" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  <section>
    <div className="container productCont">
      <h2 className="productHeader"><a href="#">New Arrivals</a></h2>
      <div id="gallery3" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row rbg rounded py-3">
              {/* card 1 */}
              <div className="col-md-3">
                <div className="card mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
        <a className="carousel-control-prev slide-arrow" href="#gallery" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next slide-arrow" href="#gallery" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
  <section>
    <div className="container productCont">
      <h2 className="productHeader"><a href="#">New Arrivals</a></h2>
      <div id="gallery" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row rbg rounded py-3">
              {/* card 1 */}
              <div className="col-md-3">
                <div className="card mt-3">
                  <div className="product-1 align-items-center p-2 text-center">
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/99402/1.jpg?7587" alt="chips" className="rounded" width={160} />
                    <h5>Pretzels</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/55/831802/1.jpg?9244" alt="chips" className="rounded" width={160} />
                    <h5>vinegar</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/14/415781/1.jpg?9408" alt="chips" className="rounded" width={160} />
                    <h5>Chips</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
                    <img src="https://eg.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/720312/1.jpg?9384" alt="chips" className="rounded" width={160} />
                    <h5>Kamar El Din</h5>
                    {/* card info */}
                    <div className="mt-3 info">
                      <span className="text1 d-block">Lorem ipsum, dolor sit amet.</span>
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
        <a className="carousel-control-prev slide-arrow" href="#gallery2" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next slide-arrow" href="#gallery2" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
 

        </> );
    }}
}
 
export default Login;