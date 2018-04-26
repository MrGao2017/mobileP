<template>
  <div>
      <h3>关于</h3>
      <hr>
      <ul class="nav">
        <router-link to="/about/study" tag="li"><a>study</a></router-link>
        <router-link to="/about/work" tag="li"><a>work</a></router-link>
        <router-link to="/about/hobby" tag="li"><a>hobby</a></router-link>
      </ul>
      <hr>
      <router-view/>
  </div>
</template>
