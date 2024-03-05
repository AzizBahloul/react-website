import React, { useState, useEffect } from 'react';
import './Login.css';
import $ from 'jquery'; // Import jQuery

const Login = () => {
    const [activeTab, setActiveTab] = useState('signin');

    useEffect(() => {
        // jQuery event listeners
        $('.tabs .tab').click(function(){
            if ($(this).hasClass('signin')) {
                $('.tabs .tab').removeClass('active');
                $(this).addClass('active');
                $('.cont').hide();
                $('.signin-cont').show();
            } 
            if ($(this).hasClass('signup')) {
                $('.tabs .tab').removeClass('active');
                $(this).addClass('active');
                $('.cont').hide();
                $('.signup-cont').show();
            }
        });

        $('.container .bg').mousemove(function(e){
            var amountMovedX = (e.pageX * -1 / 30);
            var amountMovedY = (e.pageY * -1 / 9);
            $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
        });
    }, []); // Empty dependency array to run only once after initial render

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <section className="container">
            <article className="half">
                <h1>login page lab1</h1>
                <div className="tabs">
                    <span className={`tab signin ${activeTab === 'signin' ? 'active' : ''}`} onClick={() => handleTabClick('signin')}>
                        <a href="#signin">Sign in</a>
                    </span>
                    <span className={`tab signup ${activeTab === 'signup' ? 'active' : ''}`} onClick={() => handleTabClick('signup')}>
                        <a href="#signup">Sign up</a>
                    </span>
                </div>
                <div className="content">
                    <div className={`signin-cont cont ${activeTab === 'signin' ? 'active' : ''}`}>
                        <form action="#" method="post" encType="multipart/form-data">
                            <input type="email" name="email" id="email" className="inpt" required placeholder="Your email" />
                            <label htmlFor="email">Your email</label>
                            <input type="password" name="password" id="password" className="inpt" required placeholder="Your password" />
                            <label htmlFor="password">Your password</label>
                            <input type="checkbox" id="remember" className="checkbox" defaultChecked />
                            <label htmlFor="remember">Remember me</label>
                            <div className="submit-wrap">
                                <input type="submit" value="Sign in" className="submit" />
                                <a href="#" className="more">Forgot your password?</a>
                            </div>
                        </form>
                    </div>
                    <div className={`signup-cont cont ${activeTab === 'signup' ? 'active' : ''}`}>
                        <form action="#" method="post" encType="multipart/form-data">
                            <input type="text" name="name" id="name" className="inpt" required placeholder="Your name" />
                            <label htmlFor="name">Your name</label>
                            <input type="email" name="email" id="email" className="inpt" required placeholder="Your email" />
                            <label htmlFor="email">Your email</label>
                            <input type="password" name="password" id="password" className="inpt" required placeholder="Your password" />
                            <label htmlFor="password">Your password</label>
                            <div className="submit-wrap">
                                <input type="submit" value="Sign up" className="submit" />
                                <a href="#" className="more">Terms and conditions</a>
                            </div>
                        </form>
                    </div>
                </div>
            </article>
            <div className="half bg"></div>
        </section>
    );
};

export default Login;
