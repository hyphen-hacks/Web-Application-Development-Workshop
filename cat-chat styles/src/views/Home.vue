<template>
  <div class="home page">
    <div class="messageRow">
      <div class="message">
        <p class="message__text">Hi</p>
        <p class="message__info">16 min ago - Ronan Furuta</p>
      </div>
    </div>
    <div class="messageRow">
      <div class="message you">
        <p class="message__text">Hi</p>
        <p class="message__info">16 min ago - Ronan Furuta</p>
      </div>
    </div>
    <div class="sendboxContainer">
      <form class="sendBox">
        <input type="text" placeholder="Message">
        <button class="btn">SEND</button>
      </form>
    </div>

  </div>
</template>

<script>

  export default {
    name: 'home',

  }
</script>
