<script>
	import { page } from '$app/stores';
    import jobpost from  "$lib/images/jobpost.jpg";
    import joblooking from "$lib/images/joblooking.jpg";
</script>


<section style="margin-bottom:-2.9rem">
    <div class="container-xxl py-5 " style="background-color:lightgrey;">
        <div class="container">
            <div class="row g-5 text-center ">
                <div class="col-lg-5 col-sm-6 bg-white " style="margin-left: 5rem;border-radius:13px;" >
                    <a href="job/post" class="cat-item rounded text-dark p-1 text-decoration-none w-100">
                        <img src={jobpost} alt="joblooking" height="250">
                        <h3 class="m-3">Looking for a Job?</h3>
                          <li style="list-style: none;" aria-current={$page.url.pathname === '/job/jobs' ? 'page' : undefined}>

                           <a href="/job/jobs">
                               <button type="button" class="btn btn-outline-danger mt-4">Find Jobs</button>
                          </a>
                       </li> 
                    </a>
                </div>
                <div class="col-lg-5 col-sm-6 bg-white " style="margin-left: 2rem;border-radius:13px">
                    <a href="job/post" class="cat-item rounded text-dark p-1 text-decoration-none w-100">
                        <img src={joblooking} alt="joblooking" height="250">
                        <h3 class="m-3">Hiring an employee?</h3>
                       <li style="list-style: none;" aria-current={$page.url.pathname === '/job/post/posting' ? 'page' : undefined}>

                           <a href="/job/post/posting">
                               
                               <button type="button" class="btn btn-outline-danger mt-4">Post Job</button>
                          </a>
                       </li> 

                    </a>
                </div>
            </div>
        </div>
    </div>

</section>


<style>
  .cat-item{
    display: inline-block;
    height: 65vh;
  }

</style>