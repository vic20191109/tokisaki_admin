<template>
  <q-list padding class="rounded-borders" style="width:100%;">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="已经到底了..."
      loading-text=""
      :offset="30"
      @load="onLoad"
    >
      <q-item
        clickable
        v-ripple
        v-for="(item, index) in ranks.slice(0, number)"
        :key="index"
        class="flex-center"
      >
        <div
          class="rank flex-center"
          :style="{
            backgroundColor:
              index === 0
                ? '#ff9800'
                : index === 1
                ? '#ccc'
                : index === 2
                ? '#b87333'
                : '#3c9cfe'
          }"
        >
          <span style="color:#fff;font-size:12px">{{ index + 1 }}</span>
        </div>

        <q-item-section>
          <q-item-label lines="1" style="color:#888;font-size:16px;">{{
            item.groupName
          }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <span
            class="text-weight-medium main"
            v-if="$store.state.user.info.roles.length >= 2"
            >{{ item.totalScore }}</span
          >
        </q-item-section>
      </q-item>
    </van-list>
  </q-list>
</template>

<script>
import { List as VanList } from "vant";
export default {
  components: {
    VanList
  },
  props: {
    ranks: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      number: 20,
      loading: false,
      finished: false
    };
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.number < this.ranks.length) {
          this.number += 10;
        }
        this.loading = false;
        if (this.number >= this.ranks.length) {
          this.finished = true;
        }
      }, 1000);
    },
    initData() {
      this.number = 20;
      this.loading = false;
      this.finished = false;
    }
  }
};
</script>

<style></style>
