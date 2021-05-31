import React, { Component } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
class   Test extends Component {
    state = {  }
    fun1=()=>{
       document.getElementById("h1").popover({
                    placement : 'bottom',
                    trigger: 'hover'
                });
       
    }
    render() { 
        return (
            <>
       <Button id="Popover1" type="button">
          Launch Popover
        </Button>
        <Popover placement="bottom" target="Popover1" toggle={this.toggle}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
        </Popover>
            </>
        )}}
        export default Test;