import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//import SmallCard from  './smallCard'
import Allprodsfilters  from '../allprodsfilters'
class Brand extends Component {
    state = {
        brandprods:[]
      }
    getbrandprods=(_id)=>{
        axios("http://localhost:21231/api/Categories/allProductBrand/"+_id).then(res => {

            this.setState({
                brandprods: res.data
            })
            //console.log("cat", res.data)
          });
    }
  async  componentDidMount(){
await this.getbrandprods(this.props.match.params.id);
    }
    render() { 
        return ( 
            <React.Fragment>
                <Allprodsfilters prods={this.state.brandprods}/>

            </React.Fragment>
        )}}
        export default Brand;