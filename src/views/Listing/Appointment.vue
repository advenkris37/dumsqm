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