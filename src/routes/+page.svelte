<script>
	import { page } from '$app/stores';

    
</script>

<section >

   <div class="container-fluid p-0  hero"  >
            <div class="owl-carousel header-carousel position-relative">
                <div class="owl-carousel-item position-relative ">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(43, 57, 64, .5);">
                        <div class="container" >
                            <div class="row justify-content-start " style="position: absolute;margin-top:7rem">
                                <div class="col-10 col-lg-8" style="border-left:15px solid #00B074">
                                    <h1 class="display-3 text-white animated slideInDown mb-4" style="font-weight: 700;">Find The Perfect Job That You Deserved</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                    <a href="#t" class="btn btn-success py-md-3 px-md-5 me-3 animated slideInLeft text-white">Search A Job</a>
                                  <li class="d-inline-block" style="list-style: none;" aria-current={$page.url.pathname === '/job/hire' ? 'page' : undefined}>  <a href="/job/hire" class="btn btn-primary py-md-3 px-md-5 animated slideInRight text-white">Find A Talent</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>



                  <!-- Search Start -->
        <div class="container-fluid bg-success mb-5 wow fadeIn" data-wow-delay="0.1s" style="padding: 35px;">
            <div class="container">
                <div class="row g-2">
                    <div class="col-md-10">
                        <div class="row g-2">
                            <div class="col-md-4">
                                <input type="text" class="form-control border-0" placeholder="Keyword" />
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Category</option>
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                            </div>
                            <div class="col-md-4">
                                <select class="form-select border-0">
                                    <option selected>Location</option>
                                    <option value="1">Location 1</option>
                                    <option value="2">Location 2</option>
                                    <option value="3">Location 3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button class="btn btn-dark border-0 w-100">Search</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- search end -->
<section class="img_back ftco-counter">
<div class="container">
<div class="row justify-content-center">
<div class="col-md-10">
<div class="row">
<div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div class="block-18 text-center">
<div class="text">
<strong class="number" data-number="1350000">1350000</strong>
<span>Jobs</span>
</div>
</div>
</div>
<div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div class="block-18 text-center">
<div class="text">
<strong class="number" data-number="40000">40000</strong>
<span>Members</span>
</div>
</div>
</div>
<div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div class="block-18 text-center">
<div class="text">
<strong class="number" data-number="30000">30000</strong>
<span>Resume</span>
</div>
</div>
</div>
<div class="col-md-3 d-flex justify-content-center counter-wrap ftco-animate">
<div class="block-18 text-center">
<div class="text">
<strong class="number" data-number="10500">10500</strong>
<span>Company</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
        <!-- category start -->
        <div class="container-xxl py-5 ">
            <div class="container">
                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1>
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item rounded p-4" href="#t">
                            <i class="fa fa-3x fa-mail-bulk text-success mb-4"></i>
                            <h6 class="mb-3">Marketing</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-headset text-success mb-4"></i>
                            <h6 class="mb-3">Customer Service</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-user-tie text-success mb-4"></i>
                            <h6 class="mb-3">Human Resource</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-tasks text-success mb-4"></i>
                            <h6 class="mb-3">Project Management</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-chart-line text-success mb-4"></i>
                            <h6 class="mb-3">Business Development</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-hands-helping text-success mb-4"></i>
                            <h6 class="mb-3">Sales & Communication</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-book-reader text-success mb-4"></i>
                            <h6 class="mb-3">Teaching & Education</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="fa fa-3x fa-drafting-compass text-success mb-4"></i>
                            <h6 class="mb-3">Design & Creative</h6>
                            <p class="mb-0 text-success">123 Vacancy</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Category End -->
    </section>

       

<style>
    .hero{
        background:linear-gradient(rgba(43, 57, 64, .5), rgba(43, 57, 64, .5)), url(../lib/images/carousel-1.jpg);
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        height: 100vh;
    }
    a{
    text-decoration: none;
    color: #2B3940;
}
.cat-item {
    display: block;
    box-shadow: 0 0 45px rgba(0, 0, 0, .08);
    border: 1px solid transparent;
    transition: .5s;
}
.cat-item:hover {
    border-color: rgba(0, 0, 0, .08);
    box-shadow: none;
}
.img_back{
    background-image:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,.5)), url(../lib/images/bg_1.jpg.webp);
    background-position: center;
    background-size: cover;
    padding: 5rem 0;
    margin-top: -3rem;
}
.ftco-counter .text strong.number {
    font-weight: 600;
    font-size: 34px;
    color: #fff;
}
.block-18 .text span {
    display: block;
    font-size: 18px;
    color: rgba(255, 255, 255, 0.7);
}

</style>