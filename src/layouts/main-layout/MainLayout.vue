<template>
<!--begin::App-->
<div class="d-flex flex-column flex-root app-root" id="kt_app_root">
  <!--begin::Page-->
  <div class="app-page flex-column flex-column-fluid" id="kt_app_page">
    <KTHeader />
    <!--begin::Wrapper-->
    <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">
      <!--begin::Main-->
      <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
        <!--begin::Content wrapper-->
        <div class="d-flex flex-column flex-column-fluid">
          <div id="kt_app_content" class="app-content flex-column-fluid pb-6"
            :style="{ backgroundImage: `url(${getAssetPath('media/user/bg-main.png')})` }">
            <div class="position-relative bg-large" :style="{
              backgroundImage: `url(${getAssetPath('media/user/bg-large.webp')})`,
              width: `100vw`,
              height: `800px`
            }">
              <img class="position-absolute img-fluid mw-900px" :src="getAssetPath('media/user/bg-text.webp')" alt="">
              <img class="position-absolute img-fluid w-100 bottom-0 end-0 d-lg-block d-none" height="300"
                :src="getAssetPath('media/user/bg-list-nft.webp')" alt="">
              <img class="position-absolute img-fluid mw-500px" :src="getAssetPath('media/user/bg-the-dj.webp')" alt="">
            </div>

            <KTContent></KTContent>
            <img class="img-fluid" :src="getAssetPath('media/user/wave.webp')" alt="">
          </div>
        </div>
        <!--end::Content wrapper-->
      </div>
      <!--end:::Main-->
    </div>
    <!--end::Wrapper-->
  </div>
  <!--end::Page-->
  <KTFooter />

</div>
<!--end::App-->
<KTDrawers />
<KTScrollTop />
<KTModals />
</template>

<script lang="ts">
import {
  defineComponent,
  nextTick,
  onBeforeMount,
  onMounted,
  watch,
} from "vue";
import KTHeader from "@/layouts/main-layout/header/Header.vue";
import KTContent from "@/layouts/main-layout/content/Content.vue";
import KTDrawers from "@/layouts/main-layout/drawers/Drawers.vue";
import KTFooter from "@/layouts/main-layout/footer/Footer.vue";
import KTModals from "@/layouts/main-layout/modals/Modals.vue";
import KTScrollTop from "@/layouts/main-layout/extras/ScrollTop.vue";
import { useRoute } from "vue-router";
import { reinitializeComponents } from "@/core/plugins/keenthemes";
import LayoutService from "@/core/services/LayoutService";
import { getAssetPath } from "@/core/helpers/assets";

export default defineComponent({
  name: "default-layout",
  components: {
    KTHeader,
    KTContent,
    KTScrollTop,
    KTModals,
    KTFooter,
    KTDrawers
  },
  setup() {
    const route = useRoute();

    onBeforeMount(() => {
      LayoutService.init();
    });

    onMounted(() => {
      nextTick(() => {
        reinitializeComponents();
      });
    });

    watch(
      () => route.path,
      () => {
        nextTick(() => {
          reinitializeComponents();
        });
      }
    );

    return {
      getAssetPath
    }
  },
});
</script>

<style lang="scss" scoped>
.bg-large {
  margin-bottom: 10rem;

  img:first-child {
    top: 15%;
    left: 5%;
  }

  img:last-child {
    right: 3%;
    bottom: 0;
  }
}


@media screen and (max-width: 768px) {
  .bg-large {
    height: 500px;

    img:first-child {
      top: 10%;
      left: 15%;
      max-width: 300px !important;
    }

    img:last-child {
      right: 0;
      bottom: 0;
      max-width: 400px !important;
    }
  }
}
</style>
