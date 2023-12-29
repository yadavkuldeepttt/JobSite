<script>
	import { page } from '$app/stores';

	
</script>

<header>




<!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light shadow  p-0" >
            <a href="index.html" class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
                <h3 class="m-0 text-dark">Job<span class="text-primary">Site</span></h3>
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-2">
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0" style="padding:0 2rem">
                   <li class="nav-item text-center mx-3 mx-lg-1" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
          <a class="nav-link " aria-current="page" href="/">
         
            Home
          </a>
        </li>
                  
         <li class="nav-item text-center mx-2 mx-lg-1" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
          <a class="nav-link " aria-current="page" href="/about">
         
            About
          </a>
        </li>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Job</a>
                        <div class="dropdown-menu rounded-0 m-0">
                             <li aria-current={$page.url.pathname === '/job/jobs' ? 'page' : undefined}><a class="dropdown-item" href="/job/jobs">Want a job</a></li>

                            <li aria-current={$page.url.pathname === '/job/category' ? 'page' : undefined}><a class="dropdown-item" href="/job/category">Job Category</a></li>
                            <li aria-current={$page.url.pathname === '/job/hire' ? 'page' : undefined}><a class="dropdown-item" href="/job/hire">Post a Job</a></li>
                            <li>
                              <hr class="dropdown-divider">
                            </li>
                            <li>
                              <a class="dropdown-item" href="#t">Something else here</a>
                            </li>
                                          
                        </div>
                  </div>
                   <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Account</a>
                        <div class="dropdown-menu rounded-0 m-0">
                          
                            <li aria-current={$page.url.pathname === '/login' ? 'page' : undefined}><a class="dropdown-item" href="/login">Login</a></li>
                            <li aria-current={$page.url.pathname === '/register' ? 'page' : undefined}><a class="dropdown-item" href="/register">Register</a></li>
                            <li>
                              <hr class="dropdown-divider">
                            </li>
                            <li>
                              <a class="dropdown-item" href="#t">Something else here</a>
                            </li>
                                          
                        </div>
                  </div>

 <li class="nav-item text-center mx-2 mx-lg-1" aria-current={$page.url.pathname === '/job/contact' ? 'page' : undefined}>
          <a class="nav-link active" aria-current="page" href="/job/contact">
         
            Contact
          </a>
        </li>

         <li class="nav-item text-center mx-2 mx-lg-1" aria-current={$page.url.pathname === '/job/message' ? 'page' : undefined}>
          <a class="nav-link text-primary " aria-current="page" href="/job/message">
             <i class="bi bi-chat-dots-fill" style="font-size:20px;margin-top:-2rem;display:inline-block;cursor:pointer"></i>

            <!-- <i class="fa-solid fa-message"></i> -->
          </a>
        </li>

                </ul>
                  </div>


                     <div class="nav-item dropdown ">
                        <a href="#" class="nav-link dropdown-toggle btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block text-white" data-bs-toggle="dropdown"><i class="fa-solid fa-user-tie"></i>&nbsp;</a>
                        <div class="dropdown-menu rounded-0  dropdown-menu-end dropdown-menu-start"  >
                          
                            <li aria-current={$page.url.pathname === '/job/preferences' ? 'page' : undefined}><a class="dropdown-item " href="/job/preferences">Preferences</a></li>
                            <li aria-current={$page.url.pathname === '/job/myapplication' ? 'page' : undefined}><a class="dropdown-item active" href="/job/myapplication">My Applications</a></li>
                            <li aria-current={$page.url.pathname === '/help' ? 'page' : undefined}><a class="dropdown-item" href="/help">Help Center</a></li>
                            
                            <li>
                              <hr class="dropdown-divider">
                            </li>
                            <li>
                              <a class="dropdown-item " href="#t">Log Out</a>
                            </li>
                                          
                        </div>
                  </div>

          
      
            </div>
          </nav>
        <!-- Navbar End -->


      </header>


<style>
  .navbar-light .navbar-nav .nav-link {
    color:#2B3940;
    font-weight: 500;
    padding: 0 1rem;
    font-size: 15px;
}
 .navbar-nav .nav-link:hover, .navbar-light .navbar-nav .nav-link.active {
    color:#00B074
}
.sticky-top {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1020;
    left: 0;
}
.navbar {
    transition: all 0.3s ease;
  }
</style>











