<template>
  <div id="footer">
    <span>{{ slogon }}</span>
  </div>
</template>

<script>
import "../assets/styles/footer.styl";

export default {
  data() {
    return {
      slogon: "记录每天在干嘛，免得再问时间都去哪儿了。。。"
    };
  }
};
</script>
