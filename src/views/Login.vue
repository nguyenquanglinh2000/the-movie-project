<template>
    <div class="background"></div>
    <div class="container">
        <div class="content">
            <h2 class="logo">Sanamio <i class="bx bxs-movie-play"></i></h2>
            <div class="text-sci">
                <h2> Welcome! <br> <span>Go To Sanamio</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam quas, officia sed soluta commodi ex tenetur
                    necessitatibus harum vel quasi est voluptates
                    consectetur autem.</p>

                <div class="list-icons">
                    <a><i class="bx bxl-tiktok"></i></a>
                    <a><i class="bx bxl-instagram"></i></a>
                    <a><i  class="bx bxl-facebook"></i></a>
                    <a> <i  class="bx bxl-twitter"></i></a>
                </div>
            </div>
        </div>
        
        <div class="logreg-box">
            <div class="form-box login">
                <form action="#">
                    <h2>Sign In</h2>
                    <div class="input_box">
                        <span class="icon"> <i class="bx bxs-envelope"></i></span>
                        <input type="email">
                        <label >Email</label>
                    </div>
                    <div class="input_box">
                        <span class="icon"> <i class="bx bxs-lock-alt"></i></span>
                        <input type="password">
                        <label >PassWord</label>
                    </div>
                    <div class="remember-forgot">
                        <label ><input type="checkbox">Remember Me</label>
                        <a href="">Forgot Password</a>
                    </div>
                    <button type="submit" class="btn_">Sign In</button>
                    <div class="login-register">
                        <p>Don't have an account ? <router-link to="/Register" class="register-link">Sign</router-link></p>
                    </div>
                </form>
            </div>

            
            

        </div>
    </div>
</template>
        
