<template>
  <div>
    <router-link to="/vue" style="padding: 16px; display: inline-block"
      >Vue Home</router-link
    >
    <router-link to="/vue/subroute" style="padding: 16px; display: inline-block"
      >Vue Sub Route</router-link
    >
<!--  다른 micro-app 의 주소를 적어도 그냥 동일하게 쓰면됨 가능 ㅇㅇ 다른점은 root-config 가 있다는것 말고는 없음  -->
    <router-link to="/angular" style="padding: 16px; display: inline-block"
      >Leave Vue</router-link
    >
    <div>Vue app is mounted</div>
    <router-view></router-view>
  </div>
</template>
