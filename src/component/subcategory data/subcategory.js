import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DisplayedProducts from '../displyedproducts';
import Brand from '../Brand data/brandimgs';


class  Subcategory extends Component {
    state = {
        
    subcategoryprods:[],
    subcatatbrands:[],
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
      }

      getsubcategdata=(_id)=>{
          
    axios("https://localhost:44340/api/SubCategoriesAPI/categoryproduct/"+_id).then(res => {

        this.setState({
        subcategoryprods: res.data
        })
        
      });
      }
      getsubcategorybrands=(_id)=>{
        axios("https://localhost:44340/api/CategoriesAPi/allBrandInsubcategory/"+_id).then(res => {

        this.setState({
          subcatatbrands: res.data
        })});
 }
 getsubcategorycolors = async (_id) => {
  await axios("https://localhost:44340/api/SubCategoriesAPI/allsubcolor/" + _id).then(async res => {
   await this.setState({ colors: res.data })
  }).catch(err => console.log(err))
}
getsubcatprices = async (_id) => {
  await axios("https://localhost:44340/api/SubCategoriesApi/allsubprice/"+_id).then(async res => {
     //console.log(res.data);
    await this.setState({ prices: res.data,slidprice:Math.max.apply(null,res.data) })
   }).catch(err => console.log(err))

 }
      handlechecked = async (e) => {
        if (e.target) {
          if (e.target.name == "color") {
            //Copy List of checked colors
            let ncolors = this.state.fcolor;
            //Push New color
            if(e.target.checked){
              ncolors.push(e.target.value)
            }else{
              let I = ncolors.indexOf(e.target.value);
              ncolors.splice(I, 1);
            }
            await this.setState({ fcolor: ncolors })
           if(this.state.filteredArray.length==0){
            //get Filterd Products with fcolor array
            let filteredProducts = this.state.subcategoryprods.filter(item => this.state.fcolor.includes(item.color)) 
            await this.setState({filteredArray: filteredProducts})
          console.log(this.state.filteredArray)
          }
        else{
           let filteredProducts = this.state.subcategoryprods.filter(item => this.state.fcolor.includes(item.color)) 
            await this.setState({filteredArray: filteredProducts})
          console.log(this.state.filteredArray)
    
        }}
          //Color Filteration complete
          //TODO Rest Filters
          //==========================brands filter======================================================
          if (e.target.name == "brand") {
           //Copy List of checked brand
            let nbrands = this.state.fbrand;
            //Push New brand
            if(e.target.checked){
              nbrands.push(e.target.value)
            }else{
              let I = nbrands.indexOf(e.target.value);
              nbrands.splice(I, 1);
            }
            await this.setState({ fbrand: nbrands })
             if(this.state.filteredArray.length==0){
            let filteredProducts = this.state.subcategoryprods.filter(item =>this.state.fbrand.includes(`${item.brandId}`) )
            await this.setState({filteredArray: filteredProducts})
            console.log(this.state.filteredArray)
            }
            else{
              let filteredProducts = this.state.subcategoryprods.filter(item =>this.state.fbrand.includes(`${item.brandId}`) )
             await this.setState({filteredArray: filteredProducts})
            console.log(this.state.filteredArray)
            }
           }
          //Color Filteration complete
          //TODO Rest Filters
          //=========================shipping filters=====================================================
          if (e.target.name == "shipping") {
            //Copy List of checked brand
            let nshipping = this.state.fshipping;
            //Push New brand
            if(e.target.checked){
              nshipping.push(e.target.value)
            }else{
              let I = nshipping.indexOf(e.target.value);
              nshipping.splice(I, 1);
            }
            
            console.log(nshipping)
            await this.setState({ fnshipping: nshipping })
            console.log("state fcolor",this.state.fshipping)
    
    
            // Finsh updating fshipping Array
    
            //get Filterd Products with fshipping array
            if(this.state.filteredArray.length==0){
            let filteredProducts = this.state.subcategoryprods.filter(item =>this.state.fshipping.includes(`${item.ship}`) )
            //console.log(this.state.fbrand.includes(1) )
            await this.setState({filteredArray: filteredProducts})
            console.log(filteredProducts)
            }
            else{
              let filteredProducts = this.state.subcategoryprods.filter(item =>this.state.fshipping.includes(`${item.ship}`) )
            //console.log(this.state.fbrand.includes(1) )
            await this.setState({filteredArray: filteredProducts})
            console.log(filteredProducts)
            }
        
            
          }
        
        }}
    
    
          handlercheckedradio=async(e)=>{
    
            //=========================discount filter=============================================
            if (e.target.name == "discount") {
              if(this.state.filteredArray.length==0){
              await  this.setState({filterDiscount:this.state.subcategoryprods})
              }
            else{
                await  this.setState({filterDiscount:this.state.filteredArray})
               }
              if (e.target.checked) { let filteredProducts = this.state.subcategoryprods.filter(item =>item.discount >=parseFloat(e.target.value*.01)
                  )
                  await this.setState({ filteredArray: filteredProducts })
                  console.log(e.target.value*.01)
                  console.log(this.state.filteredArray)
               }
               }
               //===============================rating filter====================================
               if (e.target.name == "rating") {
                 
                if(this.state.filteredArray.length==0){
                await  this.setState({filterDiscount:this.state.subcategoryprods})
                }
              else{
                  await  this.setState({filterDiscount:this.state.filteredArray})
                 }
                if (e.target.checked) { 
                  let filteredProducts = this.state.subcategoryprods.filter(item =>item.rating >=parseFloat(e.target.value)
                    )
                    console.log(filteredProducts)
                    await this.setState({ filteredArray: filteredProducts })
                   // console.log(e.target.value*.01)
                   
                 }
                 }
              }
        
           
          
