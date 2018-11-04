<template>
  <vuestic-layout v-layout>
    <app-navbar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <app-sidebar :isOpen="opened" @toggle-menu="toggleSidebar"/>
    <main slot="content" id="content" class="content" role="main">
    <!--  <vuestic-breadcrumbs/> -->
      <vuestic-widget   headerText="List Your Item" style="max-height: 100vh;">
        <div style="display:flex;">
          <vuestic-wizard
            :steps="steps"
            wizard-layout="vertical"
            :wizard-type="wizardType">
            <div slot="page1" class="form-wizard-tab-content">
              <h4>Give Your Item A Name</h4>
              <p>.</p>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}">
                <div class="input-group">
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    v-validate="'required'"
                    required="required"/>
                  <i
                    class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label" style="">Something Catchy ...</label><i class="bar"></i>
                  <small v-show="errors.has('name')" class="help text-danger">{{
                    errors.first('name') }}
                  </small>
                  <br>
                  <!-- <label style="color:#10d7dc;font-size:1.1rem;">Add Some Photos ...</label> -->
                  <vuestic-file-upload
                      dropzone
                      style="margin-top:5vh;"
                      required="required"
                  />
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <h4>Enter Pickup Location Details</h4>
              <p>Zebras communicate with facial expressions and sounds. They make loud
                braying or barking sounds and
                soft snorting sounds.</p>

                <div class="form-group with-icon-right"
                     :class="{'has-error': errors.has('address'), 'valid': isFormFieldValid('address')}">
                  <div class="input-group">
                    <input
                      type="text"
                      name="address"
                      v-model="address"
                      v-validate="'required'"
                      required="required"/>
                    <i
                      class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label class="control-label">Address </label><i class="bar"></i>
                    <small v-show="errors.has('name')" class="help text-danger">{{
                      errors.first('name') }}
                    </small>
                    <br>
                  </div>
                </div>

            <!--  <vuestic-simple-select
                label="Select country"
                v-model="selectedCountry"
                name="country"
                :required="true"
                ref="selectedCountrySelect"
                :options="countriesList">
              </vuestic-simple-select> -->
               <!-- <button v-on:click="locationGetter()" class="btn btn-info">Get Location On Map</button> -->
            </div>
            <div slot="page3" class="form-wizard-tab-content">
              <h4>Pricing</h4>
              <p>
                Enter Your Price You want To quote For Your Item.
              </p>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('price'), 'valid': isFormFieldValid('price')}">
                <div class="input-group">
                  <input
                    type="number"
                    name="price"
                    v-model="price"
                    v-validate="'required'"
                    required="required"/>
                  <i
                    class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">Price for a day (₹)</label><i class="bar"></i>
                  <small v-show="errors.has('name')" class="help text-danger">{{
                    errors.first('name') }}
                  </small>
                  <br>
                </div>
              </div>
            </div>
            <div slot="page4"
                 class="form-wizard-tab-content wizard-completed-tab">
              <h4>Contact Details</h4>
              <p>
              </p>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('contact'), 'valid': isFormFieldValid('contact')}">
                <div class="input-group">
                  <input
                    type="number"
                    name="contact"
                    v-model="contact"
                    v-validate="'required'"
                    required="required"/>
                  <i
                    class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label">Contact Number</label><i class="bar"></i>
                  <small v-show="errors.has('name')" class="help text-danger">{{
                    errors.first('name') }}
                  </small>
                  <br>
                </div>
              </div>
            </div>
            <div slot="page5"
                 class="form-wizard-tab-content wizard-completed-tab">
              <h4>Confirm</h4>
              <p>
              </p>
            </div>
            <div slot="wizardCompleted"
                 class="form-wizard-tab-content wizard-completed-tab">
              <h4>Listing Completed     !</h4>
              <button class="btn btn-secondary btn-micro" ><a href="./home" style="tetx-decoration:none; " id="homeRouteBtn"> Continue Surfing </a></button>
              <p>
              </p>
            </div>
          </vuestic-wizard>
        </div>
      </vuestic-widget>
      <!-- <vuestic-widget ref="locationMaps" v-if="hiddenMaps == false" class="widget-viewport-height location-map" headerText="Location On Map">
        <leaflet-map></leaflet-map> -->
      </vuestic-widget>
    </main>
    <span slot="footer"></span>
  </vuestic-layout>
</template>

<script>

  import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
  import AppNavbar from './admin/app-navbar/AppNavbar'
  import AppSidebar from './admin/app-sidebar/AppSidebar'
  import Layout from 'vuestic-theme/vuestic-directives/Layout'
  import {mapGetters} from 'vuex'
  import CountriesList from 'data/CountriesList'
  import LeafletMap from './maps/leaflet-maps/LeafletMap.vue'


  export default {

    name: 'layout',
    props: {
      wizardType: {
        default: 'rich'
      },
    },

    components: {
      VuesticLayout,
      AppNavbar,
      AppSidebar,
      LeafletMap
    },
    directives: {
      layout: Layout,
    },

    data () {
      return {
        opened: true,
        hiddenMaps: true,
        countryList: '',
        steps: [
          {
            label: 'Step 1. Item Details',
            slot: 'page1',
            onNext: () => {
              this.validateFormField('name')
            },
            isValid: () => {
              return this.isFormFieldValid('name')
            }
          },
          {
            label: 'Step 2. Location Details',
            slot: 'page2',
            onNext: () => {
              this.validateFormField('address')
            },
            isValid: () => {
              return this.isFormFieldValid('address')
            }
          },
          {
            label: 'Step 3. Pricing',
            slot: 'page3',
            onNext: () => {
              this.validateFormField('price')
            },
            isValid: () => {
              return this.isFormFieldValid('price')
            }
          },
          {
            label: 'Step 4. Contact Details',
            slot: 'page4',
            onNext: () => {
              this.validateFormField('contact')
            },
            isValid: () => {
              return this.isFormFieldValid('contact')
            }
          },
          {
            label: 'Step 5. Confirm',
            slot: 'page5'
          }
        ],
        selectedCountry: '',
        name: '',
        countriesList: CountriesList
      }
    },
    created: {
    },
    methods: {
      toggleSidebar (opened) {
        this.opened = opened
      },
      isFormFieldValid (field) {
        let isValid = false
        if (this.formFields[field]) {
          isValid = this.formFields[field].validated && this.formFields[field].valid
        }
        return isValid
      },
      validateFormField (fieldName) {
        this.$validator.validate(fieldName, this[fieldName])
      },
    /*  locationGetter () {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("Geolocation is not supported by this browser.")
        }
      }, */

    },
    computed: {
      ...mapGetters([
        'isLoading'
      ])
    }
  }
</script>

<style scoped>
 .control-label{
    font-size:1.1rem;
    margin-bottom:2vh;
 };
 .control-label :focus{
    font-size:0.8rem;
    margin-bottom:2vh;
 };
 .wizard-completed-tab {
   @include media-breakpoint-up(md) {
     margin-top: -$tab-content-pt;
   }
 }

 #homeRouteBtn {
  color: #05386b;
  text-decoration: none;
 }

#homeRouteBtn :hover{
  color: #ffffff;
}

</style>
