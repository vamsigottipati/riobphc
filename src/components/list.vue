<template>
  <div class="totalBody">

    <navSide></navSide>

    <main v-if="!turnOffDisplay">
      <vuestic-widget   headerText="List Your Item" style="position: absolute;top: 20vh;min-height: 80vh;width: 90vw;left: 5vw;">
        <div style="display:flex;">
          <vuestic-wizard
            :steps="steps"
            wizard-layout="vertical"
            :wizard-type="wizardType"
            style="min-height: 80vh;">
            <div slot="page1" class="form-wizard-tab-content">
              <h2 style="">Give Your Item A Name ...</h2>
              <div class="form-group with-icon-right"
                   :class="{'has-error': errors.has('name'), 'valid': isFormFieldValid('name')}" style="margin-top: 20px;">
                <div class="input-group">
                  <input
                    type="text"
                    name="name"
                    v-model="name"
                    v-validate="'required'"
                    required="required"
                    style="width: auto;padding: 20px;"/>
                  <i
                    class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                  <i class="fa fa-check valid-icon icon-right input-icon"></i>
                  <label class="control-label" style="">Something Catchy ...</label><i class="bar"></i>
                  <small v-show="errors.has('name')" class="help text-danger">{{
                    errors.first('name') }}
                  </small>
                  <br>
                  <h4 style="margin-top: 5vh;width: 30vw;text-align: center;">Upload </h4>
                  <p>Add a minimum of three pics </p>
                  <div class="well" style="text-align: center;">
                    <label class="file" style="text-align: left;">
                      <input type="file" name="uploadContent" ref="uploadContent" id="uploadContent" v-on:change="signalChange">
                      <span class="file-custom" ref="uploadContentValue">Chose File</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div slot="page2" class="form-wizard-tab-content">
              <h4 style="margin-top: -10vh;">Enter Pickup Location Details</h4>
              <p style="margin-bottom: 10vh;">Zebras communicate with facial expressions and sounds. They make loud
                braying or barking sounds and
                soft snorting sounds.</p>

                <div class="form-group with-icon-right"
                     :class="{'has-error': errors.has('address'), 'valid': isFormFieldValid('address')}">
                  <div class="input-group">
                    <input
                      type="text"
                      name="address"
                      style="width: 30vw;padding: 20px;"
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
                  <br>
                </div>
                <div class="form-group with-icon-right"
                     :class="{'has-error': errors.has('city'), 'valid': isFormFieldValid('city')}">
                  <div class="input-group">
                    <input
                      type="text"
                      name="city"
                      style="width: 30vw;padding: 20px;"
                      v-model="city"
                      v-validate="'required'"
                      required="required"/>
                    <i
                      class="fa fa-exclamation-triangle error-icon icon-right input-icon"></i>
                    <i class="fa fa-check valid-icon icon-right input-icon"></i>
                    <label class="control-label">City </label><i class="bar"></i>
                    <small v-show="errors.has('name')" class="help text-danger">{{
                      errors.first('name') }}
                    </small>
                    <br>
                  </div>
                  <br>
                </div>
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
                    style="width: 20vw;padding: 20px;"
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
                    style="width: 20vw;padding: 20px;"
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
              <h2>Please Wait while Listing is being processed</h2>
              <!-- <button class="btn btn-primary" ><a href="./home" style="text-decoration:none;color:white;" id="homeRouteBtn"> Continue Surfing </a></button> -->
              <p>
              </p>
            </div>
          </vuestic-wizard>
        </div>
      </vuestic-widget>
    </main>
    <main v-if="turnOffDisplay">
      <vuestic-widget style="position: absolute;top: 30%;height: 60%;width: 80%;left:10%;">
        <h2 style="position: absolute;top: 25%;height: 30%;left: 10%;width: 80%;text-align: center;font-size: 2.2rem;font-family:'Montserrat'">Congratulations !! </h2> <br> <p style="position: absolute;top: 35%;height: 30%;left: 10%;font-weight: 300;width: 80%;text-align: center;font-size: 1.7rem;font-family:'Montserrat'"> Your Listing is completed</p>
        <button style="position: absolute;bottom: 20%;height: 15%;border-radius:50px;left: 30%;width: 40%;text-align: center;" class="btn btn-primary" @click="$router.push('home')">Continue Surfing</button>
      </vuestic-widget> 
    </main>
    <span slot="footer"></span>
  </div>
