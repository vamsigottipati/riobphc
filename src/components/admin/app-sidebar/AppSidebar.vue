<template>
  <vuestic-sidebar :hidden="isOpen" >
    <template slot="menu" style="background-color:#10e7dc;">
    <div style="background-color:#10e7dc;">
      <sidebar-link
        :to="{ name: 'home' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-dashboard"></span>
          <span class="sidebar-text">Home</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'about' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-video"></span>
          <span class="sidebar-text">About</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'profile' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-user"></span>
          <span class="sidebar-text">Profile</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'how' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-graph"></span>
          <span class="sidebar-text">How ??</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'rent' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-maps"></span>
          <span class="sidebar-text">Rent</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'list' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-forms"></span>
          <span class="sidebar-text">List</span>
        </span>
      </sidebar-link>

      <sidebar-link
        :to="{ name: 'dashboard' }">
        <span slot="title">
          <span class="sidebar-menu-item-icon vuestic-icon vuestic-icon-settings"></span>
          <span class="sidebar-text">Dashboard</span>
        </span>
      </sidebar-link>
    </div>
    </template>
  </vuestic-sidebar>
</template>

<script>

  import VuesticSidebar from '../../../vuestic-theme/vuestic-components/vuestic-sidebar/VuesticSidebar'
  import SidebarLink from './components/SidebarLink'
  import SidebarLinkGroup from './components/SidebarLinkGroup'

  export default {
    name: 'app-sidebar',
    components: {
      VuesticSidebar,
      SidebarLink,
      SidebarLinkGroup
    },
    props: {
      isOpen: {
        type: Boolean,
        required: true
      }
    }
  }
</script>

<style scoped>
  .sidebar-text{
    color:white;
  }
</style>
