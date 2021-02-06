
import React from 'react'

export default function Contact(props) {
    const [message, setMessage] = React.useState('')
    const [firstName,setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [phone, setPhone] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [date, setDate] = React.useState(Date.now())
    const [data, setData] = React.useState([]);


    const handleSubmit = async(e) => {
        

        try {
            let res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({firstName,lastName,email,phone,message,description, date }),
                headers: new Headers({ "Content-Type": "application/json" })

            });
            let contactResponse = await res.json();
            console.log(contactResponse);
            setData(contactResponse);
            
    

            
            
        } catch (e) {
            console.log(e)
        }
    

    }
    return (
        <>
            <div className="container">
                <div className="row py-4">
                    <h2>Contact</h2>
                </div>

                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12">

                        <form onSubmit={(e) => handleSubmit()}>
                            <div className="row align-items-center">
                                <div className="col-6"><div class="mb-3">
                                <label for="firstName" class="form-label">First Name</label>
                                <input onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" class="form-control" id="firstName" />
                                
                            </div></div>
                                <div className="col-6"><div class="mb-3">
                                <label for="lastName" class="form-label">Last Name</label>
                                <input onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" class="form-control" id="lastName" />
                                
                            </div> 
                            </div>
                            
                            </div>
                            <div class="mb-3">
                                <label for="phoneNumber" class="form-label">Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)} value={phone} type="text" class="form-control" id="phoneNumber" />
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email address</label>
                                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>

                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea onChange={(e) => setDescription(e.target.value)} value={description} type="text" rows="3" class="form-control" id="description" aria-describedby="emailHelp" />
                                
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea onChange={(e) => setMessage(e.target.value)} value={message} type="text" rows="10" class="form-control" id="message" />
                            </div>
                            <div class="mb-3 form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <button type="submit" onClick={(e) => handleSubmit()} class="btn btn-primary">Submit</button>
                        </form></div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="row py-4">
                                <h4 className="py-2">Kimani Walker</h4>
                                <span className="py-1">kimaniwalker@gmail.com</span>
                                <span className="py-1">Birmingham, Al</span>
                                <span className="py-1">205.603.8724</span>
                                <span className="py-1"></span>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}
