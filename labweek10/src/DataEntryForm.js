import React from 'react';
import "./Data.css";
import { useState } from "react";



function DataEntryForm() {
    const [inputs, setInputs] = useState({});
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
        document.getElementById("data").innerHTML=`<table style="width: 100%;border:1px solid;">
                                                        <tr>
                                                            <td style="text-align: right;width: 50%;color: green;">
                                                                Email:
                                                            </td>
                                                            <td style="text-align: left;width: 50%;">
                                                                `+inputs.email+`
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Full Name:
                                                            </td>
                                                            <td>
                                                            `+inputs.name+`
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Address:
                                                            </td>
                                                            <td>
                                                            `+inputs.add1+" "+inputs.add2+`
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                City:
                                                            </td>
                                                            <td>
                                                            `+inputs.city+`
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Province:
                                                            </td>
                                                            <td>
                                                            `+inputs.province+`
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td style="text-align: right;color: green;">
                                                                Postal Code:
                                                            </td>
                                                            <td>
                                                            `+inputs.postal+`
                                                            </td>
                                                        </tr>
                                                    </table>`
        
    }
      return (
        <div>
            <div className="frm">
                <h1>Data Entry Form</h1>
                <form onSubmit={handleSubmit}>
                    <table id="temp">
                        <tr>
                            <td>Email</td>
                            <td></td>
                            <td>Name</td>
                        </tr>
                        <tr>
                            <td >
                                <input type="text" value={inputs.email || ""} name="email" onChange={handleChange} placeholder="Enter email" required/>
                            </td>
                            <td></td>
                            <td>
                                <input type="text" value={inputs.name || ""} name="name" onChange={handleChange} placeholder="Full Name" required/>
                                
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                Address
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                               <input type="text" value={inputs.add1 || ""} name="add1" onChange={handleChange} placeholder="1234 Main St"required/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                Address 2
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                               <input type="text"  value={inputs.add2 || ""} name="add2" onChange={handleChange} placeholder="Apartment, Studio, of floor"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                City
                            </td>
                            <td>
                                Province
                            </td>
                            <td>
                                Postal Code
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text" value={inputs.city || ""} name="city"onChange={handleChange} required/>
                            </td>
                            <td>
                                <input type="text" value={inputs.province || ""} name="province" onChange={handleChange} required/>
                            </td>
                            <td>
                                <input type="text" value={inputs.postal || ""} name="postal" onChange={handleChange} required/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={3}>
                                <input type="submit" value="Submit" />

                            </td>
                        </tr>
                    </table>
                </form>
            </div>
            <div className="data" id="data">
                
            </div>
        </div>
        
        
      );
    
  }
  
export default DataEntryForm;




// import React, { Component } from 'react'

// export default class Data extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              email : 'Email',
//              fname : 'Name',
//              address1 : 'Address',
//              address2 : 'Address2', 
//              city : 'City',
//              postal : 'Postal Code'
//         }
//         this.readData = this.readData.bind(this)
//         this.showDate = this.showDate.bind(this)
//     }
//     readData(event){
//         this.setState({[event.tatget.name] : event.tatget.value})
//     }

//     showDate(event){
//         <div>
//         <h4>Email: {this.state.email}</h4><br/>
//         <h4>Full Name: {this.state.fname}</h4><br/>
//         <h4>Address: {this.state.address1}</h4><br/>
//         <h4>Address2: {this.state.address2}</h4><br/>
//         <h4>Postal: {this.state.postal}</h4><br/>
//         <h4>City: {this.state.city}</h4><br/>
//         </div>
//     }
//     Province = ["Alberta" ,"British Columbia","Manitoba" , "New Brunswick" ,"Newfoundland and Labrador","Nova Scotia","Ontario" ,"Prince Edward Island","Quebec","Saskatchewan"]
//     render() {
//         return (
//             <div>
//                 <label>Name</label>
//                 <label>Email</label>
//                 <input name = "email" placeholder = "Email" type = "text" onChange ={this.readData}  />
//                 <input name = "fname" placeholder = "Full Name" type = "text" onChange ={this.readData}/>
//                 <br/>
//                 <label>Addrerss</label>
//                 <input name = "address1" placeholder = "Address" type = "text"/>
//                 <br/>
//                 <label>Address2</label>
//                 <input name = "address2" placeholder = "Address2" type = "text"/>
//                 <br/>
//                 <label>State</label>
//                 <label>Province</label>
//                 <label>Postal</label>
                
//                 <input  name = "city" type = "text"/>
//                 <select>
//                     <option value = "">Choose..</option>
//                     {
//                         this.Province.map(name => (
//                             <option key = {name}>{name}</option>
//                         ))
//                     }
//                 </select>
//                 <input name = "postal" type = "text"/>
//                 <button onClick = {this.showDate}>Submit</button>


                
//             </div>
//         )
//     }
// }
