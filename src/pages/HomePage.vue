<template>
  <div class=""></div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import Pop from "../utils/Pop";
import { logger } from "../utils/Logger";
import { profileService } from "../services/ProfileService";
export default {
  name: "Home",
  setup() {
    onMounted(() => {
      try {
        profileService.getXblProfile();
        profileService.getSteamProfile();
      } catch (error) {
        Pop.toast(error.message, "error");
        logger.log(error);
      }
    });
    return {};
  },
};
</script>

<style scoped lang="scss">
</style>
