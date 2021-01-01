<template>
  <div class="landing">
    <div>
      <img src="@/assets/cora-storefront-image.jpg" alt="">
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
            <a href="/contact" class="btn btn-outline-dark">Contact us today for a complementary assessment!</a>
            <br>
            <br>
            <span class="text-small">
              Conveniently located near Lincoln and Touhy. Just minutes from the Edens Expressway.
            </span>
          </p>
          <div class="conditions">
            <div class="header-text">
              Conditions Treated
            </div>
            <br>
            <div>
              <ul class="injury-list fa-ul">
                <li v-for="condition in conditions" v-bind:key="condition">
                  <span class="fa-li"><i class="fas fa-star-of-life"></i></span>{{ condition }}</li>
              </ul>
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
        conditions: ["Arthritis","Back Pain & Sciatica","Balance & Gait Disorders","Chronic Pain","Elbow, Wrist, & Hand Pain","Fibromyalgia","Foot and Ankle Pain","Headaches","Hip Pain","Knee Pain","Motor Vehicle Injuries","Neck Pain","Neurological Disorders","Pre-Surgical Rehab","Post-COVID Recovery Programs","Post-Surgical Rehab","Scoliosis","Shoulder Pain","SI Dysfunction","Sports Injuries","Thoracic Pain","TMJ Dysfunction" ,"Vestibular Rehab","Work Injury"]
      }
    }
  };
</script>
<style scoped>
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

.injury-list {
  list-style-type: square;
}

.conditions {
  width:35%;
  margin:0 auto;
  text-align:left;
}

li {
  font-size: medium;
}
</style>