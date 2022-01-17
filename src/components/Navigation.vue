<template>
  <div>
    <div>
      <b-navbar type="light" variant="light" fixed="top">
        <b-navbar-brand :to="'/'">
          <img :src="SIDE" alt="" />
        </b-navbar-brand>

        <b-button
          v-b-toggle.sidebar-backdrop
          size="sm"
          variant="outline-secondary"
          class=""
        >
          <b-icon icon="list"></b-icon>
        </b-button>
        <!-- <b-navbar-toggle target="sidebar-backdrop" class="">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="x"></b-icon>
                <b-icon v-else icon="list"></b-icon>
            </template>
        </b-navbar-toggle> -->

        <!-- <b-collapse id="nav-collapse" is-nav> -->
        <!-- <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav> -->

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- </b-collapse> -->
      </b-navbar>
    </div>
    <b-sidebar id="sidebar-backdrop" title="Sidebar" shadow backdrop>
      <div class="px-2 py-2">
        <!-- <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
            </p>
            <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
        <b-nav vertical class="">
          <b-nav-item :to="'/dashboard'"
            ><b-icon icon="grid1x2-fill" aria-hidden="true"></b-icon>
            <span class="ml-2">Dashboard</span>
          </b-nav-item>
        </b-nav>
        <b-nav vertical class="">
          <b-nav-item :to="'/statistik'"
            ><b-icon icon="clipboard-data" aria-hidden="true"></b-icon>
            <span class="ml-2">Statistik</span>
          </b-nav-item>
        </b-nav>
        <b-nav vertical class="">
          <b-nav-item :to="'/listing'"
            ><b-icon icon="building" aria-hidden="true"></b-icon>
            <span class="ml-2">Listing</span>
          </b-nav-item>
        </b-nav>
        <b-nav vertical class="">
          <b-nav-item :to="'/leads'"
            ><b-icon icon="book-half" aria-hidden="true"></b-icon>
            <span class="ml-2">Leads</span>
          </b-nav-item>
        </b-nav>
      </div>
    </b-sidebar>
    <!-- <b-navbar-toggle target="sidebar-backdrop" class="">
            <template #default="{ expanded }">
                <b-icon v-if="expanded" icon="x"></b-icon>
                <b-icon v-else icon="list"></b-icon>
            </template>
        </b-navbar-toggle> -->
    <div class="container main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SIDE from "../assets/logo-nav.png";

export default {
  data() {
    return {
      SIDE: SIDE,
    };
  },
};
</script>

<style scoped>
.main {
  margin-top: 95px;
}

.b-sidebar {
  top: 68px !important;
  /* color: red; */
}
</style>