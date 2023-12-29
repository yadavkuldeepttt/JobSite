
<section class="preference_section">
    <div class="preference mt-5 ">
        <h3 class="m-5 text-center">Your Preferences</h3>
         <div class="preference_box">
              <div class="form-outline">
                <label for="" class="mb-2" style="font-weight: 500;">Area(s) of interest</label><br>
                <input type="search" class="form-control form-control-lg" placeholder="&#128269; Areas you want to work in or learn about">
              </div>

              <div class="mt-4 mb-3">
                 <span style="font-weight: 500;">Popular career interests</span>
              </div>

              <div class="interests d-flex gap-4 flex-wrap">
                <div class="chip">
                     <button>Sales&nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                <div class="chip">
                     <button>Data Entry&nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                <div class="chip">
                     <button>Digital Marketing&nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                <div class="chip">
                     <button>Finance &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                 <div class="chip">
                     <button>Teaching &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                 <div class="chip">
                     <button>Programming &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
                 <div class="chip">
                     <button>Data Science &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
            </div>
                
            <div class="currently_looking">
                 <div class="mt-4 mb-3">
                 <span style="font-weight: 500;">Currently looking for</span>
              </div>
               <div class="d-flex gap-3">  
                <div class="chip">
                     <button>Jobs &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div><div class="chip">
                     <button>Internships &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
               </div> 
            </div>
 
              <div class="work_mode">
                 <div class="mt-4 mb-3">
                 <span style="font-weight: 500;">Work Mode</span>
              </div>
               <div class="d-flex gap-3">  
                <div class="chip">
                     <button>In_office &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div><div class="chip">
                     <button>Work from home &nbsp;<i class="bi bi-plus chip-plus" ></i></button>
                </div>
               </div> 
            </div>
             <div class="form-outline mt-5">
                <label for="" class="mb-2" style="font-weight: 500;">Preferred city for in-office opportunities
(Optional)</label><br>
                <input type="text" class="form-control form-control-lg" placeholder="&#128269; Add More Locations">
              </div>
         </div>





  
</div>
   

</section>

<style>
    .preference_section{
        display: flex;
        justify-content: center;
    }
    .preference_box{
      border: 1px solid rgba(211, 211, 211, 0.608);
      padding:1.5rem 2rem;
      width: 50vw;
      max-width: 100%;
      border-radius: 14px;
}
input:focus{
    box-shadow: none;
}
::placeholder{
    font-size: 15px;
}
.chip button{
    font-size: 14px;
    
    border: 1px solid #DDD;
    border-radius: 99px;
    background: transparent;
    padding: 10px 15px;
    cursor: pointer;
}
.chip button:hover{
    border: 1px solid #0d6efd;
}
.chip button:focus{
    background-color: #0d6efd;
    color: #fff;
}
.chip-plus{
    display: inline-block;
    font-size: 15px;
}
</style>