<script>
  import {details} from "../../jobdetail";
    let jobDetails;
  for (let i = 0; i < details.length; i++) 
  {
   jobDetails = details[i].detail;
   }
</script>


<section>
     <!-- Header End -->
        <div class="container-xxl py-5 bg-dark page-header mb-5">
            <div class="container my-5 pt-5 pb-4" style="border-left: 15px solid #00B074;">
                <h1 class="display-3 text-white mb-3 animated slideInDown" >Job Apply</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb text-uppercase" style="width: 30%;padding-left:1rem;background-color:#ffffff9e">
                        <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-success" style="font-weight: 500;font-size:17px">Home</a></li>
                        <li class="breadcrumb-item"><a href="#" class="text-decoration-none text-success" style="font-weight: 500;font-size:17px">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page" style="font-weight: 500;font-size:17px">Job Apply</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Header End -->


                   <div class="p-5">
                            <h4 class="mb-2 text-center">Apply For The <span class="text-primary">{jobDetails.jobTitle}</span> Job</h4>
                            <h6 class="mb-5 text-center text-secondary">{jobDetails.companyName}</h6>
                            <form>
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <h5>Upload Your Resume</h5>
                                        <input type="file" class="form-control bg-white mt-3">
                                    </div>
                                    <div class="col-12" >
                                        <h5>Cover Letter</h5>

                                        <strong class="text-secondary">Why should you be hired for this role?</strong>
                                        <textarea class="form-control mt-1" rows="2" placeholder="Why would you be a good fit?"></textarea>
                                    </div>
                                               <div class="col-12" >
                                        <h5 class="mb-2">Confirm Your Availability</h5>

                                         <input type="radio" name="" id="">&nbsp;<label style="font-weight:400" for="">Yes, I am available to join immediately</label><br>
                                         <input type="radio" name="" id="">&nbsp;<label style="font-weight:450" for="">No (Please specify your availability)</label>
                                         
                                    </div>
                                    <div class="col-12 mt-5">
                                        <button class="btn btn-success w-100" type="submit">Apply Now</button>
                                    </div>
                                </div>
                            </form>
                        </div> 
</section>