<template>
  <!-- 标签页 -->
  <div class="conter">
    <el-scrollbar ref="scrollContainer" :vertical="false">
      <router-link
        v-for="tag in tagsPages"
        ref="tag"
        :to="{ path: tag.path}"
        :key="tag.path"
        tag="span"
      >
        <span class="el-icon-close" @click.prevent.stop="closeSelectedTag(tag)" />
        {{ tag.title }}
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  components: {},
  data() {
    return {
      left: 0,
      
    };
  },
  methods: {
    addTagsPage() {
      if (this.$route.name) {
        const route = this.$route;
        this.$store.dispatch("addPage", route);
      }
    },

    closeSelectedTag(view) {
      this.$store.dispatch("delPage", view).then(visitedViews => {
        if (view.path == this.$route.path) {
          const latestView = visitedViews.slice(-1)[0];
          if (latestView) {
            this.$router.push(latestView);
          } else {
            this.$router.push("/");
          }
        }
      });
    }
  },

  mounted() {},
  watch: {
    $route() {
      this.addTagsPage();
    }
  },
  computed: {
    tagsPages() {
      return this.$store.state.tagsPages.tagsPages;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>