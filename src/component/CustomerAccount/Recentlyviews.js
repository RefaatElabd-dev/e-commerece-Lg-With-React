// import React, { Component } from "react";
// import SmallCard from "../smallCard";
// class RecentlyViewed extends Component {
//   render() {
//     if (this.props.prods === undefined || this.props.prods.length === 0)
//       return null;
//     else if (this.props.prods.length <= 6)
//       return (
//         <React.Fragment>
//           <h4 className="mb-2 ">Recently Viewed</h4>
//           <div className="container">
//             <div className="row blog ">
//               <div className="col-md-12">
//                 <div className="row">
//                   {this.props.prods.map((c, i) => (
//                     <SmallCard cardprod={c} key={i} />
//                   ))}
//                 </div>
//               </div>

//               <div className="carousel-item ">
//                 <div className="row"></div>
//               </div>
//             </div>
//           </div>
//         </React.Fragment>
//       );
//     else {
//       return (
//         <React.Fragment>
//           <div className="container mt-4">
//             <h2 className="">Recently Viewed</h2>
//             <div className="row m-0 p-0 mt-2 mb-4">
//               {this.props.prods
//                 .slice(0, this.props.prods.length)
//                 .map((c, i) => (
//                   <div className="col-12 col-md-3 h-100 item-box-blog card mb-4">
//                     <SmallCard cardprod={c} key={i} />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </React.Fragment>
//       );
//     }
//   }
// }
// export default RecentlyViewed;
import React, { Component } from "react";
import SmallCard from "../smallCard";
class RecentlyViewed extends Component {
  render() {
    if (this.props.prods == undefined || this.props.prods.length == 0)
      return null;
  
    else {
      return (
        <React.Fragment>
          <div className="container  ">
            <h4 className="mb-2 ">RecentlyViewed</h4>
            <div className="row blog ">
              <div className="col-md-12 h-100">
                <div
               
                >
                  
                  {/* Carousel items */}
                  <div>
                    <div >
                      <div className="row">
                        {this.props.prods.slice(0, 5).map((c, i) => (
                          <SmallCard cardprod={c} key={i} />
                        ))}
                      </div>
                    </div>
                  </div>
                  {/*.row*/}
                </div>
                {/*.item*/}
                <div className="carousel-item ">
                  <div className="row">
                    {this.props.prods.slice(6, 12).map((c, i) => (
                      <SmallCard cardprod={c} key={i} />
                    ))}
                  </div>
                  {/*.item*/}
                </div>
                {/*.carousel-inner*/}
              </div>
              {/*.Carousel*/}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}
export default RecentlyViewed;