          //Color Filteration complete
          //TODO Rest Filters
          handleprice= async(e)=>{
            if(e.target.name=="price"){
             this.setState({slidprice:e.target.value})
              if(this.state.filteredArray.length==0){
                await  this.setState({filterDiscount:this.state.subcategoryprods})
                }
              else{
                  await  this.setState({filterDiscount:this.state.filteredArray})
                 }
               
                  let filteredProducts = this.state.subcategoryprods.filter(item =>(item.price >=parseFloat(e.target.min)&& item.price <=parseFloat(e.target.value) )
                    )
                    await this.setState({ filteredArray: filteredProducts })
                   // console.log(this.state.filteredArray)
                   
                 
    
            }
    
          }
        
     
    
     async componentDidMount(){
      await  this.getsubcategdata(this.props.match.params.id);
      await  this.getsubcategorybrands(this.props.match.params.id);
      await this.getsubcategorycolors(this.props.match.params.id);
      await this.getsubcatprices(this.props.match.params.id);
        //console.log(this.props.match.params.id)
      }
    render() { 
        return (
          <div className="container my-3">
             {this.state.subcatatbrands.length>0&&  <div className="container-fluid mt-5">
          <Brand sendBrands={this.state.subcatatbrands} />
        </div>}
          <div className="container-fluid mt-5">
          <div className="row m-0 p-0">
            <div className="col-md-3">
              <nav className="navbar  bg-white">
                <ul className="navbar-nav  w-100 ">
                  <li className="nav-item  ">
                    <b> </b>
                    
                  </li>
                 

                  <li className="nav-item  mt-2  mb-2 ">
                    Product Rating
                  </li>
                  <li className="nav-item ml-3 ni">
                    <input type="radio" name="rating" value="4" onChange={this.handlercheckedradio} /><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyz75McP1zuTahdKYVq_Ofci4u_k9CEoSjp822NYK1FKO1o_52LrMGVrcIFQo6NjG14w&usqp=CAU" width={80} alt />&amp; above<br/>
                   <input type="radio"  name="rating" value="3" onChange={this.handlercheckedradio}/><img src="https://media.istockphoto.com/vectors/three-stars-icon-vector-illustration-vector-id1137404126?b=1&k=6&m=1137404126&s=170667a&h=BJ8p22bYzLwkg1TjK3SkN5NV5CTPrqoRe-6ZJM72B5M=" width={80} alt />&amp; above<br/>
                   <input type="radio"  name="rating" value="2" onChange={this.handlercheckedradio}/><img src="data:image/png;base64,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" width={80} alt />&amp; above<br/>
                   <input type="radio"  name="rating" value="1" onChange={this.handlercheckedradio}/> <img src="https://image.shutterstock.com/image-vector/glossy-golden-one-star-icon-260nw-673504159.jpg" width={80} alt /> &amp; above<br/>
                  </li>
                  <div className="dropdown-divider" />
                {this.state.subcatatbrands && <>  <li className="nav-item mt-2  mb-2">
                    Brand
                  </li>
                  <li className="nav-item ml-3 ni">

                    {this.state.subcatatbrands.map((c, i) => <div key={i}><input value={c.brandId} name="brand" type="checkbox"  onChange={this.handlechecked}  /> {c.brandName}</div>)}

                  </li></>}
                  <div className="dropdown-divider" />
                  <li className="nav-item mt-2  mb-2">
                    PRICE(EGP)
                  </li>
                  <li className="nav-item ml-3">
                    <input
                    name="price"
                      className="w-100 appearance-none bg-transparent range-slider-thumb-custom"
                      type="range"
                      min={Math.min.apply(null,this.state.prices)}
                      max={Math.max.apply(null,this.state.prices)}
                      step={10}

                      onChange={this.handleprice}
                    /><br/>from : &nbsp;{Math.min.apply(null,this.state.prices)} &nbsp; to &nbsp;: {this.state.slidprice} 


                  </li>
             
                  <div className="dropdown-divider" />
                  {this.state.colors && <><li className="nav-item mt-2  mb-2">
                    Color
                  </li>
                  <li className="nav-item ml-3 ni">
                    {this.state.colors.map((c, i) => <div key={i}><input type="checkbox" value={c} name="color"  onChange={this.handlechecked} /> {c}</div>)}

                  </li>
                  </>}



                  <div className="dropdown-divider" />
                  <li className="nav-item mt-2  mb-2">
                    Shipped from
                  </li>
                  <li className="nav-item ml-3">
                   <input type="checkbox" name="shipping" value="1"  onChange={this.handlechecked} />  Shipped from Egypt <br/>
                  <input type="checkbox" name="shipping"  value="2"  onChange={this.handlechecked}/>  Shipped from abroad
                  </li>
                  <div className="dropdown-divider" />
                  <li className="nav-item  mt-2  mb-2 ">
                    PRODUCT DISCOUNT
                  </li>
                  <li className="nav-item ml-3 ni">
                   <input type="radio" name="discount" value="80"  onChange={this.handlercheckedradio}/> 80% or more <br/>
                   <input type="radio" name="discount" value="60"  onChange={this.handlercheckedradio}/> 60% or more <br/>
                   <input type="radio" name="discount" value="40"  onChange={this.handlercheckedradio}/> 40% or more <br/>
                   <input type="radio" name="discount" value="20"  onChange={this.handlercheckedradio}/> 20% or more <br/>
                  </li>
                 
                </ul>
              </nav>
            </div>
            {this.state.filteredArray.length>0 ?<DisplayedProducts prods={this.state.filteredArray} name={this.props.location.name} />:<DisplayedProducts prods={this.state.subcategoryprods} name={this.props.location.name} />}
          </div>
        </div>

        </div>
        )}}

        export default Subcategory;