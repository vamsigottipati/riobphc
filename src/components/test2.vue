<template>
<div class="msgPageBody">
    <navBar />
    <div class="chatSection">
        <div class="sidebar">
            <div class="serachBar"></div>
            <div class="friendList">
                <div class="sFriend">
                    <p class="sFriendName"></p>
                    <p class="sFriendText"></p>
                </div>
            </div>
        </div>
        <div class="mainSection">
            <div class="chatHeader elevation-5"></div>
            <div class="chatBody">
                <p class="self"></p>
                <p class="other"></p>
            </div>
            <div class="chatInput">
                <i class="material-icons chatInputIcon">insert_emoticon</i>
                <input type="text" class="chatInputText" />
                <i class="material-icons chatInputIcon">send</i>
                <i class="material-icons chatInputIcon">attach_file</i>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import navBar from './navBar'

export default {
    name: 'messages',
    components: {
        navBar
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style scoped>
    .chatSection {
        position: absolute;
        top: 8%;
        width: 100vw;
        height: 92vh;
        left: 0px;
        background:#ddd;
    }
    .sidebar {
        position: fixed;
        width: 30vw;
        background: orange;
        height: 92vh;
        overflow: auto;
    }
    .mainSection {
        position: fixed;
        overflow: hidden;
        width: 70vw;
        height: 92vh;
        right: 0px;
        top: 8vh;
        background: #ddd;
    }
    .chatHeader {
        position: relative;
        height: 8vh;
        background: lightgray;
        width: 100%;
    }
    .chatBody {
        position: relative;
        height: 76vh;
        background: #dddddd;
        width: 100%;
        overflow: auto;
    }
    .chatInput {
        position: relative;
        height: 8vh;
        background: lightgray;
        width: 100%;
        z-index: 9;
        display: flex;
    }
    .chatInputIcon {
        flex: 1;
        text-align: center;
        transform: translateY(2.5vh);
        color: #2c2c2c;

    }
    .chatInputIcon:nth-of-type(3) {
        text-align: left;
    }
    .chatInputText {
        all: unset;
        height: 5vh;
        background: #dddddd;
        flex: 8;
        margin-top: 1.5vh;
        border-radius: 100px;
        text-align: center;
    }
</style>


