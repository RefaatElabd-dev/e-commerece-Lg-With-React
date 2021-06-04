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
        <Categoriesimages sendCategories={this.state.categimages}/>
        <Brand  sendBrands={this.state.Brands}/>
        <BestSelling />

        <NewArrivals  />


      </>);
    }
  }
}

export default Home;