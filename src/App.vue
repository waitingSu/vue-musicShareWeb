<template>
  <div>
    <AppHeader></AppHeader>
    <router-view v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>

    <!-- Player -->
    <AppPlayer />

    <!-- Auth Modal -->
    <Auth />
  </div>
</template>
<script>
import AppHeader from '@/components/Header.vue';
import Auth from '@/components/Auth.vue';
import { mapWritableState } from 'pinia';
import useUserStore from '@/stores/user';
import { auth } from './includes/firebase';
import AppPlayer from '@/components/Player.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    AppPlayer,
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn']),
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true;
    } else {
      this.userLoggedIn = false;
    }
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.5s linear;
}

.fade-leave-to {
  transition: all 0s lienar;
  opacity: 0;
}
</style>
