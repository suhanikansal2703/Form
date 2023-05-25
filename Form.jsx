import React from 'react'


class Form extends React.Component{


    // There are three steps to store multiple values of input fields
    // 1. Take input 2. Create object 3. Push object in an array
    constructor(){
        super();
        this.state={
            nameIp:'',
            ageIp:'',
            expIp:'',
            myObj:{},
            users:[],
            isSubmitted:false
        }
    }
    render(){
        let myForm1={
            color:'black',
            fontSize:'15px',
            fontStyle:'bolder',
            textAlign:'center',
            
        }
        let myForm2={
            border: '2px solid black', 
            backgroundColor:'burlywood', 
            display:'inline-block', 
            padding:'8px',
        }
// e.target.value se hum input field ki value get krlege
        const handleChange=(e)=>{
            console.log('Typing...');
            // console.log(e.target.value);
            // this.setState ke andr hum value update krege and e.target.value jo bhi value user type krega vo display ho jaegi
            // setState keys match krta hai state ke sath
            // array islie bnaya kyuki multiple id's get krega
            this.setState({
                [e.target.id]:e.target.value,
            })
        }

        const handleSubmit=(e)=>{
            e.preventDefault();
            let tempObj=this.state.myObj;
            tempObj={
                name:this.state.nameIp,
                age:this.state.ageIp,
                exp:this.state.expIp
            }
            let tempArr=this.state.users;
            tempArr.push(tempObj);

            this.setState({
                users:tempArr,
                isSubmitted:!this.state.isSubmitted
            })
            console.log(this.state.users);
        }
        const handleBack=()=>{
            this.setState({
                isSubmitted:!this.state.isSubmitted
            })
        }
        return(
            //JSX Fragment- Khali tag ko bolte hai
            <>                         
                <h2>Welcome to React Session</h2>
                {!this.state.isSubmitted ?             
                
                <form style={{...myForm1,...myForm2}}>
                    <label type='text'>Name:</label>
                    <input type='text' placeholder='Enter your name' id='nameIp' onChange={handleChange}></input>
                    <br /><br />
                    <label type='number'>Age:</label>
                    <input type='number' placeholder='Enter your age' id='ageIp' onChange={handleChange}></input>
                    <br /><br />
                    <label type='text'>Experience:</label>
                    <input type='text' placeholder='Enter Experiernce in years' id='expIp' onChange={handleChange}></input><br></br><br></br>
                    <button onClick={handleSubmit}>submit</button>
                    <br /><br />
                    
                    
                </form>
                :
                
                <div>
                    {/* we use map method here and then  we use callback function in which we have two argument and there is return in which we write the jsx code */}
                    {this.state.users.map((item,index)=>{
                        return(
                            <div key={index}>
                                <h3>Name={item.name}</h3>
                                <h3>Age={item.age}</h3>
                                <h3>Exp={item.exp}</h3>
                                <hr />
                            
                            </div>
                        )
                    })}
                    <button onClick={handleBack}>Go Back</button>
                </div>
                }

                </>
        )
    }
}

export default Form