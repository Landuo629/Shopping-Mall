<template>
  <div class="recommend">
      <div class='recommend-item' v-for='item in recommends' :key='item.id'>
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{ item.title }}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: 'RecommendView',
    props: {
        recommends: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .recommend{
        display: flex;
        text-align: center;
        width: 100%;
        font-size: 0.8em;
        padding: 15px 0 20px;
        border-bottom: 8px solid #eee;
    }

    .recommend .recommend-item{
        flex: 1;
    }

    .recommend .recommend-item img{
        width: 70px;
        height: 70px;
    }
</style>