<template>
  <main id="app">
    <div class="app__info">
      <nav class="app__info__buttonRow">
      <div class="profileImage"></div>
        <button class="app__info_buttonRow__logout">Logout</button>
      </nav>
      <img class="logo" src="./assets/logo.png" alt="Cat Chat Logo">
      <h1 class="brandText">Cat Chat</h1>
      <p class="desc">Cat Chat is an example chat application for a Hyphen-Hacks workshop on web application development led by Ronan Furuta</p>
      <small>This site is licensed under Apache 2.0</small>
    </div>
    <router-view/>
  </main>
</template>

<script>
  import 'minireset.css'
  import './assets/app.scss'

  export default {
    name: 'appContainer'
  }
</script>