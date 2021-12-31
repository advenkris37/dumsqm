<template>
    <div class="container-login100">
        <div class="wrap-login100 justify-content-center">
            <div class="text-center">
                <b-img :src="LOGO" style="height: 80px" />
                <b-card
                    title="Login Developer"
                    tag="article"
                    style="width: 25rem"
                    class="my-3"
                > 

                <b-input-group class="mb-3">
                    <b-input-group-prepend>
                        <b-input-group-text>
                            <b-icon icon="envelope-fill" aria-hidden="true"></b-icon>
                        </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                        type="email"
                        class="form-control"
                        name="email"
                        placeholder="Email"
                        autocomplete= off
                        />
                </b-input-group>
                <b-input-group class="mb-3">
                    <b-input-group-prepend>
                        <b-input-group-text>
                            <b-icon icon="shield-lock-fill" aria-hidden="true"></b-icon>
                        </b-input-group-text>
                    </b-input-group-prepend>
                    <b-form-input
                        type="password"
                        class="form-control"
                        name="password"
                        placeholder="Password"
                        autocomplete="Current Password"
                    />
                </b-input-group>
                <div>   
                    <b-button href="#" variant="danger" :to="'/dashboard'">Login</b-button>
                </div>
                <!-- <a href="" class="text-danger">Lupa Password?</a> -->
                <p class="text-dec my-2"><span class="text-danger">*</span>Jika login anda bermasalah, hubungi Admin</p>

                <template #footer>
                   <u><a href="" class="text-muted">Lupa Password?</a> </u> 
                </template>
                </b-card>
            </div>
        </div>
  </div>
</template>

<script>
import LOGO from "../assets/sqm-logo.png"
export default {
    data() {
        return {
            LOGO: LOGO
        }
    }
}
</script>

<style scoped>
    .text-dec {
        font-size: 11px;
        text-align: left;
    }

    .card {
        border: 1px solid rgba(0,0,0,.125) !important;
    }
</style>