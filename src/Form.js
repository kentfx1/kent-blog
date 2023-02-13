


const Form = () => {
    


    return ( 
        <form action="/" className="form">
            <h4>Please Login and Fill your Details.</h4>
            <div className="container">
                <input type="text" placeholder="Enter Your Name" /><br/><br/>
                <input type="text" placeholder="Enter Your Surname" /><br/><br/>
                <input type="number" placeholder="Enter Your Phone-Number" /><br/><br/>
                <input type="email" placeholder="Enter Your Email" /><br/><br/>
                <input type="File" placeholder="Upload Your Picture" /><br/><br/>
                <input type="Submit" className='Submit'/>

            </div>
        </form>
        
     );
}
 
export default Form;