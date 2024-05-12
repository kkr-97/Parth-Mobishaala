<template>
  <div>
    <div class="white black-text">
      <div class="white black-text right-align">
        <div class="top-contact-bar">
          <span class="institute-number" @click="call('8384858685')"
            >help desk
            <i
              class="material-icons"
              style="
                padding-right: 4px;
                font-size: 1rem;
                line-height: 1rem;
                vertical-align: middle;
              "
              >call</i
            >8384858685</span
          >
        </div>
      </div>

      <!-- <div class="top-contact-bar ">
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeHp9h23v1vhoaSzI6UdxVzEL_QDALOJmYgtNKgn28L6A0a7w/viewform?usp=sf_link"
          class="btn-flat institute-number"
        >Feedback - अभिप्राय</a>
        <span class="institute-number" @click="call('9833814190')">
          help desk
          <i
            class="material-icons"
            style="padding-right: 4px; font-size: 1rem; line-height: 1rem; vertical-align: middle;"
          >call</i>9833814190
        </span>
      </div> -->
    </div>
    <div class="page">
      <div class="header">
        <a href="https://parthinfo.com" target="_blank">
          <img class="logo" src="@/assets/logo.png" />
        </a>
        <div class="title">
          <b>Parth Live</b>
        </div>
        <div class="slogan">
          “Rise, awake and stop not till the goal is reached”.
        </div>
        <div class="section">
          <div
            style="
              padding: 56.25% 0 0 0;
              position: relative;
              border-radius: 10px;
              overflow: hidden;
              background: black;
            "
          >
            <iframe
              src="https://www.youtube.com/embed/kB3dyksaBx0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              style="
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
              "
            ></iframe>
          </div>
        </div>
      <!-- <div class="top-contact-bar ">
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSeHp9h23v1vhoaSzI6UdxVzEL_QDALOJmYgtNKgn28L6A0a7w/viewform?usp=sf_link"
          class="btn-flat institute-number feedback-btn"
          >Feedback - अभिप्राय</a
        >
      </div> -->

      <a
          target="_blank"
          href="https://api.whatsapp.com/send/?phone=919972968390&text=Hello%21+I+want+to+know+about+mobishaala.com%2C+my+name+is+&type=phone_number&app_absent=0"
          class="whatsapp-btn"
          >
          <img src="../assets/whatsapp.svg" height="32">
          <span>WhatsApp</span>
    </a>
      

        <div class="header-text-2">
          <b>Powered By</b>
        </div>
        <a href="https://mobishaala.com" target="_blank">
          <img class="logo" src="@/assets/ocd.png" />
        </a>
      </div>
    </div>

    <footer class="page-footer grey lighten-3">
      <div class="footer-copyright">
        <div class="container">
          <a class="black-text" href="https://parthinfo.com" target="_blank"
            >© 2020 Parth Knowledge Network Pvt. Ltd</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>


<style scoped>
.feedback-btn {
  border: 1px solid black;
  border-radius: 20px;
}

.whatsapp-btn{
  background-color: #399938;
  padding: 12px 22px 12px 22px;
  color: white;
  border-width: 0;
  border-radius: 14px;
  display: flex;
  align-items: center;
  margin: auto;
  width: 146px;
}

.footer {
  margin-top: 32px;
  margin-right: 32px;
  padding: 16px;
  width: calc(100% - 32px);
  text-align: center;
}
.page {
  overflow-x: hidden;
  padding: 16px;
}
.codegena {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.27198%;
}
.codegena iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border-radius: 10px;
  height: 100%;
}

.section {
  width: 100%;
  max-width: 800px;
  margin: 16px auto;
}

.section img {
  width: 100%;
  height: auto;
  background: white;
}

.particles {
  width: 100%;
  height: 100%;
  position: fixed;
}
.header {
  margin-top: 32px;
  text-align: center;
  width: 100%;
}

.header .logo {
  height: 128px;
  /* margin-right: 16px; */
}
.header .title {
  height: 64px;
  line-height: 64px;
  font-size: 2rem;
}
.header .slogan {
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.3rem;
}
.header .join-button {
  padding: 16px;
  background: white;
  font-size: 1.3rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 32px;
  transform: scale(1);
  will-change: transform;
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.dashboard-button {
  padding: 16px;
  background: white;
  font-size: 1.3rem;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  position: absolute;
  right: 8px;
  top: 8px;
}
.header .join-button:hover {
  transform: scale(1.1);
}
.header .header-text {
  line-height: 64px;
  font-size: 2rem;
  margin-top: 64px;
}
.header .header-text-2 {
  line-height: 64px;
  font-weight: 300;
  font-size: 1.7rem;
  margin-top: 150px;
}
.header .link {
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.3rem;
  cursor: pointer;
  will-change: transform;
  transform: scale(1);
  transition: transform 300ms cubic-bezier(0.075, 0.82, 0.165, 1);
}
.header .link:hover {
  transform: scale(1.1);
}

.dashboard-button-slogan {
  line-height: 64px;
  font-size: 1.3rem;
  margin-top: 8px;
}
.top-contact-bar {
  margin: 0 auto;
  padding-top: 4px;
  padding-bottom: 8px;
  padding-right: 8px;
  max-width: 1000px;
   display: flex;
  align-items: center;
  justify-content: space-between;
}

.top-contact-bar .institute-number {
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.6);
}
</style>
<script>
export default {
  methods: {
    call(num) {
      let intent = "tel:" + num;
      window.open(intent, "_blank");
    },
  },
};
</script>
