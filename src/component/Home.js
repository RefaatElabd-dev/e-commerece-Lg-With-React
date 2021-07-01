import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Dropdown, ButtonGroup } from "react-bootstrap";
import Brand from "./Brand data/brandimgs.jsx";
import Categoriesimages from "./Category data/Categoriesimags";
import CarouselData from "./carouselData";
import Subcategory from './subcategory data/subcategory';
import AuthService from "./Services/auth.service.js";

class Home extends Component {
  state = {
    Catogeries: [],
    subcategories: [],
    Products: [],
    Brands: [],
    NewArrivals: [],
    TopSellings: [],
    user: JSON.parse(localStorage.getItem("user")),
    Recommended: [],
    TopPicks: [],
  };
  getnewArrivals = async () => {
    await axios.get("https://localhost:44340/allproduct").then((res) => {
      this.setState({ NewArrivals: res.data });
      //console.log("new arrival ",res.data);
    });
  };
  getbestselling = async () => {
    await axios.get("https://localhost:44340/allproduct").then((res) => {
      this.setState({
        TopSellings: res.data,
        firstcards: res.data.slice(0, 4),
      });
      //console.log("bestsellings from home",res.data);
    });
  };

  getDataCategoryFromApi = () => {
    axios("https://localhost:44340/api/CategoriesAPi").then((res) => {
      this.setState({
        Catogeries: res.data,
      });
      // console.log("cat", res.data)
    });
  };
  getBrands = () => {
    axios("https://localhost:44340/api/BrandsAPi").then((res) => {
      this.setState({
        Brands: res.data,
      });
      // console.log("Brand", this.state.Brands);
    });
  };

  getrecommended = () => {
    if (this.state.user)
      axios(
        "https://localhost:44340/api/ProductsAPi/GetRecomendedProducts/" +
          this.state.user.id
      )
        .then((res) => {
          this.setState({
            Recommended: res.data,
          });
          //console.log("recommended", res.data);
        })
        .catch((err) => console.log(err));
  };
  getTopPicks = () => {
    axios("https://localhost:44340/api/ProductsAPi/GetRandomProducts/")
      .then((res) => {
        this.setState({
          TopPicks: res.data,
        });
        // console.log("top picks", res.data);
      })
      .catch((err) => console.log(err));
  };

  componentDidMount = () => {
    // if(localStorage.getItem("user")){
    //   let user=JSON.parse(localStorage.getItem("user"));
    //    this.setState({user})
    //     }
    this.getDataCategoryFromApi();
    this.getnewArrivals();
    this.getbestselling();
    this.getBrands();
    this.getrecommended();
    this.getTopPicks();
  };
  render() {
    //console.log("id",this.state.user)
    if (this.state.Catogeries.length === 0) {
      return <div>Loading......................</div>;
    } else {
      return (
        <React.Fragment>
          {/* Top */}
          <div className="container my-2 mt-2">
            <div className="row m-0 p-0">
              {/* Block1  Filter Categories*/}
              <div className=" col-12 col-md-3 p-0 m-0 card rounded">
                <div className="m-1 p-0" style={{overflowY:"auto",height: "380px",backgroundColor: "#fff"}}>
                 <h4 className="card-header text-center">Categories</h4>
                  {this.state.Catogeries.map((cat, i) => (
                    <div
                      className="text-left"
                      style={{width: "100%" }}
                    >
                      <Dropdown as={ButtonGroup}
                      style={{width:"100%"}}
                      className="text-right"
                      drop="down"
                      >
                        <Link
                          variant="Warning"
                          className="dropItem m-2"
                          style={{textDecoration:"none",fontSize:"20px",fontWeight:"600"}}
                          to={{
                            pathname: `/category/${cat.categoryId}`,
                            HandlerSaving: cat.subCategories,
                            name: cat.categoryName,
                          }}
                        >
                          {cat.categoryName}
                        </Link>
                        <Dropdown.Toggle
                          split
                          variant=""
                          id={i}
                          className="text text-right"
                          
                        />
                        <Dropdown.Menu style={{fontWeight:"600",fontSize:"20px", width:"100%",whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis",}}>
                          <h5 className="card-header text-center">Subcategories</h5>
                          {cat.subCategories.map((s, j) => (
                            <Dropdown.Item
                              href={"/subcategory/" + s.subcategoryId}
                              key={j}
                              style={{whiteSpace: "nowrap",overflow:"hidden",textOverflow:"ellipsis",}}
                            >
                              {s.subcategoryName}
                            </Dropdown.Item>
                          ))}
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  ))}
                </div>
              </div>
              {/* Block2 Slider*/}
              <div className="d-none d-md-inline-block col-md-8 bloc1 mt-0 bg-dark ml-5 p-2">
                <div className=" ">
                  <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators ">
                      <li
                        data-target="#carouselExampleCaptions "
                        data-slide-to={0}
                        className="active"
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={1}
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={2}
                      />
                      <li
                        data-target="#carouselExampleCaptions"
                        data-slide-to={3}
                      />
                    </ol>
                    <div className="carousel-inner bloc1">
                      <div className="carousel-item active sliditem">
                        <Link to={`/category/${this.state.Catogeries[0].categoryId}`} >
                        <img
                          src={`https://localhost:44340/${this.state.Catogeries[0].image}`}
                          className="d-block w-100 h-100 img-fluid imgslid"
                          alt="..."
                        />
                        </Link>
                      </div>
                      {this.state.Catogeries.slice(1,4).map((c,i)=><div key={i} className="carousel-item bloc1">
                        <Link to={`/category/${c.categoryId}`}>
                        <img
                         // src="https://eg.jumia.is/cms/ramadan-21/sliders/Slider-Desktop-EN_.jpg"
                         src={`https://localhost:44340/${c.image}`}
                          className="d-block w-100 h-100 imgslid img-fluid "
                          alt="..."
                        />
                        </Link>
                      </div>)}
                     
                    </div>
                    <a
                      className="carousel-control-prev"
                      href="#carouselExampleCaptions"
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
                      className="carousel-control-next"
                      href="#carouselExampleCaptions"
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
                </div>
              </div>
            </div>
          </div>
          {/* Sections */}
          
          <div className="container my-2">
            {/* Shop By Brand */}
            <Brand sendBrands={this.state.Brands} imgpath="https://localhost:44340/"/>
            {/* Top Picks for you */}
           {(this.state.TopPicks.length>0&& AuthService.getCurrentUser()) &&<CarouselData
              id="tt"
              prods={this.state.TopPicks}
              heading="Top Picks for you"
            />}
            {/* Recommened for you */}
            {this.state.Recommended && this.state.user && (
              <CarouselData
                prods={this.state.Recommended}
                heading="Recommened for you"
              />
            )}
            {/* Shop By Category */}
            <Categoriesimages sendCategories={this.state.Catogeries} />
            {/*  NewArrivals*/}
           {this.state.NewArrivals.length>0&&  <CarouselData
              id="nn"
              prods={this.state.NewArrivals}
              heading="New Arrivals"
            />}
            {/* TopSellings */}
           {this.state.TopSellings.length>0&& <CarouselData
              id="ss"
              prods={this.state.TopSellings}
              heading="Top Selling"
            />}
          </div>
        
        </React.Fragment>
      );
    }
  }
}

export default Home;
