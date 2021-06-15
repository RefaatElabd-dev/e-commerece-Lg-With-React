import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Pagination } from "../Pagination";

export class AllBrandsPagination extends Component {
  state = {
    brands: [],
    loading: false,
    currentPage: 1,
    brandsPerPage: 6,
  };
  getbrands = async () => {
    this.setState({ loading: true });

    this.setState({ brands: this.props.location.HandlerSaving });
    this.setState({ loading: false });
  };

  componentDidMount() {
    this.getbrands();
  }

  render() {
    //console.log("location",this.props.location)
    if (this.state.brands === undefined) {
      return <div>Loading.............................</div>;
    } else {
      const { currentPage, brandsPerPage, brands } = this.state;

      const indexOfLastProduct = currentPage * brandsPerPage;
      const indexOfFirstProduct = indexOfLastProduct - brandsPerPage;
      const currentbrands = brands.slice(
        indexOfFirstProduct,
        indexOfLastProduct
      );

      const paginate = (pageNum) => this.setState({ currentPage: pageNum });

      const nextPage = () => this.setState({ currentPage: currentPage + 1 });

      const prevPage = () => this.setState({ currentPage: currentPage - 1 });
      console.log(
        "hand",
        this.props.location.HandlerSaving,
        "stat",
        currentbrands
      );

      return (
        <div className="">
          <br />
          <Pagination
            brandsPerPage={brandsPerPage}
            totalbrands={brands.length}
            paginate={paginate}
            nextPage={nextPage}
            prevPage={prevPage}
          />
          <div className="container  col-md-12 row ">
            {currentbrands.map((c, i) => (
              <div className="col-md-2 " key={i}>
                <NavLink to={"/product/1"}>
                  <div className="item-box-blog h-100 mt-5">
                    <div className="item-box-blog-image h-100">
                      {/*Date*/}

                      {/* IMAGES*/}
                      <div
                    className="item-box-blog p-0 bg-light"
                    style={{ height: "150px" }}
                  >
                    <img
                      alt={`brand${c.brandName}`}
                      className="m-0 p-0"
                      height="100%"
                      width="100%"
                      //src="https://www.westernheights.k12.ok.us/wp-content/uploads/2020/01/No-Photo-Available.jpg"
                       src={c.image.data.data}
                     // src="45d240da-de50-4556-8876-043d61fb57a5_logo192.png"
                    />
                  </div>
                    </div>
                    <div className="item-box-blog-body">
                      {/*Heading*/}
                      <div className="item-box-blog-heading">
                        <p> {c.brandName}</p>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
          <br /> <br /> <br /> <br />
        </div>
      );
    }
  }
}

export default AllBrandsPagination;
