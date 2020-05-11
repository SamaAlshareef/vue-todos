<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Vue Todos</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active m-2">
          <router-link to="/">Home</router-link>
      </li>
      <li class="nav-item m-2">
          <router-link to="/todos">Todos</router-link>
      </li>
      <li class="nav-item m-2">
          <router-link to="/done-todos">Done Todos</router-link>
      </li>
    </ul>
  </div>
</nav>
</template>