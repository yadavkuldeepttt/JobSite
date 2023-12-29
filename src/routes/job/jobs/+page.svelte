<script>
	import { page } from '$app/stores';
    import {jobs} from "./job";
    import { onMount } from 'svelte';

      let job;
  for (let i = 0; i < jobs.length; i++) 
  {
   job =jobs[i].job;
   }
  
    let filters = {
  jobPost: '',
  location: '',
  salary: '',
};


 function filterJobs(jobType) {
  return jobs
    .filter(job => job.job.jobType === jobType)
    .filter(job => {
      const profileMatch = !filters.jobPost.toLowerCase() || job.jobPost.includes(filters.jobPost.toLowerCase());
      const locationMatch = !filters.location || job.location.includes(filters.location);
      const salaryMatch = !filters.salary || job.salary.includes(filters.salary);
      return profileMatch && locationMatch && salaryMatch;
    });
}
let filteredFullTimeJobs = [];
let filteredPartTimeJobs = [];
let filteredJobPost=[];

function updateFilteredJobs() {
  filteredFullTimeJobs = filterJobs("Full Time");
  filteredPartTimeJobs = filterJobs("Part Time");
  filteredJobPost = filterJobs(job.jobpost);

}

// $$.watch(filters, updateFilteredJobs);
$:{ updateFilteredJobs() }

const handleFilter=()=>{

    updateFilteredJobs();
}
onMount(() => {
    updateFilteredJobs();

});

//   const fullTimeJobs = filterJobs("Full Time");
//   const partTimeJobs = filterJobs("Part Time");
  
</script>



<section>
     <!-- Header Start -->
        <div class="container-xxl py-5 bg-dark page-header mb-5">
            <div class="container my-5 pt-5 pb-4" style="border-left: 15px solid #00B074;">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Jobs</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase " style="width: 30%;padding-left:1rem;background-color:#ffffff9e">
                        <li class="breadcrumb-item"><a href="#" class="text-success text-decoration-none" style="font-weight: 500;font-size:17px">Home</a></li>
                        <li class="breadcrumb-item"><a href="#" class="text-success text-decoration-none" style="font-weight: 500;font-size:17px">Pages</a></li>
                        <li class="breadcrumb-item text-dark active" aria-current="page" style="font-weight: 500;font-size:17px">Jobs</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Header End -->
 <!-- Jobs Start -->
        <div class="container-xxl py-5">
            <div class="container-fluid p-5">


                <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>

