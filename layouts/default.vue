<template>
  <div class='main-container'>
    
    <nav class="header">
      
      <div class="header-inner">
        
        <nuxt-link class="logo" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 1517.5 473.6" xml:space="preserve">
            <defs/>
            <path d="M200.2 181.4c-19 13.1-45-4-39.3-26.3 3.1-12 14.7-22.4 43.8-25 77.6-6.9 34.7-124.8-58.2-98.4C53.6 58-72.6 328.4 71.6 278.5s148.4-126.2 183-87.4c34.7 38.8 93.3 197.7-48.5 127.6C122 277.1 1.4 272.9 0 385.3c-1.4 112.3 271.1 93.7 344.8 33.3 82.3-67.5 43.4-166.6-14.8-198-51-27.5-97.5-100.5-1.8-92.2s162.4-5.5 125-74.9c-37.4-69.3-107-62.4-150-19.4s-18.5 66.4-70.3 116.3c-6.4 6.2-14.8 18.6-32.7 31z" class="st0"/>
            <path d="M762.7 226.8c-39.4-164.9-83-186.6-118-193.2-15.7-3-32-1.8-47.4 2.6C553.1 49 456.8 89.3 414.6 204.7c-55.7 152.1 79.7 245.8 138.1 258.2 96.3 20.3 257.7-36.2 210-236.1zM601.6 444.3s-97.1 18.3-119.2-70.5C460.2 285 614.1 213.6 643.2 268.4c29.1 54.7 31.9 163.2-41.6 175.9z" class="st0"/>
            <path d="M825.9 310.4c0 .1-.1.1-.1.2-6.9 13.4-15.7 25.8-26.1 36.8-8.4 8.9-20 21.3-34.4 37.6-30.3 34.2-29 122.2 80.1 70.9s24.4-196.6 8.5-218.8-16.9-32.1-3.2-39.6c15.1-8.3 84.7-3.8 104.8 90.3 10.3 48.3 14.7 119.7 19.4 138.8 8.5 34.4 62.4 41.9 96.6 7.5 65.8-66.3-37-79.8-46.7-175.6-2.9-28.5 14.2-92.5 63.3-126.8 49.1-34.3 55-116.3-24.3-127.6S943.1 2.1 960.1 64c0 0 46.6 86.1 34.1 131.2-8.2 29.4-29.8 73.7-59-1.6C906 118.2 852.5 39.5 796.3 40.3c-56.3.8-76.9 55.8-37.2 113.6s75.5 87.1 76.6 108.2c1.4 22.6-5.3 39.5-9.8 48.3z" class="st0"/>
            <path d="M1246.4 392.5c-1.7 13.9-6.2 27.4-13.8 39.3-13.8 21.5-40 43.4-84.5 17.7-74.1-42.7-29.3-127.5-2.5-176.2s39-142.6 2.4-187.8C1076.1-3.4 1274.7-26 1291 65.8s-41.6 67-72.6 157c-8.4 24.2 14.6 75.9 53.7 29.7 39.1-46.1 42-198.4 132.6-182.1 90.6 16.4 141 97.2 96.1 125.8s-95.5 37.2-117.9-3.7-54.6 7.7-67.6 36.4c-12.7 27.9-11.6 71 23.7 63.8 61.8-12.6 108.9-3.7 131.2 26.1 59.7 79.9 16.2 142.6-56.7 152.9-75.8 10.7-127.6-24.8-72.1-85.8 41.3-45.3-6.6-91.4-50.3-70.6-33.1 15.8-42.2 57.4-44.7 77.2z" class="st0"/>
          </svg>
        </nuxt-link>

        <div class="header__links">
          <nuxt-link class="" to="/info">
            Info
          </nuxt-link>
        </div>

      </div>
      
    </nav>

    <nuxt />

    <div class="footer">
      <div class="footer__links left">
        <div class="footer__link">info@yonk.online</div>
      </div>
      <div class="footer__links right">
        <a class="footer__link" href="https://www.instagram.com/yonk.online/" target="_blank">Instagram</a>
        <a class="footer__link" href="https://twitter.com/yonkonline" target="_blank">Twitter</a>
        <a class="footer__link" href="https://www.youtube.com/channel/UCeVIE2HS9uqD5cS0FrOapzw" target="_blank">Youtube</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async fetch() {

  },
  data: function () {
    return {

    };
  },
};
</script>

<style lang="scss">

$maxwidth: 1700px;
$mp: 24px;
$hl: #ff2a00;

body::-webkit-scrollbar {
  display: none;
}

body {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.main-container,
.header-inner {
  padding: 0 $mp * 3;

  @media only screen and (max-width: 1098px) {
    padding: 0 $mp;
  }
}

.main-container {
  max-width: $maxwidth;
  margin: 0 auto;
  font-family: "MD-System", sans-serif;
  color: black;
  position: relative;
}

.header {
  top: 0;
  left: 0;
  width: 100vw;
  position: fixed;
  z-index: 10000;
  background: white;
}

.header-inner {
  max-width: $maxwidth;
  margin: 0 auto;
  font-family: "MD-System", sans-serif;
  position: relative;
}


.header {
  &__links {
    display: inline-block;
    float: right;
    // border: 1px dashed blue;
    font-size: 18px;
    padding: 30px 0 22px;
  }

  &__link {
    cursor: pointer;
    transition: 0s;
    margin-left: 24px;

    &:hover {
      color: $hl;
    } 
  }
}

.logo {
  top: 0;
  margin-left: -21px;
  padding: 30px 20px 20px;
  display: inline-block;
  z-index: 100;

  svg {
    width: 80px;
  }

  path {
    transition: 0.4s ease;
  }

  &:hover {
    path {
      fill: $hl;
    }
  }
}

.footer {
  background: white;
}

.footer {
  &__links {
    display: inline-block;
    font-size: 18px;
    padding: 30px 0 30px;

    @media only screen and (max-width: 800px) {
      font-size: 15px;
    } 

    &.left {
      .footer__link {
        margin-left: 0;
        &:hover {
          color: black;
          cursor: auto;
        }
      }
    }

    &.right {
      float: right;
    }
  }

  &__link {
    cursor: pointer;
    transition: 0s;
    margin-left: 24px;

    &:hover {
      color: $hl;
    } 

    @media only screen and (max-width: 600px) {
      display: block;
      text-align: left;
      width: 20vw;
    }
  }
}

a:hover {
  color: $hl !important;
}

</style>