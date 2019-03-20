import React from 'react';
import { createBrowserHistory as createHistory } from "history";
import CondNav from '../condnav';
var body;
let props;
export default class Locatebook extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
          fields: {},
        }
      };
      
      
      history = createHistory(this.props);
      componentDidMount(e) {
        //.e.preventDefault();
        const url = "http://10.10.200.19:9000/books/token"; 
        let token = localStorage.getItem("AccessToken");
        let headers = new Headers();
        const AuthStr = 'Bearer '.concat(token);
         console.log(token);
         headers.append('Content-Type', 'application/json');
         headers.append('Accept', 'application/json');
         headers.append('Authorization', AuthStr);
         console.log(AuthStr);
         headers.append('Access-Control-Allow-Origin', url);
         headers.append('Access-Control-Allow-Credentials', 'true');
         headers.append( 'GET','POST');
    
    //e.preventDefault();
    fetch(url, {
        headers: headers,
        method: 'GET',
        body: JSON.stringify(body),
        'Authorization': 'Bearer ' + this.state.token, 
    })
    .then(response=>response.json())
    .then(contents=>{console.log("in fetch: "+contents);
    this.setState({ username : contents.username,
    price : contents.price,
    category:contents.category,
    count:contents.count,
    address:contents.address,
    imageUrls:contents.imageUrls
})
console.log('view details'+this.state)
})

  //.then(console.log(this.state.fields))
  .catch(() => console.log("Can’t access " + url + " response. "))
  //this.props.history.push(`/Login`)
  //this.setState({fields});
         // alert("Form submitted");
    }
  render() {
 
         return (
        <div>
            <CondNav/><br/><br/>
        <div class="container mt-5">
        <div class="row">
        
            <div class="col-lg-4 pb-5">
               
                <div class="author-card pb-3">
                  
                    <div class="author-card-profile">
                        <div class="author-card-avatar"><img src={this.state.imageUrls} alt="book image"/>
                        </div>
                        <div class="author-card-details">
                           <br/> {this.state.username}{console.log(this.state)}
                           
                        </div>
                    </div>
                </div>
                </div>
           
            <div class="col-lg-8 pb-5">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-category">Category</label>
                            <input class="form-control" type="text" id="account-category"  name="category" value={this.state.category} disabled/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-price">Price</label>
                            <input class="form-control" type="text" id="account-price" name="price" value={this.state.price}  disabled/>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="account-count">Count</label>
                            <input class="form-control" type="text" id="account-count" name="count" value={this.state.count} disabled/>
                        </div>
                    </div>
                    
                   
            </div>
            </div>
        </div>
    
       </div>
    );
 
  }
}