</template>

<script>

  import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
  import Layout from 'vuestic-theme/vuestic-directives/Layout'
  import * as firebase from 'firebase'
  import navSide from './nav-side'

  export default {

    name: 'layout',
    props: {
      wizardType: {
        default: 'simple'
      },
    },

    components: {
      VuesticLayout,
      navSide
    },
    directives: {
      layout: Layout,
    },

    data () {
      return {
        opened: true,
        hiddenMaps: true,
        countryList: '',
        name: '',
        address: '',
        city: '',
        price: '',
        curUserName: '',
        selectedCountry: '',
        turnOffDisplay: false,
        photo: [],
        contact: '',
        lat: '',
        long: '',
        steps: [
          {
            label: 'Step 1',
            slot: 'page1',
            onNext: () => {
              this.validateFormField('name')
            },
            isValid: () => {
              if (this.$refs.uploadContent.files[0]) {
                return this.isFormFieldValid('name')
              } else {
                alert('Add a Picture to continue with listing')
              }
            }
          },
          {
            label: 'Step 2',
            slot: 'page2',
            onNext: () => {
              this.validateFormField('address')
              this.validateFormField('city')
            },
            isValid: () => {
              return this.isFormFieldValid('address') && this.isFormFieldValid('city')
            }
          },
          {
            label: 'Step 3',
            slot: 'page3',
            onNext: () => {
              this.validateFormField('price')
            },
            isValid: () => {
              return this.isFormFieldValid('price')
            }
          },
          {
            label: 'Step 4',
            slot: 'page4',
            onNext: () => {
              this.validateFormField('contact')
            },
            isValid: () => {
              return this.isFormFieldValid('contact')
            }
          },
          {
            label: 'Step 5',
            slot: 'page5',
            onNext: () => {
              var itemName = this.name
              var uploadContent = this.$refs.uploadContent.files[0]
              console.log(this.$refs.uploadContent.files[0])
              var d = new Date()
              var t = d.getTime()
              var itemImg = ''
              var randomString = ''
              var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
              for (let i = 0; i < 5; i++) {
                randomString += possible.charAt(Math.floor(Math.random() * possible.length))
              }
              randomString = randomString + t
              var category = 'Product1' // remove hard coded value and get it using user input
              var itemOwner = firebase.auth().currentUser.displayName
              var itemOwnerId = firebase.auth().currentUser.uid
              var lat = sessionStorage.getItem('lat')
              var long = sessionStorage.getItem('long')
              var location = this.city
              var price = this.price
              var address = this.address
              console.log(randomString)
              var itemId = randomString
              /* storage */
              if (uploadContent) {}
              firebase.storage().ref('listemItemPhotos/' + randomString + uploadContent.name).put(uploadContent).then(
                response => {
                  console.log(response.ref.getDownloadURL())
                  response.ref.getDownloadURL().then(
                    resp => {
                      itemImg = resp
                      firebase.database().ref('listedItems/' + itemId).set({
                        itemName: itemName,
                        itemId: itemId,
                        itemImg: itemImg,
                        itemOwner: itemOwner,
                        itemOwnerId: itemOwnerId,
                        lat: lat,
                        long: long,
                        location: location,
                        city: location,
                        address: address,
                        price: price,
                        category: category
                      }).then(
                        resp => {
                          this.turnOffDisplay = true
                        }
                      )
                      firebase.database().ref('users/' + itemOwnerId + '/listedItems/' + itemId).set({
                        itemName: itemName,
                        itemId: itemId,
                        itemImg: itemImg,
                        itemOwner: itemOwner,
                        itemOwnerId: itemOwnerId,
                        lat: lat,
                        long: long,
                        location: location,
                        city: location,
                        address: address,
                        price: price,
                        category: category
                      })
                    }
                  )
                }
              ).catch(
                err => {
                  console.log(err)
                }
              )
            }
          }
        ],
      }
    },
    created: {
    },
    mounted () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        alert('Please turn on the location so that we can give you better services')
      }
      function showPosition (position) {
        sessionStorage.setItem('lat', position.coords.latitude)
        sessionStorage.setItem('long', position.coords.longitude)
      }
    },
    methods: {
      signalChange () {
        this.$refs.uploadContentValue.innerText = this.$refs.uploadContent.files[0].name
      },
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
 /*  Navbar styles  */


</style>
