<template>
  <div class="row cover-row"></div>
  <div class="row justify-content-center row-height">
    <div class="col-md-3 text-center">
      <img
        :src="xblProfile.profileImg"
        class="img-fluid profile-image"
        alt="profile-img"
      />
    </div>
  </div>
  <div class="row pt-5">
    <div class="col-md-6">
      <h6>{{ xblProfile.name }}</h6>
      <h2>{{ xblProfile.gamerTag }}</h2>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
export default {
  props: {
    xblProfile: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      xblCover: computed(
        () => `#${props.xblProfile.preferredColors?.primaryColor}`
      ),
      xblBackground: computed(
        () => `#${props.xblProfile.preferredColors?.secondaryColor}`
      ),
    };
  },
};
</script>


<style lang="scss" scoped>
.profile-image {
  border-radius: 50%;
  transform: translateY(-12vh);
}
.row-height {
  height: 10vh;
}
.cover-row {
  background-color: v-bind(xblCover);
  height: 35vh;
}
.background-color {
  background-color: v-bind(xblBackground);
}
</style>
