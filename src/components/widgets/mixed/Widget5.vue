<template>
<!--begin::Mixed Widget 5-->
<div :class="widgetClasses" class="card-borderless text-white nft-filter">
  <!--begin::Body-->
  <div class="card-body d-flex flex-column px-0">
    <!--begin::Form-->
    <el-form @submit.prevent="submit()" :model="formData" :rules="rules" ref="formRef">

      <!--begin::Billing form-->
      <div id="kt_modal_add_customer_billing_info">
        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Input-->
          <el-form-item prop="addressLine">
            <el-input v-model="search" @input="searchItems()" placeholder="Quick Search by name" type="text"
              :prefix-icon="Search" size="large" clearable class="bg-transparent" />
          </el-form-item>
          <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">
            <span class="text-uppercase text-muted fw-bold">Price</span>
          </label>
          <!--end::Label-->
          <div class="range-slider">
            <span class="rangeValues"></span>
            <input value="0.01" min="0.01" max="200" step="0.01" type="range">
            <input value="200" min="0.01" max="200" step="0.01" type="range">
          </div>
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">
            <span class="text-uppercase text-muted fw-bold">Tier</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <el-select v-model="formData.tier" size="large">
            <el-option value="">Select Tier</el-option>
            <el-option v-for="item in tiers" :key="item.id" :value="item.id" :label="item.name"></el-option>
          </el-select>
          <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">
            <span class="text-uppercase text-muted fw-bold">Theme</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <el-select v-model="formData.theme" size="large">
            <el-option value="">Select theme</el-option>
            <el-option value="halloween" label="Halloween">
            </el-option>
            <el-option value="xmas" label="xmas">
            </el-option>
            <el-option value="newyear" label="New Year">
            </el-option>
          </el-select>
          <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">
            <span class="text-uppercase text-muted fw-bold">Time</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <el-select v-model="formData.time" size="large">
            <el-option value="">Select time</el-option>
            <el-option value="latest" label="Latest"></el-option>
            <el-option value="earliest" label="Earliest">
            </el-option>
          </el-select>
          <!--end::Input-->
        </div>
        <!--end::Input group-->

        <!--begin::Input group-->
        <div class="d-flex flex-column mb-7 fv-row">
          <!--begin::Label-->
          <label class="fs-6 fw-semobold mb-2">
            <span class="text-uppercase text-muted fw-bold">Price</span>
          </label>
          <!--end::Label-->

          <!--begin::Input-->
          <el-select v-model="formData.price" size="large">
            <el-option value="">Select price</el-option>
            <el-option value="asc" label="Low to high">
            </el-option>
            <el-option value="desc" label="High to low">
            </el-option>
          </el-select>
          <!--end::Input-->
        </div>
        <!--end::Input group-->
      </div>
      <!--end::Billing form-->

      <!--begin::Modal footer-->
      <div class="d-flex align-items-center">
        <!--begin::Button-->
        <button type="reset" class="btn px-0 me-10 no-hover text-white fw-bold" @click="resetFilter">
          <KTIcon icon-name="cross-circle" icon-class="fs-1 text-warning" />
          Reset filter
        </button>
        <!--end::Button-->

        <!--begin::Button-->
        <button :data-kt-indicator="loading ? 'on' : null" class="btn btn-lg btn-primary w-150px" type="submit">
          <span v-if="!loading" class="indicator-label">
            Search
          </span>
          <span v-if="loading" class="indicator-progress">
            Please wait...
            <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
          </span>
        </button>
        <!--end::Button-->
      </div>
      <!--end::Modal footer-->
    </el-form>
    <!--end::Form-->
  </div>
  <!--end::Body-->
</div>
<!--end::Mixed Widget 5-->
</template>
<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref, onMounted } from "vue";
import { countries } from "@/core/data/countries";
import { Search } from '@element-plus/icons-vue'
import { tiers } from "@/core/data/tiers";
import { useNftStore } from "@/stores/nft";

