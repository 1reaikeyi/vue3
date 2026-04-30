<script setup>
import {useCountStore} from "@/util/同步.js";
const static_store1 = useCountStore();

import {useChannelStore} from "@/util/异步.js";
const static_store2 = useChannelStore();
</script>

<template>
  <!--pinia  -->
  <button @click="static_store1.add">+</button>
  <div>{{static_store1.count}}</div>

  <div>{{static_store2.channelList}}</div>
</template>

<style scoped>

</style>