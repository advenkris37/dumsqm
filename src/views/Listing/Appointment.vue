<template>
    <div>
        <h5 class="font-weight-bolder">E-Appointment</h5>

        <div class="row">
            <div class="col-md-4 mt-2">
                <b-button id="show-btn" @click="$bvModal.show('bv-modal-example')" size="sm">Get Link</b-button>
            </div>
            <div class="col-md-8 mt-2 text-right">
                <b-button variant="outline-secondary" size="sm" class="mr-2">Disable</b-button>
                <b-button variant="danger" size="sm" class="mr-2">Update E-Appointment Page</b-button>
                <b-button variant="danger" size="sm">Widget</b-button>
            </div> 
        </div>

        <div class="row my-4">
                <div class="col-lg-3 mt-2">
                    <div class="card ket" role="button" :to="'/dashboard'">
                        <div class="card-body">
                            <h6 class="card-title mb-1 font-weight-bolder">Total Click URL</h6>
                            <h5 class="card-text text-right font-weight-bold text-danger">350.000</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h6 class="card-title mb-1 font-weight-bolder">Total Click Widget URL</h6>
                            <h5 class="card-text text-right font-weight-bold text-danger">350.000</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h6 class="card-title mb-1 font-weight-bolder">Total Available Agents Now</h6>
                            <h5 class="card-text text-right font-weight-bold text-danger">350.000</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h6 class="card-title mb-1 font-weight-bolder">Total On Call Now</h6>
                            <!-- <div class="text-muted small">Pending: 0</div> -->
                            <!-- <p >Pending: 0</p> -->
                            <h5 class="card-text text-right font-weight-bold text-danger">350.000</h5>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 mt-2">
                    <div class="card ket">
                        <div class="card-body">
                            <h6 class="card-title mb-1 font-weight-bolder">Total Agent</h6>
                            <div class="text-muted small">Anda dapat mengatur fitur e-appointment disini</div>
                            <h5 class="card-text text-right font-weight-bold text-danger">350.000</h5>
                        </div>
                    </div>
                </div>
            </div>

        <b-modal id="bv-modal-example" hide-footer>
            <template #modal-title>
                Link Appointment
            </template>

            
            <!-- <div class="d-block text-center">
                <h3>Hello From This Modal!</h3>
            </div>
                <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button> -->
        </b-modal>
    </div>
</template>

<script>
export default {
    
}
</script>