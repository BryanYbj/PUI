<template>
  <div class="test">
    <p-header> 头部 </p-header>
    <p-container>
      <p-aside width="'200px'"> 菜单 </p-aside>
      <p-main>
        <p-button type="warning"> p-ui的自定义按钮 </p-button>
      </p-main>
    </p-container>
    <p-header> 头部 </p-header>
  </div>
  
</template>

<script></script>
<style lang="scss">
  html,body,#app,.test{
    height: 100%;
  }

  body{
    margin: 0;
  }

  .test{
    display: flex;
    flex-direction: column;

  }

  .p-header{
    background-color: #3A8EE6;
  }

  .p-aside{
    background-color: #5DAF34;
  }

  .p-main{
    background-color: #82848a;
  }
</style>