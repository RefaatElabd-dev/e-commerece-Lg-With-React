// import React, { Component } from "react";
// import Card from "./Card";


// class AllBestSelling extends Component {
//     state={
//         alldata:this.props.location.HandlerSaving,
//     }
  
//     render() {
//         console.log("card product data",this.props)
//         if(this.state.alldata==undefined||this.state.alldata.length==0) return null;
//         return (

//             <React.Fragment>
               
                
//               <div className="container row  ml-3">
//                   {this.state.alldata.map((c,i)=><Card cardprod={c}  key={i}/> )}

//               </div>
//             </React.Fragment>)

//     }
// }
// export default AllBestSelling;

import React, { Component } from 'react';
import axios from 'axios';
import AllProducts from './AllProducts';
import { Pagination } from './Pagination';



export class AllBestSelling extends Component {
  state = {
    products: [],
    loading: false,
    currentPage: 1,
    productsPerPage: 4
  };

  componentDidMount() {
    const getproducts = async () => {
      this.setState({ loading: true });
      // const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const results = await axios.get('http://localhost:21231/api/products');

      this.setState({ products: results.data });
      this.setState({ loading: false });
      console.log("ss:"+results.data);
    };

    getproducts();
  }

  render() {
    const { currentPage, productsPerPage, products, loading } = this.state;

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = pageNum => this.setState({ currentPage: pageNum });

    const nextPage = () => this.setState({ currentPage: currentPage + 1 });

    const prevPage = () => this.setState({ currentPage: currentPage - 1 });

    return (
      <div className="container mt-2">
        <AllProducts products={currentProducts} loading={loading} />
        <Pagination productsPerPage={productsPerPage} totalproducts={products.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
      </div>
    )
  }
}

export default  AllBestSelling;