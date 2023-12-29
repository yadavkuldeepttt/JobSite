<script>

    import { page } from '$app/stores';
</script>


<section>

     <div class="container-fluid p-0 hero"  >
            <div class="owl-carousel header-carousel position-relative">
                <div class="owl-carousel-item position-relative ">
                    <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(43, 57, 64, .5);">
                        <div class="container" >
                            <div class="row justify-content-start " style="position: absolute;margin-top:7rem">
                                <div class="col-10 col-lg-8" style="border-left:15px solid #dc3545">
                                    <h1 class="display-3 text-white animated slideInDown mb-4" style="font-weight: 700;">Let's hire your next great candidate. Fast.</h1>
                                    <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                                  <li class="d-inline-block" style="list-style: none;" aria-current={$page.url.pathname === '/job/post' ? 'page' : undefined}>
                                      <a href="/job/post" class="btn btn-danger py-md-3 px-md-5 animated slideInRight text-white">Post a Job</a></li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                </div>

                <div class="container-xxl py-5 " >
                    <div class="container ">
                        <div class="row g-5">
                            <div class="col-lg-3 col-sm-6 wow">
                                <a href="#t" class="cat-item rounded text-dark p-4">

                                    <h3 class="mb-3 text-success">1</h3>
                                    <h3 class="mb-3">Create your free account</h3>
                                    <p class="m-0">All you need is your email address to create an account and start building your job post.</p>
                                </a>
                            </div>

                             <div class="col-lg-3 col-sm-6">
                                <a href="#t" class="cat-item rounded text-dark p-4">

                                    <h3 class="mb-3 text-success">2</h3>
                                    <h3 class="mb-3">Build your job post</h3>
                                    <p class="m-0">Then just add a title, description and location to your job post, and you're ready to go.</p>
                                </a>
                            </div>

                             <div class="col-lg-3 col-sm-6">
                                <a href="#t" class="cat-item rounded text-dark p-4 ">

                                    <h3 class="mb-3 text-success">3</h3>
                                    <h3 class="mb-3">Post your job</h3>
                                    <p class="mt-5 ">After you post your job, use our state-of-the-art tools to help you find dream talent.</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <h3 class="my-5">Get Started in Minutes</h3>
                          <li class="d-inline-block" style="list-style: none;" aria-current={$page.url.pathname === '/job/post' ? 'page' : undefined}>
                                      <a href="/job/post" class="btn btn-danger py-md-3 px-md-5 animated slideInRight text-white">Post a Job</a></li>
                </div>
</section>

<style>
    .hero{
        height: 100vh;
        background-color: #333;
    }
    a{
        text-decoration: none;
    }
    .cat-item {
    display: block;
    box-shadow: 0 0 45px rgba(0, 0, 0, .08);
    border: 1px solid transparent;
    transition: .5s;
    width: 20vw;
    margin-left: 7rem;
    height:43vh;
}
.cat-item:hover {
    border-color: rgba(0, 0, 0, .08);
    box-shadow: none;
}
</style>