export default defineComponent({
  name: "add-customer-modal",
  components: {},
  props: {
    widgetClasses: String
  },
  setup() {
    const search = ref<string>("");
    const store = useNftStore()

    const formRef = ref<null | HTMLFormElement>(null);
    const loading = ref<boolean>(false);
    const formData = ref({
      tier: "all",
      theme: "halloween",
      time: "latest",
      price: "asc"
    });

    const rules = ref({
      tier: [
        {
          required: false,
          trigger: "change",
        },
      ],
      theme: [
        {
          required: false,
          trigger: "change",
        },
      ],
      time: [
        {
          required: false,
          trigger: "change",
        },
      ],
      price: [
        {
          required: false,
          trigger: "change",
        },
      ],
    });

    let typingDebounceTimer = ref<any>(null);
    const typeDebounceDuration = ref<number>(800);

    const searchItems = () => {
      typingDebounceTimer && clearTimeout(typingDebounceTimer);
      if (search.value.length > 0 && search.value.length < 4) return;

      typingDebounceTimer.value = setTimeout(async () => {

        const searchValue = search.value.trim();

        store.searchByName(searchValue);
      }, typeDebounceDuration.value);
    }


    const submit = () => {
      store.getListNFT(formData.value)
    };

    const resetFilter = () => {
      store.getListNFT({})
    }

    const getVals = function (this: HTMLElement, _ev: Event) {
      // Get slider values
      let parent = this.parentNode as HTMLElement;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      // Neither slider will clip the other, so make sure we determine which is larger
      if (slide1 > slide2) { let tmp = slide2; slide2 = slide1; slide1 = tmp; }

      let displayElement = parent.getElementsByClassName("rangeValues")[0];
      // displayElement.innerHTML = "ETH" + slide1 + " - ETH" + slide2;
      displayElement.innerHTML = `${slide1} ETH - ${slide2} ETH`;

    }


    onMounted(() => {
      let sliderSections = document.getElementsByClassName("range-slider");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].addEventListener("input", getVals)
            // Manually trigger event first time to display values
            getVals.call(sliders[y], null!);
          }
        }
      }
    })


    return {
      search,
      formData,
      rules,
      submit,
      formRef,
      loading,
      getAssetPath,
      countries,
      searchItems,
      Search,
      getVals,
      tiers,
      resetFilter
    };
  },
});
</script>

<style lang="scss">
.el-input__wrapper {
  background-color: transparent;

  .el-input__inner {
    color: #89888B;
    font-weight: 600;
  }

  &.is-focus {
    color: #89888B
  }
}

.range-slider {
  width: 100%;
  text-align: center;
  position: relative;

  .rangeValues {
    display: block;
  }
}

input[type=range] {
  -webkit-appearance: none;
  border: 1px solid white;
  width: 100%;
  position: absolute;
  left: 0;
}

input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;

}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: linear-gradient(91.47deg, #DA458F -6%, #DA34DD 113.05%);
  margin-top: -5px;
  cursor: pointer;
  position: relative;
  z-index: 1;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #ccc;
}

input[type=range]::-moz-range-track {
  width: 50%;
  height: 5px;
  background: #ddd;
  border: none;
  border-radius: 3px;
}

input[type=range]::-moz-range-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #21c1ff;

}


/*hide the outline behind the border*/

input[type=range]:-moz-focusring {
  outline: 1px solid white;
  outline-offset: -1px;
}

input[type=range]::-ms-track {
  width: 50%;
  height: 5px;
  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */
  background: transparent;
  /*leave room for the larger thumb to overflow with a transparent border */
  border-color: transparent;
  border-width: 6px 0;
  /*remove default tick marks*/
  color: transparent;
  z-index: -4;

}

input[type=range]::-ms-fill-lower {
  background: #777;
  border-radius: 10px;
}

input[type=range]::-ms-fill-upper {
  background: #ddd;
  border-radius: 10px;
}

input[type=range]::-ms-thumb {
  border: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: #21c1ff;
}

input[type=range]:focus::-ms-fill-lower {
  background: #888;
}

input[type=range]:focus::-ms-fill-upper {
  background: #ccc;
}
</style>
