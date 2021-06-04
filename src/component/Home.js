import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Button, Dropdown, ButtonGroup } from 'react-bootstrap';
import BestSelling from './BestSelling.jsx';
import NewArrivals from './NewArrivals';
import Brand from './Brand data/brandimgs.jsx';
import Categoriesimages from './Category data/Categoriesimags';


class Home extends Component {
<<<<<<< HEAD
    state = { 
      Catogeries:[],
<<<<<<< HEAD
      subcategories:[],
      Products:[],
      BestSellings:[],
      NewArrivals:[]
=======
      Products:[]
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
     
     }
     //get category from api with subcategories
     getDataCategoryFromApi = () => {
<<<<<<< HEAD
     
     axios("http://localhost:21231/api/Categories").then(res => {
          
=======
      axios("http://localhost:21231/api/Categories").then(res => {
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
          this.setState({
              Catogeries: res.data
          })
          console.log(res)
<<<<<<< HEAD
      }); }
  getDatasubategoryFromApi = (_id) => {
    console.log(_id)
=======
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
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
     
=======
  state = {
    Catogeries: [],
    subcategories: [],
    categimages:[],
    Products: [],
    Brands:[]



  }
  //get category from api with subcategories
  getDataCategoryFromApi = () => {

    axios("http://localhost:21231/api/Categories").then(res => {

      this.setState({
        Catogeries: res.data,
        categimages:res.data.slice(0,8)

      })
      //console.log("cat",this.state.categimages)
    });
  }
  getDatasubategoryFromApi = (_id) => {
    //console.log(_id)

>>>>>>> 4dbaa471a27e58214ae1ea00468f6b2e69945a33
    axios("http://localhost:3000/subcategories").then(res => {
      const subData = res.data.filter(i => i.Categoryid == _id);

      this.setState({
        subcategories: subData
      })
      // console.log(subData)
    });

  }

  getBrands = () => {
    axios("http://localhost:21231/api/Brands").then((res) => {

      this.setState({
        Brands: res.data.slice(0,8)
      });
     // console.log("Brand", this.state.Brands);
    });
  };




  componentDidMount = () => {
    this.getDataCategoryFromApi();
    this.getBrands();

<<<<<<< HEAD
 componentDidMount=()=>{
      this.getDataCategoryFromApi();
      this.bestselling();
     this.getnewArrivals();
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
      <div className="col-6 col-md-3">
        <div className="bloc1" >
         
         { this.state.Catogeries.map((cat,i)=>
<<<<<<< HEAD
          // <a href="#" key={i} className="itm" role="menuitem" data-toggle="tooltip" data-placement="top" title="Refaat"> <i className="bi-alarm itmicon" /> <span className="text">{cat.name}</span></a>
          <Dropdown as={ButtonGroup}>
  <Button variant="Warning" className="dropItem text text-left"  >{cat.categoryName} </Button>

  <Dropdown.Toggle split variant="" id={i} className="text text-right" />

  <Dropdown.Menu >
  {
    cat.subCategories.map((s,j)=>
      <Dropdown.Item   href="#/action-1" key={j}>{s.subcategoryName}</Dropdown.Item>
    )

   
  }
 
   
  </Dropdown.Menu>
</Dropdown>
=======
          <a href="#" key={i} className="itm" role="menuitem" data-toggle="tooltip" data-placement="top" title="Refaat"> <i className="bi-alarm itmicon" /> <span className="text">{cat.categoryName}</span></a>
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
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
=======
  }
  render() {
    if (this.state.Catogeries.length == 0) {
      return (
        <div>Loading......................</div>)
    } else {
      return (<>

        <div className="container my-2">
          <div className="row">
            {/* Block1 */}
            <div className="col-6 col-md-3">
              <div className="bloc1" >

                {this.state.Catogeries.map((cat, i) =>
               <div>
                  <Dropdown as={ButtonGroup}>
                    <Link variant="Warning" className="dropItem ml-2  text-left" to={"/category/"+cat.categoryId} >{cat.categoryName} </Link>

                    <Dropdown.Toggle split variant="" id={i} className="text text-right" />

                    <Dropdown.Menu >
                      {
                        cat.subCategories.map((s, j) =>
                          <Dropdown.Item href={"/subcategory/"+s.subcategoryId} key={j}>{s.subcategoryName}</Dropdown.Item>
                        )


                      }


                    </Dropdown.Menu>
                  </Dropdown>
                  <img src={cat.image} width="20" height="10"/>
                  </div>
                )
                }


>>>>>>> 4dbaa471a27e58214ae1ea00468f6b2e69945a33
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

          </div>
        </div>
<<<<<<< HEAD
      </div>
      {/* Block3 */}
    
    </div>
  </div>
<<<<<<< HEAD
  <BestSelling  getBestSelling={this.state.Bestsellings}/>
 
   <NewArrivals  sendnewarrivals={this.state.NewArrivals}/>
=======
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
>>>>>>> 4e607f3ee306134e6298a2eabf8a4d3b25a92506
 

     </> );
    }}
=======
        <Categoriesimages sendCategories={this.state.categimages}/>
        <Brand  sendBrands={this.state.Brands}/>
        <BestSelling />

        <NewArrivals  />


      </>);
    }
>>>>>>> 4dbaa471a27e58214ae1ea00468f6b2e69945a33
  }
}

export default Home;