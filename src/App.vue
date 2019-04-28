<template>
    <div id="app">
        <nav class="navbar fixed-top navbar-dark bg-dark navbar-expand-sm">

            <router-link class="navbar-brand" to="/">บัญชีรายชื่อ 62</router-link>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item text-center">
                        <router-link class="nav-link" to="/1">
                            ขั้น 1<br />คำนวณจำนวนเสียงต่อ 1 ส.ส. พึงมี
                        </router-link>
                    </li>
                    <li class="nav-item text-center">
                        <router-link class="nav-link" to="/2">
                            ขั้น 2<br />คำนวณจำนวน ส.ส. พึงมีเบื้องต้น
                        </router-link>
                    </li>
                    <li class="nav-item text-center">
                        <router-link class="nav-link" to="/3">
                            ขั้น 3<br />คำนวณจำนวน ส.ส. บัญชีรายชื่อเบื้องต้น
                        </router-link>
                    </li>
                    <li class="nav-item text-center">
                        <router-link class="nav-link" to="/4">
                            ขั้น 4<br />เกลี่ยให้ได้ ส.ส. บัญชีรายชื่อรวม 50 คน
                        </router-link>
                    </li>
                    <li class="nav-item dropdown text-center">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ขั้น 5<br />จัดสรร ส.ส. บัญชีรายชื่อ<br/>ตามจำนวนเต็มและเศษ
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <router-link class="nav-link" to="/5-1">
                                แบบที่ 1
                            </router-link>
                            <router-link class="nav-link" to="/5-2">
                                แบบที่ 2
                            </router-link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style lang="scss">
    @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

    body {
        background-color: #2c2f3c;
        font-family: 'Kanit', sans-serif;
        color: #ffffff;
        /*min-height: 75rem;*/
        padding-top: 7.5rem;
    }
    .hide {
        opacity: 0;
    }
    .number {
        font-family: 'Roboto Mono', monospace;
    }
</style>
