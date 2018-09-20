import React, { Component } from 'react'

 class Postform extends Component {
     constructor(props){
         super(props);
         this.state = {
            title: "",
            body: ""
         }
     }
     onChange(e){
        this.setState({
           [e.target.name] : e.target.value
        })
     }
     onSubmit(e){
         e.preventDefault();
         const post = {
             title: this.state.title,
             body: this.state.body
         }
         fetch('https://jsonplaceholder.typicode.com/posts',{
             method: 'post',
             headers : {
                 'content-type' : 'application/json'
             },
             body: JSON.stringify(post)
         })
         .then(response => response.json())
         .then(data => console.log(data))
     }
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit = {this.onSubmit.bind(this)}>
        <div>
            <lable>title:</lable><br />
            <input type="text" onChange = {
                this.onChange.bind(this)
            } name = "title" value = {this.state.title} /><br />
            <lable>body:</lable><br />
            <textarea type="text" onChange = {this.onChange.bind(this)}  name = "body" value = {this.state.body} /><br />
            <br />
            <button type= "submit">submit</button>
        </div>
        </form>
      </div>
    )
  }
}
export default Postform
