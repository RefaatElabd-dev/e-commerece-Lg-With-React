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
                <div>
            {(this.props.subcategories[0].products&&this.props.subcategories[0].products.length>0) &&   <div className="card  ml-3 " style={{ backgroundColor: 'white', marginTop: 10 ,paddingLeft:5}}>
                     <div style={{ backgroundColor: 'plum', marginTop: 10 }}>
                                <h5 className=" mt-4 col-md-9 " style={{ float: 'left' }}>{this.props.subcategories[0].subcategoryName}</h5>
                               <a className=" col-md-1 mt-4" style={{ float: 'right' }}>see all&gt; </a>
                     </div>
                     <div className="row mt-4">
                         {this.props.subcategories[0].products.slice(0,5).map((c,i)=><SmallCard key={i}  cardprod={c}/>)}

                     </div>

                </div>}
               {(this.props.subcategories[1].products&&this.props.subcategories[1].products.length>0) && <div className="card  ml-3" style={{ backgroundColor: 'white', marginTop: 10 ,paddingLeft:5}}>
                     <div style={{ backgroundColor: 'plum', marginTop: 10 }}>
                                <h5 className=" mt-4 col-md-9 " style={{ float: 'left' }}>{this.props.subcategories[1].subcategoryName}</h5>
                               <a className=" col-md-1 mt-4" style={{ float: 'right' }}>see all&gt; </a>
                     </div>
                     <div className="row mt-4">
                         {this.props.subcategories[1].products.slice(0,5).map((c,i)=><SmallCard key={i}  cardprod={c}/>)}

                     </div>

                </div>}
                </div>
            )

        }
        }

}
    export default SubcatProd;