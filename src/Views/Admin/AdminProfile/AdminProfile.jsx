import React, { Component } from 'react';
import { AvForm, AvField} from 'availity-reactstrap-validation';
import axios from 'axios';
import './AdminProfile.css'
import pencil from '../../../Assets/Images/pencil.svg'



class AdminProfile extends Component {
    // "firstname": "Nistala",
    // "lastname": "Chatanya",
    // "gender": "male",
    // "mobile": 7845122356
    constructor(props) {
        super(props)

        this.state = {
            firstname: '',
            lastname: '',
            gender:'',
            mobile: '' ,
            disabled: false,
            edit: false,
            id:''
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };


    componentDidMount() {
      let data =  JSON.parse(localStorage.getItem('userDetails'));
        this.setState({
            firstname: data.firstname,
            lastname: data.lastname,
            mobile: data.mobile,
            gender: data.gender,
            id: data.id
        })
    }


    handleEditClik = (e) => {
        this.setState({ edit: !this.state.edit })
        // console.log('disabled', this.state.edit, 'pencilIcon')
        this.setState({ disabled: !this.state.disabled })

    }

    handleSubmit = (e, error, values) => {
        let token = localStorage.getItem('accessToken')
        let profileData = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            gender: this.state.gender,
            mobile: this.state.mobile


        }
        if (error == '') {

            if (!this.state.edit) {

          

            if(token){
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                }
            axios.post("http://localhost:8000/adminProfile", profileData)
                .then(res => {
                    console.log('res', res)
                    if (res.data) {
                        alert("Profile update is Success.")
                    }
                })
                .catch(err => {
                    if (err) {
                        alert("something went wrong.Please try after some time")
                        console.log(err)
                    }
                })

            }
                if (this.state.edit) {
                    alert(this.state.id)
                    console.log(this.state.id);
                    if(token){
                        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                        }
                    axios.patch(`http://localhost:8000/users/${this.state.id}`, {
                        firstname: profileData.firstname,
                        lastname: profileData.lastname,
                        mobile: profileData.mobile,
                        gender: profileData.gender
                    }).then(res =>{
                       alert("profile update is done")
                    })
    
    
                }
        }
    }


    render() {
        return (
            <div className='wrapper'>
            <div className='heading-title mb-4'>
              <span className="text-primary">Edit Profile</span>
              <img className='ml-2' src={pencil} onClick={this.handleEditClik} />
          </div>
         <div className="row mx-0">
              {/* <img  src={pencil} onClick={this.handleEditClik}/> */}
              <AvForm onSubmit={this.handleSubmit} ref={c => (this.myFormRef = c)}>

                  <div className="row">

                      <div className="col-4">
                          <label className="h6">First Name</label>
                      </div>

                      <div className="form-group col-8">
                          <AvField type="text" name="firstname" value={this.state.firstname} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true}
                              validate={{
                                  required: { value: true, errorMessage: "First Name is required" },
                                  pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'First Name is Invalid' }
                              }} />
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-4">
                          <label className="h6">Last Name</label>
                      </div>
                      <div className="form-group col-8">
                          <AvField type="text" name="lastname" value={this.state.lastname} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true}
                              validate={{
                                  required: { value: true, errorMessage: "Last Name is required" },
                                  pattern: { value: /^[A-Za-z\/\s\.'-]+$/, errorMessage: 'Last Name is Invalid' }

                              }} />
                      </div>
                  </div>
                
                  <div className="row">
                      <div className="col-4">
                          <label className="h6">Gender</label>
                      </div>
                      <div className="form-group col-8">
                          <AvField type="select" name="gender" value={this.state.gender} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true} required>
                              <option value="">{this.state.gender}</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                              <option value="Others">Others</option>
                          </AvField>
                      </div>
                  </div>
                
                

                  
               
                
                  <div className="row">
                      <div className="col-4">
                          <label className="h6">Mobile</label>
                      </div>
                      <div className="form-group col-8">
                          <AvField type="text" name="mobile" value={this.state.mobile} onChange={this.handleChange} className="form-control" disabled={(this.state.disabled) ? false : true }
                              minLength={10} maxLength={10} validate={{
                                  required: { value: true, errorMessage: 'Mobile Number is required' }
                              }} />
                      </div>
                  </div>

                  <div col-4>
                      <button className="btn btn-primary px-5 rounded-0">Update</button>
                  </div>
                  <div>

                  </div>


              </AvForm>
              {/* <button  onClick={this.handleEditClik} >Edit</button> */}





          </div>
      </div>
        )
    }
}

export default AdminProfile