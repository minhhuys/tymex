<template>
<!--begin::Footer-->
<div v-if="footerDisplay" id="kt_app_footer" class="app-footer text-white">
  <!--begin::Footer container-->
  <div class="app-container py-20" :class="{
    'container-fluid': footerWidthFluid,
    'container-xxl': !footerWidthFluid,
  }">
    <div class="footer-upper">
      <div class="row g-8">
        <div class="col-md-4 col-12">
          <p class="fs-2 text-uppercase fw-bolder pb-lg-8">
            Navigation
          </p>
          <div class="row">
            <div class="col-4">
              <ul class="menu flex-column menu-hover-primary fw-semibold order-1">
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Home</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">About Us</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Our Team</a>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <ul class="menu flex-column menu-hover-primary fw-semibold order-1">
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Whitepaper</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Marketplace</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Roadmap</a>
                </li>
              </ul>
            </div>
            <div class="col-4">
              <ul class="menu flex-column menu-hover-primary fw-semibold order-1">
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">FAQ</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">News</a>
                </li>
                <li class="menu-item">
                  <a href="javascipt:;" target="_blank" class="menu-link text-white px-0 fs-4">Community</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-md-3 col-12">
          <p class="fs-2 text-uppercase fw-bolder pb-lg-8">
            Contact Us
          </p>
          <ul class="menu flex-column menu-hover-primary fw-semibold order-1">
            <li class="menu-item">
              <a href="tel:+6494461709" target="_blank" class="menu-link text-white px-0 fs-4">
                <KTIcon icon-name="phone" icon-class="fs-2 text-white me-2" />
                01234556677
              </a>
            </li>
            <li class="menu-item">
              <a href="mailto:tymex-talent@tyme.com" target="_blank" class="menu-link text-white px-0 fs-4">
                <KTIcon icon-name="messages" icon-class="fs-2 text-white me-2" />
                tymex-talent@tyme.com
              </a>
            </li>
          </ul>

        </div>
        <div class="col-md-5 col-12">
          <p class="fs-2 text-uppercase fw-bolder pb-lg-8">
            Subcribe to receive our latest update
          </p>
          <div class="footer-notification d-flex">
            <input ref="inputRef" id="kt_share_earn_link_input" type="text"
              class="form-control bg-transparent me-3 flex-grow-1" name="search" placeholder="Your Email" />

            <button ref="copyButtonRef" class="btn btn-primary fw-bold flex-shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="separator my-10 border-light"></div>
      <div class="footer-bottom d-flex flex-column flex-md-row flex-center flex-md-stack">
        <!--begin::Copyright-->
        <div class="text-white order-2 order-md-1">
          <span class="fw-semibold me-1">2023©</span>
          <a href="javascript:;" target="_blank" class="text-white">Tyme - Edit. All Rights
            reserved</a>
        </div>
        <!--end::Copyright-->
        <!--begin::Menu-->
        <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
          <li class="menu-item">
            <a href="javascipt:;" target="_blank" class="menu-link px-2">About</a>
          </li>
          <li class="menu-item">
            <a href="javascipt:;" target="_blank" class="menu-link px-2">Support</a>
          </li>
          <li class="menu-item">
            <a href="javascipt:;" target="_blank" class="menu-link px-2">Purchase</a>
          </li>
        </ul>
        <!--end::Menu-->
      </div>
    </div>

    <!--end::Footer container-->
  </div>
</div>
<!--end::Footer-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerDisplay, footerWidthFluid } from "@/core/helpers/config";

export default defineComponent({
  name: "theme-footer",
  components: {},
  setup() {
    return {
      footerWidthFluid,
      footerDisplay,
    };
  },
});
</script>
