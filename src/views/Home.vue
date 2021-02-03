<template>
  <div class="home">
    <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" alt="GRS Logo" src="@/assets/logo1-removebg.png" />
    <div class="landing">
      <div class="container">
        <div class="card">
          <div class="card-header text-white bg-danger">
            COVID-19 DISCLAIMER
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p>
                The health and safety of our patients and staff is of the utmost importance to us. To ensure a safe environment that promotes wellness, we follow all COVID-19 CDC guidelines. We ask that you please:
                <br>
                <ol style="text-align: left;">
                  <li>
                    Please wear a mask or face covering that covers your nose and mouth while at the clinic.
                  </li>
                  <li>
                    Wash your hands or use hand sanitizer as soon as you arrive for your appointment.
                  </li>
                  <li>
                    Please refrain from bringing someone with you to your appointment unless you need that person’s assistance to ambulate.
                  </li>
                </ol> 
                Most importantly, if you are experiencing a fever, cough, or shortness of breath, please do not come in for your appointment and inform us of your condition right away.
                <br>
                <br>
                Thank you for helping keep you safe during these challenging times!  
              </p>
            </blockquote>
          </div>
        </div>
      </div>
      <br>
      <div>
        <img class="intro-img img-fluid mb-3 mb-lg-0 rounded" src="@/assets/grs-storefront-image.jpg" alt="">
      </div>
      <br>
      <div class="container">
        <div class="card border-0 bg-transparent">
          <div class="card-body">
            <h5 class="card-title header-text">
              Are you receiving one-on-one care?
            </h5>
            <br>
            <p class="card-text">
              Come experience the difference one-on-one care makes.
              <br>
              <br>
              At Gold Rehab Services, we pride ourselves in providing individualized care. We believe that by working with patients individually, we can quickly return them to the activities they love.
              <br>
              <br>
              <router-link to="/contact" class="btn btn-outline-dark">Contact us today for a complementary assessment!</router-link>
              <br>
              <br>
              <span class="text-small font-weight-bold font-italic">
                Conveniently located near Lincoln and Touhy. Just minutes from the Edens Expressway.
              </span>
            </p>
            <div class="page-section cta">
              <div class="container">
                <div class="row">
                  <div class="col-xl-5 mx-auto">
                    <div class="cta-inner text-rounded">
                      <div class="header-text">
                        Conditions Treated
                      </div>
                      <br>
                      <div>
                        <ul class="list-unstyled list-hours mb-5 text-left mx-auto">
                          <li class="list-unstyled-item list-hours-item d-flex" v-for="condition in conditions" v-bind:key="condition">
                            <span class="fa-li"><i class="fas fa-star-of-life"></i></span>{{ condition }}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Landing",
    data: () => {
      return {
        conditions: [
          "Arthritis",
          "Back Pain & Sciatica",
          "Balance & Gait Disorders",
          "Chronic Pain",
          "Elbow, Wrist, & Hand Pain",
          "Fibromyalgia",
          "Foot and Ankle Pain",
          "Headaches",
          "Hip Pain",
          "Knee Pain",
          "Motor Vehicle Injuries",
          "Neck Pain",
          "Neurological Disorders",
          "Pre-Surgical Rehab",
          "Post-COVID Recovery Programs",
          "Post-Surgical Rehab",
          "Scoliosis",
          "Shoulder Pain",
          "SI Dysfunction",
          "Sports Injuries",
          "Thoracic Pain",
          "TMJ Dysfunction",
          "Vestibular Rehab",
          "Work Injury"
        ]
      }
    }
  };
</script>
<style scoped>
  img {
    max-width: 75%;
    height: auto;
  }
  div.container {
    color: #498899;
    font-size: x-large;
  }

  .header-text {
    font-weight: bold;
    font-size: xx-large;
  }

  .text-small {
    font-size: small;
  }
</style>
