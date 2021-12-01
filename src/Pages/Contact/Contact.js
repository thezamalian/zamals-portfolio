import React from 'react';

const Contact = () => {
    return (
        <div id="contact">
            <h2>Contact Me</h2>
            <form class="row gy-2 gx-3 align-items-center w-75 mx-auto">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Your Full Name</label>
                    <input type="name" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="Your Email" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Write your message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <button type="submit" class="btn btn-primary">Send Mail</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;