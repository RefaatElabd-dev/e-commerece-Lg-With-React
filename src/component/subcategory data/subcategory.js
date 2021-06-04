import React, { Component } from 'react';
import axios from 'axios';
import Brand from '../Brand data/brandimgs'
import { Link } from 'react-router-dom';


class  Subcategory extends Component {
    state = {
        subcategoryprods:[],
        subcatatbrands:[]
      }

      getsubcategdata=(_id)=>{
          
    axios("http://localhost:21231/api/Categories/categoryproduct/"+_id).then(res => {

        this.setState({
        subcategoryprods: res.data
        })
        //console.log("cat", res.data)
      });
      }
      getsubcategorybrands=(_id)=>{
        axios("http://localhost:21231/api/Categories/allBrandInsubcategory/"+_id).then(res => {

        this.setState({
          subcatatbrands: res.data
        })
        console.log("cat", res.data)
      });

      }
      componentDidMount(){
        this.getsubcategorybrands(this.props.match.params.id);
        console.log(this.props.match.params.id)
      }
    render() { 
        return (
            <div className="container my-3 ">
              {this.state.subcatatbrands.length>0 && <div className="container-fluid mt-5">
                   <Brand sendBrands={this.state.subcatatbrands}/>
                 </div>}
                 
            </div>

        )}}

        export default Subcategory;