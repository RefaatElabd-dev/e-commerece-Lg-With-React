import React, { Component } from 'react';

class Category extends Component {
    state = {
        categorydata:[],
      }

      getcategdata=(_id)=>{
          
    axios("http://localhost:21231/api/Categories/categoryproduct/"+_id).then(res => {

        this.setState({
        categorydata: res.data
        })
        console.log("cat", res.data)
      });
      }
    render() { 
        return (
            <div className="container my-3 ">
  {/* causal */}
  <div className="d-none d-md-block col-md-10 offset-1 bloc1 mt-3 ">
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
  {/*------------block2 products----------------------------------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <h2 className=" text-center m-2">skin care</h2>
    <div className=" col-md-2  m-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body lotion</p>
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/skincare2.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body wash</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare3.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body scrub</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare4.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body screens</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare5.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">Tenning Oils</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare6.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">face mask</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare7.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial cleaner</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare8.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial care</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare9.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">hand and feets</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare10.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">skin care tools</p>
        </div>
      </div>
    </div>
    ‏
  </div> 
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Man's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>   
    </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block4c3catgory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p> Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4category1.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4catagory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4c3catgory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4category1.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p> Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4c3catgory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4catagory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4category1.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4c3catgory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4catagory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4c3catgory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block4catagory.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>Gillette  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*----------------------------------block 4*/}
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Women's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>  </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="./img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="./img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*block-----------------------*/}
  {/*------------block2 products---------*/}
  <div className="container mt-5  row text-center " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <div className=" col-md-3 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-3 mt-3 mb-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/skincare2.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-3 mt-3 mb-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare3.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
      </div>
    </div>
  </div> 
  {/*------------block5 products---------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <h2 className=" text-center m-2">make up</h2>
    <div className=" col-md-2  m-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body lotion</p>
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/skincare2.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body wash</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare3.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body scrub</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare4.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body screens</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare5.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">Tenning Oils</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare6.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">face mask</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare7.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial cleaner</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare8.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial care</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare9.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">hand and feets</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare10.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">skin care tools</p>
        </div>
      </div>
    </div>
  </div> 
  {/*---------------------------block-----------------------------*/}
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Women's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>  </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*------------------------------------------------------------------------block*/}
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Women's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>  </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*----------------------------------------block-products---------*/}
  {/*------------block2 products---------*/}
  <div className="container mt-5  row text-center " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <h2 className=" text-center m-2">offical store</h2>
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand1.jpg" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-2 mt-3 mb-3 " style={{display: 'inline-block'}}>
      <div className="store h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/brand2.jpg" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand3.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand4.jpg" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand5.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand6.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand7.jpg" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand8.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand9.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className=" col-md-2 mt-3 mb-3  " style={{display: 'inline-block'}}>
      <div className=" store h-100 ">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/brand6.png" alt="Card image cap" width="60px" height="60px" />
        </div>
      </div> 
    </div>
  </div> 
  {/*------------block2 products---------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <h2 className=" text-center m-2">skin care</h2>
    <div className=" col-md-2  m-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body lotion</p>
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/skincare2.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body wash</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare3.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body scrub</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare4.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body screens</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare5.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">Tenning Oils</p>
        </div>
      </div>
    </div>
  </div> 
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Women's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>  </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*-------------------------------------------black3---------------------------------------*/}
  {/*       carousel               */}
  <div className="card  container-fluid " style={{backgroundColor: 'white', marginTop: 30}}> 
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Women's Shavers</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>  </div>
    <div className="container mt-5 ">
      <div className="row blog ">
        <div className="col-md-12">
          <div id="blogCarousel" className="carousel slide container-blog" data-ride="carousel">
            <ol className="carousel-indicators ">
              <li data-target="#blogCarousel" data-slide-to={0} className="active" />
              <li data-target="#blogCarousel" data-slide-to={1} />
            </ol>
            {/* Carousel items */}
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/* IMAGES*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
              <div className="carousel-item ">
                <div className="row">
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block32.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block31.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="item-box-blog">
                      <div className="item-box-blog-image">
                        {/*Date*/}
                        <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
                        {/*Image*/}
                        <figure> <img alt src="img/block3.jpg" /> </figure>
                      </div>
                      <div className="item-box-blog-body">
                        {/*Heading*/}
                        <div className="item-box-blog-heading">
                          <p>braun  skil-epil</p>
                        </div>
                        {/*Text*/}
                        <div className="item-box-blog-text">
                          <p><span>EGP</span> <span>0.00</span></p>
                          <p><del><span>EGP</span> <span>0.00</span></del></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*.row*/}
              </div>
              {/*.item*/}
            </div>
            {/*.carousel-inner*/}
          </div>
          {/*.Carousel*/}
        </div>
      </div>
    </div>
  </div>
  {/*------------block2 products----------------------------------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <h2 className=" text-center m-2">skin care</h2>
    <div className=" col-md-2  m-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body lotion</p>
        </div>
      </div> 
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top " src="img/skincare2.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body wash</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare3.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body scrub</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare4.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">body screens</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare5.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">Tenning Oils</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare6.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">face mask</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare7.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial cleaner</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare8.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">facial care</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare9.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">hand and feets</p>
        </div>
      </div>
    </div>
    {/*---------*/}
    <div className="col-md-2 m-3" style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <img className="card-img-top" src="img/skincare10.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <p className="card-text">skin care tools</p>
        </div>
      </div>
    </div>
  </div> 
  {/*----------block-----------------------------------------------------------------------------------*/}
  <div className="container-fluid mt-5">
    <div className="row">
      <div className="col-md-3">
        <nav className="navbar  bg-white">
          <ul className="navbar-nav  w-100 ">
            <li className="nav-item  ">
             <b> CATEGORY</b>
            </li>
            <li className="nav-item mt-2">
              <a>{}</a>
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link" href="#">Beauty &amp; Personal Care</a>
              <a className="nav-link" href="#">Health Care</a>
              <a className="nav-link" href="#">Medical Supplies &amp; Equipment</a>
              <a className="nav-link" href="#">Oral Care</a>
              <a className="nav-link" href="#">Wellness &amp; Relaxation</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              Gender
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="checkbox" />  Femal</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Girls</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Kids</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Male</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Men</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Unisex</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Women</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Unisexe</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item  mt-2  mb-2 ">
              Product Rating
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="radio" /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz75McP1zuTahdKYVq_Ofci4u_k9CEoSjp822NYK1FKO1o_52LrMGVrcIFQo6NjG14w&usqp=CAU" width={80} alt />&amp; above</a>
              <a className="nav-link" href="#"><input type="radio" /><img src="https://media.istockphoto.com/vectors/three-stars-icon-vector-illustration-vector-id1137404126?b=1&k=6&m=1137404126&s=170667a&h=BJ8p22bYzLwkg1TjK3SkN5NV5CTPrqoRe-6ZJM72B5M=" width={80} alt />&amp; above</a>
              <a className="nav-link" href="#"><input type="radio" /><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXcAAACGCAMAAAARpzrEAAAA51BMVEX///91dXX+zgD///7///xzc3N3d3f9//9sbGz+zwD//f9vb2//zABpaWn8/Pz9//3w8PDn5+f29vatra3V1dXh4eGXl5eqqqq/v7+4uLju7u6enp7//+yQkJDb29vFxcX//+b///N/f3////bNzc3//+CEhISioqL//9j1ywD1zB3//9f643j/+8H96IpgYGD+97Lw23r/+8bt1ETz1F3965X0zzD10Uz3xxX12Vn97p7+8LP333z89Kr200T32Wz03l/96I/4zCz455/1zTn655X++rrxx0L02FH41mnzzxL+9ccAAAD5F5AcAAAQKklEQVR4nO1dCXviOBIVvm8D5o65YgixQ47JJiQhB9OZY3s7+/9/z1bJEMxhW+D09+3M6GWGThOo2E9PTyWpRBPCwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHB8X8GiagqPhQKYkiqKhlfdEX/CIiSKgGA+UKQIFDRGP8sgFAlUS3ImUgMtWiMfxjQYKShVMxngPRgGIiceGaIUkCC519ui/FO1ODyl8vCvHca9YIRCKk2aoVjOCejwjHyIInG+b/C6bBQkEAd3IV3xWIAJna3aAji2YpTNEbLNquFLyQH4O/3oTW7LBTEJTeR/nhT8FIqWskuJFYgvGorWqvgdVSVkuYVjJEKMX5UJfX8wbLCaQDPiAe7jSjSQOr4KbSsJ38V9jicmIpcVPBNUykVFXxLU5SfJnhXNAxwd1cU70PBst5vJdcg7qHE0wwU8qH5oyBY0bOrwvfHDhUg95KiFXPnslkqlbR+oRjVU7gOu10oRj7U8Zug6yD4oSoaQOFh74bXQ/YP7k5jPPlAuuoeObxOQKqlQoJ3SBPariSfFhJrS5MV+PpZghdjcbvzR0sPBX32EU9+DoKE3iSJ4msk6KGlR8+BKmEfOAYVDWgHoRURfNmkMQoJHuQOtJd+luDBYtAmpDG4uw4QXnw6cT0IEg4KrjH4bgHvgiDcjWEWdqTHn8glpajgPVkuoeDPCoi1j10GLuUnCR55l8CP7yMBPAI4m12CdI+YP0Ei+vrDAuIhRvQsuof3GoTToXIH2L3D300jgNyVOEYRwVN3xxjmTxI8JJCBSwbo7oIFpIUv/hG8g78TSGZgZLaAd2ExwB5wjNGcaDHtRQTvmTHtSul4wfftZeOVSj9J8KooqcN5pAu6haOiMLslB4+rKG9pDl1GQMWDw9Mc/gjeK/bqbo8WPMpdXkbRjp1wotyp3qHTfI3gUckiZBsqJByiKELCBzZz8R2UTnmHdORlqKqUd8wFxXULbDQGDgHLbgExREkyBr8KlHfoNoK+gE4jGvhmNU4oGYeME3NFO7jzkXfYNiENoXpX5DPnuCS+/9n+sqJ8jeCRMCBdRbrgr4YhqbFUl9DfL/HHhE5+6GK6Krr0jUnugGkX/4enVPxGhanqOoYFgndxCkZfh43NNs5WtE+5Q0pzlOCd6jrE0YJ3TuUV7XAdRSe+MYCpxLyI0nLxJCR4D6f+av8D83D8U4wp/1Q89BLXhTe6y+clyP8XVoJ3626A/QnfKi6dPt+7HDLR5E/W5CMd3jMTvIPgj4mxljsmk18ieBW1G2sV7ERy4XE8DRO0C3o0H6I9xF60ZI8S/Cl4eBt6i6QCqfAiVzXGV4/WJ/G6ZT1+g8mTiAHijsFkNDUb73J1w6WjhNZL0l6S7WNWWOqlRJ9RZHNyRIxtqMhXzBh4jCgG4z8XP/S1VnFojaYXQYBEGZiWiECyscmb6gbgGy5tPZG4w8HlNIJsSE80XzS9HCz1LhEDekduilRtg8oSNywrdrN84N05/Q3awePtk86hMUaKqWzGaFQOjLEL3EhVxSAQg8H57c38avF9FiYcAgVv6T9+f5pezS8vxkMJm2lp72ujwF6C+ac0HN/e3F9Nn2ZhgnOLtkA4e1pczW8+xv4Q25lIQdp9OuVKrdVsKJoilzZhyt1mu1Yp55qF41QrvZbXVbStCEpJ1rqT9qhezh9hMUbfa+zEkBXTPMMYneNX2nD/00eyXqZPb7OI0mVhEvJJGrpEPPuJfn9D+v/8GA8DaSMlUQN/8PF6f7W4wxi0sYRECGzHWP1hNHsD+u9fPwbDXcEj4X2veybbtmbSFKS0A1Oz7dJp12shdfvIojEaZyXN1ujosNl48AwYRRyj2UqhDgiv9duNMwWvw9y5BIiIzWfa8umyCQmdnx0EVXp+ent/DJfsULoSWqWEUdvR6bKBYD0CdYtxQJLzIPF28fZOCcdWok214TKWEC5/AQ0ShtH72/R8a2Atn5yVTLhTzBnQ1feQTkc1uOdS/MKznf7unJwpGjAetxmNsN1nsB0UNDDZNKFlzrrbm1lO80yB8ObqMpR9F1JaqgJCaED/4atHqvTbYzwzjb1cWK4PJIwGM/ClhOksSBfeL4bg9QmHf45WRFsbJpUIsg5KwwjR89bI2rtWSjGpq7tKu+HPu77eTgvL13SOpKxeUNoTZGOMVErX2/MgXDT+fO8+0pe/YP0j5fDRGkQ7XtBZpb5D+F768CG6GgQbPiOOX8JV4+3nfQNIO2anW2jbmURv3TxQpjV3endfU7KbawMQw2zsZIUjGEblQy5F61YP9Rk0i/NFLFJrQ5UpvMOLontf+szhKSQDck9r6SK5xOPvCafjXX9v2wfcLDjsLu2YarPHQKWe7Ikx0lK95YtoJ3TeNF6EsZNY+YqH8fXex2nrRiLpugNQvMVGvI60D9Q9l9raTh2yeNeae+9npLFzpmj7aKcTB3bekXZy8MAKqbeBxC9XwfKlGt0PDSPOIj9HVhWXMKfx8iOD4PXHF1D7vglry2ZSGmYUqZ46YrQaBdWeEqOnyWySh+bfNSpm4sXzKRLPwJj+eB/QEr6N+aq6Urxg5XcZS3+88uG37r0aRpuAyWv6UMaqVsVOn3jWTEaHNxvOESZDFxlBu9J4+kiHzDx/B7XDBClelhTX6zOGIbnG4Cpisqr3ex+nTfsnrCMW4hU5czW2xmRXMP3NiFHfzdv3QUvrMXlwJVwqUNUBVXwWZ8hpBGoPJLqUKyYnrFj4KxL/KhKyYyBwqUZyDDVlgWbEQlrOInjP3M7a99CeUwxTYclpjqY9Lm3BdfHBVWilJN80ecdmiV59ksYXYniPyzLpdgUuZNFVtuUv3QtQa8YN05lT7u5yr5TLGhhVtj9UYBTJDqJoX7BCBjn4u55GPE3u9dncj6dLKZRBr7mKhCzBQ4z7nbx9G7VMtQIbDKVf9WzSaY/Js+XKqZlNe8b4wAxwCv/bj6yMRp+94liI9pLGu2v491GG0+j6+5yhXLKW5a0w1WFZD67vLKpt056PHOLj8aFYFRpWu6PHp9MugEGooigF6T6D23s+jBPpvEeYyeSvvGdaDWOhY9bAiN6ez5cDHp8Bs8F0HdlwJSNw1Yvf05Uq3I1JsEogU6JIgaHevqXGEPSHscq049HN4OyUUWENOb3xFMaF/GZq40Eme+hC/j6IxIDMLrhLHVh14Y9gNaSmMmeIRB2+pPNuvUgu04GnjImrmZX9JZGRkTJLtZ56HfLR++xbcLGWbpqu9/Am3s7e3PHYhIG7V99SBwnd+kbYyiRrdppWFSZ3R1SuU+etzG3XSdO7IstfYTNoEZCBB3fpuUg4x5UwuiudRh3MA0Q3SNW7JYQv4FQiQyFBP3WRRTFZ11yh7VJ5bxC2go5exizuS/Suotpd/yF9SLReglxnFg2i+k9pISC1Xwxdl+Vy0n2VvXCsnRGDtaygn+4zpVLhAyQknvNL5Dx1XAVzvvNzK74kWsCdkb8/DFQm3rsZSeAB42oqWMdVL32cUa4P3WTfh7iy4jJK4QxSEf3tPL/UCIj/mGVMnGYXTLw7WWmzxni/pxm8a2wn1ZzU9leOraPaAvIuknla/k73tW/zz2wA78+hldp4wo8/VZfB3jva9l0mwFgKXzXTAgBMtsrg6qmSiLC18/glhZIi2oyUOiQiaeFz/kEnkQR/hBlz3nDOVOJayxjOWKupK8kY25u1jINzYt6EJfSbUeTj18S2MNxM3zfmnZAc/pGydJuASoZTYStIMop1FbAcMmttVizhnv5aeIzlWlvrmpvbGIwJ/MaC8naNg3zKFCMPkCAOHvSNosbE+qSuW9bLMM8joNcMfhWS1TdWssAAJk4LpsN9k4StKrJmambyjtkSGi9pzSaNkeSMaZOotV6vUBTZNrWNttS+JKGB8e52pq+4tsLZ1fPt6zQKadkSiFYXvg9yE0lXvfiXQGs9sNRGeH+5uXxdzFYbWfD4dsFyMWermwVXkZu9eq+9KtqiBS1MnK3TGcWUJzWIcaolVoeZJvnNeGVUxi/tpFavt05xYrEMYhev1oNxNRDVG1rUSAsyfp/e+lIQ+FjoqAtxa8z2lABswoB0JlqV0YTRyy0WHviXi1koLKuZ3m8Z1meqn93a1JrxzXU8WVOWBS1s97tKZ6C/nMTZSxlab2U3Jksysk5nZG15Vr/aUj77QLHTzCvAwDoP6ba0JcyAdSzshYm/f/MUAWuo1fA2f44v3vxYlvpF0z99F6cFqjh4XkQ0FbWsx0uSnxXRIVFG1idristN04zLt5jut7xcwpXtxKcblL3SciLMlNDQUx6U9e66marYenGMr0hoJFEdYikGZezSx2pqMU4vB893IfWN8Le0UtIVVDWAVJQmnXc3Pm4gEoMWG/sx8xYmNPnXQtMZ0DUy5qyLDysT28QRlmkhuK7JlHVk7NOHHeg3NvV5phPvFTNm/WyzocvtZdHkF6zQiK6r+gt0CGRdxKMIYDMiXKmqSoObB1qj8UfO+TJoq+ELFrVGTzcDyi+WCdOKY9V/forQwq4Y9j3aeETX3ilcBCIaNjgtUwI3ssFh7LNdO+lg65WYVrUwJVLs090zIlXa9yChKTyyYjH2+b8pYz76NE2z8ZN/6KklcTB/AA9aDPLCSOMHXXi8ex5gmUIg4jkGCZvQpa33HfrTf3K3+RwcEu2z/WZS70JfYEngJuDrp/tjYOspLAkNpLO2st+QaOtpX3HwQwouHn58f/XpggEe/YiPVNKKPFGVLu6/R4txjkkYZHwX3c3hZaq0rtSm3wHzZDz/Hi78jA0rCod0r/dobIVe11YYbmdyfZpu4dB6LOd/vWullbqRB633FSs0IOvg+dXH4xgoUBE7AA6K8Dzu/rtqcP7bRw5j+KlkH+AwakCbjZ5GEKExVLphAnHF8fwDN0dyUKk5WfuWvR7DrmZltI/Yz7f1mMbmvTHW1/FVHwMU6zOtxkLMn+Kvavf2vpA+eehJWA4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg4ODg6Ovzuq8fmgipM47Lg6dpRyRHV04nS8Nml7pDzpO57ntJqk5/VJdeKMmjXH+9n/LO1fH9Vmm5w1Ky3S8ryuV/da5ZNeu11Rep5X6XnwBY3S9spes+oBsDnwsBmZOKTSdUiDTEaderPZge+6pOu0u85Jv91qfcEnBvzNUZ2MnHZl1CTNUbVNuq1mpU28FgGmyeSEkO6EkE6TVFrlVtM5qXqElP+L5Dcd0plUke3apNdq9+C7evu0NunWmz2vOTrys9j/Qaj2T6vtTt8bNWrtFkh1VOmTUaPSqJ+0R+1WpdkfjZxGv9Lwek0QOZ5qx3+up6LA67rVnlbutxu95qRe1yqd/sTpdCuNFvSS7ld8NMnfG+UqqTpVB/7oOB38m0OfqlbL+LMygf/geXiEb8lKxtVy1elUSRleWY5fj08A2fD2+AkOjr8j/iqG8j9WxiuXB6co0gAAAABJRU5ErkJggg==" width={80} alt />&amp; above</a>
              <a className="nav-link" href="#"><input type="radio" /> <img src="https://image.shutterstock.com/image-vector/glossy-golden-one-star-icon-260nw-673504159.jpg" width={80} alt /> &amp; above</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              Brand
            </li>
            <li className="nav-item ml-3 ni">
              <input type="text" style={{borderRadius: 20}} placeholder="search" />
              <a className="nav-link" href="#"><input type="checkbox" />   3M</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Abou Yousef</a>
              <a className="nav-link" href="#"><input type="checkbox" /> Ajmal</a>
              <a className="nav-link" href="#"><input type="checkbox" />  AlRehab</a>
              <a className="nav-link" href="#"><input type="checkbox" /> Amanda</a>
              <a className="nav-link" href="#"><input type="checkbox" />  AMC Group</a>
              <a className="nav-link" href="#"><input type="checkbox" />  As Seen On Tv </a>
              <a className="nav-link" href="#"><input type="checkbox" />  Babyliss</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              PRICE(EGP)
            </li>
            <li className="nav-item ml-3">
              <input type="range" min={1} max={100} defaultValue={50} className="slider nav-item" id="myRange" />
              <div><input type="number" /></div>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              SIZE
            </li>
            <li className="nav-item ml-3 ni">
              <input type="text" style={{borderRadius: 20}} placeholder="search" />
              <a className="nav-link" href="#"><input type="checkbox" />   XXS</a>
              <a className="nav-link" href="#"><input type="checkbox" />  XS</a>
              <a className="nav-link" href="#"><input type="checkbox" /> M</a>
              <a className="nav-link" href="#"><input type="checkbox" /> S</a>
              <a className="nav-link" href="#"><input type="checkbox" /> M/L</a>
              <a className="nav-link" href="#"><input type="checkbox" />  XL</a>
              <a className="nav-link" href="#"><input type="checkbox" />  XXL</a>
              <a className="nav-link" href="#"><input type="checkbox" />  XXXL</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              Color
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="checkbox" /> black</a>
              <a className="nav-link" href="#"><input type="checkbox" />  red</a>
              <a className="nav-link" href="#"><input type="checkbox" /> white</a>
              <a className="nav-link" href="#"><input type="checkbox" />  yellow</a>
              <a className="nav-link" href="#"><input type="checkbox" /> green</a>
              <a className="nav-link" href="#"><input type="checkbox" />  gray</a>
              <a className="nav-link" href="#"><input type="checkbox" />  brown </a>
              <a className="nav-link" href="#"><input type="checkbox" />  blue</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              Product Type
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="checkbox" />   Dare</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Eau De Parfum</a>
              <a className="nav-link" href="#"><input type="checkbox" />Eau De Toilette</a>
              <a className="nav-link" href="#"><input type="checkbox" />  IPX7 full body waterproof</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item mt-2  mb-2">
              Shipped from
            </li>
            <li className="nav-item ml-3">
              <a className="nav-link" href="#"><input type="checkbox" />   Shipped from Egypt</a>
              <a className="nav-link" href="#"><input type="checkbox" />  Shipped from abroad</a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item  mt-2  mb-2 ">
              SELLER SCORE
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="radio" /> 80% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 60% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 40% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 20% or more </a>
            </li>
            <div className="dropdown-divider" />
            <li className="nav-item  mt-2  mb-2 ">
              PRODUCT DISCOUNT
            </li>
            <li className="nav-item ml-3 ni">
              <a className="nav-link" href="#"><input type="radio" /> 50% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 40% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 30% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 20% or more </a>
              <a className="nav-link" href="#"><input type="radio" /> 10% or more </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="row col-md-8 mt-sm-5 mt-md-0" style={{backgroundColor: 'white', marginLeft: 20}}>
        <div className="card mt-4 mb-4" style={{width: '70rem'}}>
          <ul className="list-group list-group-flush"> 
            <li className="list-group-item ">Health &amp; Beauty Products</li>
            <li className="list-group-item">56589 products found</li>
            <li className="list-group-item">      
              <section>
                <div className="container productCont">
                  <div id="gallery1" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="row rbg rounded py-3">
                          {/* cart 1 ends here */}
                          {/* card 2 */}
                          <div className="col-md-4">
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
                                <span className="text-uppercase ">Add to cart</span>
                              </div>
                            </div>
                          </div>
                          {/* cart 2 ends here */}
                          {/* card 3 */}
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/* cart 3 ends here */}
                          {/* card 4 */}
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*----*/}
                          <div className="col-md-4">
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
                          {/*  ------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*----*/}
                          <div className="col-md-4">
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
                          {/*----*/}
                          <div className="col-md-4">
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
                          {/*0----*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                          {/*------*/}
                          <div className="col-md-4">
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
                        </div></div></div></div></div></section>
            </li>
          </ul>
          {/*pagination---*/}
          <nav aria-label="Page navigation example" style={{marginTop: 30}}>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link" href="#" tabIndex={-1}>Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/*----------------recently viwed------------------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <div style={{backgroundColor: 'plum', marginTop: 10}}>
      <h5 className=" mt-4 col-md-9 " style={{float: 'left'}}>Recently viwed</h5>
      <a className=" col-md-1 mt-4" style={{float: 'right'}}>see all&gt; </a>   
    </div>
    <div className=" col-md-3  m-3 " style={{display: 'inline-block'}}>
      <div className="card h-100">
        <div className="card-img-top-wrapper">
          <div className="card-overlay" />
          <div className="item-box-blog-date bg-blue-ui white"> <span className="mon">-20%</span> </div>
          <img className="card-img-top" src="img/skincare1.jpg" alt="Card image cap" width="200px" height="150px" />
        </div>
        <div className="card-body">
          <div className="item-box-blog-text">
            <p>Ab Wheel Roller for Exercies </p>
            <p><span>EGP</span> <span>0.00</span></p>
            <p><del><span>EGP</span> <span>0.00</span></del></p>
          </div>
        </div>
      </div> 
    </div>
  </div>
  {/*--------------------------block-------------------------------------------------*/}
  <div className="container mt-5  row  " style={{display: 'inline-block', backgroundColor: 'white'}}>
    <div className=" col-md-12 m-3 " style={{display: 'inline-block'}}>
      <p> Shop for All Health &amp; Beauty Products on Jumia Egypt </p>
      <p> Health &amp; Beauty Products for a Healthier &amp; Younger You with Jumia Egypt</p>
      <p style={{fontSize: 'small'}}><b> Health and beauty</b> are two very important matters in our everyday lives.
        We need to maintain our health as much as possible to be able to live every day to the fullest and with beauty,
        you can possess the most confidence making you that much more attractive.
        Many brands strive to help us achieve these two assets by providing medicine and
        care products for health or makeup and cosmetics for beauty. 
        At Jumia Egypt, you are promised to find the biggest brands for</p> 
      <p style={{fontSize: 'small'}}><b>health and beauty</b>
        products with the fastest results guaranteed. If you’re a woman looking for quality makeup brands,
        perfume for women along with skin care products, you can find many choices with Jumia Egypt such as aging creams,
        lipsticks and dermaroller, for example. For men,
        we also offer skin care products and best perfume for men along that best suit you. 
        Along with toiletries and cosmetics that work both ways and help satisfy all needs for everyone. 
        Jumia Egypt brings you the best and most affordable prices in the online market to ensure you the 
        best experience while you lift your worries away by staying healthy and beautiful.</p>
      <p>Live Young &amp; Long with All Health &amp; Beauty Products on Jumia Egypt</p>
      <p style={{fontSize: 'small'}}>
        <b> Jumia Egypt</b>makes sure to take care of you and your happiness and that’s why we only 
        seek to provide you with the best brands only. Whether it’s beauty makeup or perfume for men,
        whether it’s for him or for her, we offer you the biggest category and widest variety online. 
        Shopping for the best products for every skin and body type for a happier you, such as Jojoba oil, for example. 
        Shop now with just a few clicks and get all your favorite products with secure payments and fast delivery only at Jumia Egypt!
      </p>
    </div>  
  </div>
</div>

        )}}

        export default Category;