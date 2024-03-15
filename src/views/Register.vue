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
                    <h2>Register </h2>
                    <div class="input_box">
                        <span class="icon"> <i class="bx bxs-user"></i></span>
                        <input type="text">
                        <label >Name</label>
                    </div>
                    <div class="input_box">
                        <span class="icon"> <i class="bx bxs-envelope"></i></span>
                        <input type="email">
                        <label >Email</label>
                    </div>
                    <div class="input_box">
                        <span class="icon"> <i class="bx bxs-lock-alt"></i></span>
                        <input type="password">
                        <label >Password</label>
                    </div>
                    
                    <button type="submit" class="btn_">Register</button>
                    <div class="login-register">
                        <p>You have a account ! <router-link to="/Login" class="register-link">Login</router-link></p>
                    </div>
                </form>
            </div>

            
            

        </div>
    </div>
</template>

<script setup>
    import '@/asset/css/login.css';
    
</script>