<script>
	import { page } from '$app/stores';
   import {details} from "../jobdetail";
    export let jobDetails;
  
   for (let i = 0; i < details.length; i++) {
   jobDetails = details[i].detail;
   }
</script>


<section>
       <!-- Header End -->
        <div class="container-xxl py-5 bg-dark page-header mb-5">
            <div class="container my-5 pt-5 pb-4" style="border-left: 15px solid #00B074;">
                <h1 class="display-3 text-white mb-3 animated slideInDown" >Job Detail</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase" style="width: 30%;padding-left:1rem;background-color:#ffffff9e">
                        <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-success" style="font-weight: 500;font-size:17px">Home</a></li>
                        <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-success" style="font-weight: 500;font-size:17px">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page" style="font-weight: 500;font-size:17px">Job Detail</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Header End -->

  <!-- Job Detail Start -->
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container">
                <div class="row gy-5 gx-4">
                    <div class="col-lg-8">
                        <div class="d-flex align-items-center mb-5">
                            <img class="flex-shrink-0 img-fluid border rounded" src={jobDetails.logo} alt="" style="width: 80px; height: 80px;">
                            <div class="text-start ps-4">
                                <h3>{jobDetails.jobTitle}</h3>
                                <span class=" text-truncate">{jobDetails.companyName}</span>&nbsp;&nbsp;
                                <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-success me-2"></i>{jobDetails.location}</span>
                                <span class="text-truncate me-3"><i class="far fa-clock text-success me-2"></i>{jobDetails.jobType}</span>
                                <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-success me-2"></i>{jobDetails.salary}</span>
                            </div>
                        </div>

                        <div class="mb-5">
                            <h4 class="mb-3">Job description</h4>
                            <p>{jobDetails.description}</p>

                            <h4 class="mb-3">Responsibility</h4>
                            <p>{jobDetails.responsibilityHeader}</p>
                                <ul>
                                {#each jobDetails.responsibilityData as responsibility}
                                <li >
                                    <i class="fa fa-angle-right text-success me-2"></i>
                                    {responsibility}
                                </li>
                                {/each}
                            </ul>
                             
                            <h4 class="mb-3">Qualifications</h4>
                            <p>{jobDetails.qualificationHeader}</p>
                             <ul>
                                {#each jobDetails.qualificationData as qualification}
                                <li >
                                    <i class="fa fa-angle-right text-success me-2"></i>
                                    {qualification}
                                </li>
                                {/each}
                            </ul>
                             
                        </div>
        
                      

                        <div aria-current={$page.url.pathname === '/job/detail/apply' ? 'page' : undefined} style="list-style: none;">
                            <a href={`/job/detail/${jobDetails.id}/apply`}>

                                <button class="btn btn-success " type="submit">Apply Now</button>
                            </a>    

                        </div>
                    </div>
        
                    <div class="col-lg-4">
                        <div class="bg-light rounded p-5 mb-4 wow slideInUp" data-wow-delay="0.1s" style="background-color: #EFFDF5;">
                            <h4 class="mb-4">Job Summary</h4>
                            <p><i class="fa fa-angle-right text-success me-2"></i>Published On: {jobDetails.publishedOn}</p>
                            <p><i class="fa fa-angle-right text-success me-2"></i>Vacancy: {jobDetails.vacancy} Position</p>
                            <p><i class="fa fa-angle-right text-success me-2"></i>Job Nature: {jobDetails.jobType}</p>
                            <p><i class="fa fa-angle-right text-success me-2"></i>Salary: {jobDetails.salary} </p>
                            <p><i class="fa fa-angle-right text-success me-2"></i>Location: {jobDetails.location}</p>
                            <p class="m-0"><i class="fa fa-angle-right text-success me-2"></i>Date Line: {jobDetails.expireOn}</p>
                        </div>
                        <div class="bg-light rounded p-5 wow slideInUp" data-wow-delay="0.1s">
                            <h4 class="mb-4">Company Detail</h4>
                            <p class="m-0">{jobDetails.companyDetail}.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Job Detail End -->




</section>

<style>
       .page-header {
  background: linear-gradient(rgba(43, 57, 64, 0.5), rgba(43, 57, 64, 0.5)),
    url(../../../lib/images/carousel-1.jpg) center center no-repeat;
  background-size: cover;
}
h1{
    font-weight: 700;
}
ul{
   padding: 0;
    list-style-type: none;
}
</style>