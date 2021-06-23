import React, { Component } from "react";
import axios from "axios";
import DisplayedProducts from "../displyedproducts";
class Brand extends Component {
  state = {
    brandprods: [],
    slidprice:0,
    colors: [],
     sizes:[],
     prices:[],
     filterbrand: [],
     filtercolor: [],
     filteredprods: [],
     fcolor: [],
     fbrand: [],
   
     fshipping:[],
     fdiscount:"",
     filteredArray: [],
     filterDiscount:[]
  };
  getbrandprods = (_id) => {
    axios(
      "https://localhost:44340/api/CategoriesAPI/allProductBrand/" + _id
    ).then((res) => {
      this.setState({
        brandprods: res.data,
      });
      
    });
  };
  getbrandcolors = async (_id) => {
    await axios("https://localhost:44340/api/SubCategoriesAPI/allsubcolor/" + _id).then(async res => {
     await this.setState({ colors: res.data })
    }).catch(err => console.log(err))
  }
  getbrandtprices = async (_id) => {
    await axios("https://localhost:44340/api/SubCategoriesApi/allsubprice/"+_id).then(async res => {
       //console.log(res.data);
      await this.setState({ prices: res.data,slidprice:Math.max.apply(null,res.data) })
     }).catch(err => console.log(err))
  
   }
  async componentDidMount() {
    await this.getbrandprods(this.props.match.params.id);
  }
  render() {
    return (
      <React.Fragment>
        {/* <Allprodsfilters prods={this.state.brandprods}/> */}
        <div className="container my-3  text-center">
          <DisplayedProducts prods={this.state.brandprods} />
        </div>
      </React.Fragment>
    );
  }
}
export default Brand;