<div class="row ">
    <div class="col-lg-3 col-12">
        <div class="filter_box">
         <div class="filter_heading text-center" style="font-weight: bold;font-size:1.3rem;"><i class="fa-solid fa-filter text-primary"></i>&nbsp;Filters</div>
                        
         <div class="mt-3">
            <label for="">Profile</label><br>
            <input type="text" class="w-100 mt-1 " placeholder="e.g. Marketing" bind:value={filters.jobPost}>
         </div>

         <div class="mt-3">
            <label for="">Location</label><br>
            <input type="text"  class="w-100 mt-1"   placeholder="e.g. Delhi" bind:value={filters.location}>
            
         </div>
         <div class="mt-3">
            <label for="">Salary</label><br>
            <input type="text"  class="w-100 mt-1"  placeholder="e.g. $250 - $345" bind:value={filters.salary}>
        </div>
         <div class="mt-3">
            <label for="">Years of experience</label><br>
            <input type="select"  class="w-100 mt-1"  placeholder="Fill years of experience">
        </div>
        
        <a href="#t" on:click={handleFilter} style="text-decoration: none;" class="text-primary mt-3 d-inline-block">
            <button class="btn btn-danger">Apply</button>
        </a>
         <div class=" text-end ">       
            <a href="#t" style="text-decoration: none;" class="text-primary">Clear all</a>
        </div>
          
        <div class="text-center mt-3 mb-4">OR</div>
         <div class="search_section">
            <h6 class="text-center">Search</h6>
            <input type="text"  class="w-100 mt-1"  placeholder="e.g. $250 - $345">

                <button class="btn btn-primary searchbtn "><i class="fa-solid fa-magnifying-glass"></i></button>
         </div>
         </div>
        </div>

    
    <div class="col-lg-9 mt-4 col-12">
                <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                    <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 text-decoration-none text-dark active " data-bs-toggle="pill" href="#tab-1">
                                <h6 class="mt-n1 mb-0">Featured</h6>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 pb-3 text-decoration-none text-dark" data-bs-toggle="pill" href="#tab-2">
                                <h6 class="mt-n1 mb-0">Full Time</h6>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="d-flex align-items-center text-start mx-3 me-0 pb-3 text-decoration-none text-dark" data-bs-toggle="pill" href="#tab-3">
                                <h6 class="mt-n1 mb-0">Part Time</h6>
                            </a>
                        </li>
                    </ul>

                
                    <div class="tab-content">
                        <div id="tab-1" class="tab-pane fade show p-0 active">
                            
                            {#each jobs  as {job}}
                            <div class="job-item p-4 mb-4">
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src={job.logo} alt="logo1" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-2">{job.jobPost}</h5>
                                             <span class="me-3 text-secondary" style="font-weight:500">{job.companyName}</span><br>

                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-success me-2"></i>{job.location}</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-success me-2"></i>{job.jobType}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-success me-2"></i>{job.salary}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-success"></i></a>
                                            <a class="btn btn-success" href={`/job/detail/${job.id}/apply`}>Apply Now</a>
                                           <li aria-current={$page.url.pathname === '/job/detail' ? 'page' : undefined} style="list-style: none;">
                                            <a href={`/job/detail/${job.id}`} class="btn btn-light btn-square ms-3"><i class="fa-solid fa-ellipsis-vertical text-success"></i></a>
                                            </li>
                                        </div>
                                        <small class="text-truncate"><i class="far fa-calendar-alt text-success me-2"></i>Date Line: {job.date}</small>
                                    </div>
                                </div>
                            </div>
                            {/each}
                         
                            <a class="btn btn-success py-3 px-5" href="">Browse More Jobs</a>
                        </div>


                        <div id="tab-2" class="tab-pane fade show p-0">
                               {#each filteredFullTimeJobs as {job}}
                            <div class="job-item p-4 mb-4">
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src={job.logo} alt="logo1" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-2">{job.jobPost}</h5>
                                                  <span class="me-3 text-secondary" style="font-weight:500">{job.companyName}</span><br>

                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-success me-2"></i>{job.location}</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-success me-2"></i>{job.jobType}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-success me-2"></i>{job.salary}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-success"></i></a>
                                            <a class="btn btn-success" href="">Apply Now</a>
                                           <li aria-current={$page.url.pathname === '/job/detail' ? 'page' : undefined} style="list-style: none;">
                                            <a href={`/job/detail/${job.id}`} class="btn btn-light btn-square ms-3"><i class="fa-solid fa-ellipsis-vertical text-success"></i></a>
                                            </li>
                                        </div>
                                        <small class="text-truncate"><i class="far fa-calendar-alt text-success me-2"></i>Date Line: {job.date}</small>
                                    </div>
                                </div>
                            </div>
                            {/each}
                         
                      
                            <a class="btn btn-success py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                        <div id="tab-3" class="tab-pane fade show p-0">
                                  {#each filteredPartTimeJobs as {job}}
                            <div class="job-item p-4 mb-4">
                                <div class="row g-4">
                                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                        <img class="flex-shrink-0 img-fluid border rounded" src={job.logo} alt="logo1" style="width: 80px; height: 80px;">
                                        <div class="text-start ps-4">
                                            <h5 class="mb-2">{job.jobPost}</h5>
                                                   <span class="me-3 text-secondary" style="font-weight:500">{job.companyName}</span><br>
                                            <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-success me-2"></i>{job.location}</span>
                                            <span class="text-truncate me-3"><i class="far fa-clock text-success me-2"></i>{job.jobType}</span>
                                            <span class="text-truncate me-0"><i class="far fa-money-bill-alt text-success me-2"></i>{job.salary}</span>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                        <div class="d-flex mb-3">
                                            <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-success"></i></a>
                                            <a class="btn btn-success" href="">Apply Now</a>
                                           <li aria-current={$page.url.pathname === '/job/detail' ? 'page' : undefined} style="list-style: none;">
                                            <a href={`/job/detail/${job.id}`} class="btn btn-light btn-square ms-3"><i class="fa-solid fa-ellipsis-vertical text-success"></i></a>
                                            </li>
                                        </div>
                                        <small class="text-truncate"><i class="far fa-calendar-alt text-success me-2"></i>Date Line: {job.date}</small>
                                    </div>
                                </div>
                            </div>
                            {/each}
                            <a class="btn btn-success py-3 px-5" href="">Browse More Jobs</a>
                        </div>
                    </div>
                </div></div>
            </div>
            </div>
        </div>
        <!-- Jobs End -->



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
.nav-pills .nav-item .active {
    border-bottom: 2px solid #00B074;
}
.job-item {
    border: 1px solid transparent;
    border-radius: 2px;
    box-shadow: 0 0 45px rgba(0, 0, 0, .08);
    transition: .5s;
}
.job-item:hover {
    border-color: rgba(0, 0, 0, .08);
    box-shadow: none;

}
.filter_box{
    margin-top: 7rem;
    padding: 1rem;
      border: 1px solid transparent;
    border-radius: 2px;
    border-color: rgba(0, 0, 0, .08);
    transition: .5s;
}
label{
    font-weight: 500;
    color:#333;
}
input{
    border: 1px solid lightgray;
    padding: 0.3rem;
}
input:hover{
    border:1px solid #00B074;
}
input:focus{
    outline: none
}
.searchbtn{
    position: absolute;
    right: 0;
    padding: 0.3rem 0.7rem;
    top: 31px;
    box-shadow: none;
    border-radius: 0;
}
.search_section{
    position: relative;
}
</style>