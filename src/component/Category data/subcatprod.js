import React, { Component } from 'react';
import SmallCard from '../smallCard';
import Card from '../Card'
import axios from 'axios'
import { Link } from 'react-router-dom';
class SubcatProd extends Component {

    // getDatasubategoryFromApi = (_id) => {
    //     //console.log(_id)
    
    //     axios("http://localhost:21231/api/SubCategories/categoryproduct/"+_id).then(res => {
    //   })}
    //   async componentDidMount(){
    //     await this.getDatasubategoryFromApi(1);
    //   }

    render() {
        if(this.props.subcategories===undefined||this.props.subcategories.length===0){
            return null;
        }
        else {
            return(
               <div className="card  ml-3" style={{ backgroundColor: 'white', marginTop: 30 }}>
                     <div style={{ backgroundColor: 'plum', marginTop: 10 }}>
                                <h5 className=" mt-4 col-md-9 " style={{ float: 'left' }}>{this.props.subcategories[0].subcategoryName}</h5>
                               <a className=" col-md-1 mt-4" style={{ float: 'right' }}>see all&gt; </a>
                     </div>
                     <div className="row mt-4">
                         {this.props.subcategories[0].products.slice(0,5).map((c,i)=><SmallCard key={i}  cardprod={c}/>)}

                     </div>

                </div>
            )

        }
        }

}
    export default SubcatProd;