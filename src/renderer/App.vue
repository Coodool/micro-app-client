<template>
  <div>
    <div class="plugin" v-for="plugin in plugins" :key="plugin.name">
      <div>{{ plugin.name }}</div>
      <button @click="onDelete">删除</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {ipcRenderer} from "electron";
import { PluginMeta } from "../../types";

@Component
export default class App extends Vue {
  plugins: Array<PluginMeta> = [];

  created() {
    ipcRenderer.invoke("get-plugin-list").then(res=>{
      console.log(res)
    })
    // this.plugins = PluginManager.getPluginsList();
  }

  onDelete() {
    // ipcRenderer;
  }
}
</script>

<style lang="less" scoped>
.plugin {
  margin: 24px 0px;
  padding: 12px 12px;

  background-color: #d3f261;

  display: flex;
  column-gap: 12px;
}
</style>
