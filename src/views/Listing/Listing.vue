<template>
    <div>
        <h5 class="font-weight-bolder">My Listing</h5>

        <div class="my-4 row">
            <div class="mb-3 col-md-3">

            <b-input-group class="">
            <b-input-group-prepend>
                <b-input-group-text>
                    <b-icon icon="search" aria-hidden="true"></b-icon>
                </b-input-group-text>
                </b-input-group-prepend>
                <b-form-input
                    type="email"
                    class="form-control"
                    name="email"
                    placeholder="Search"
                    autocomplete= off
                    />
            </b-input-group>
            </div>

            <div class="mb-3 col-md-5">
                 <b-button-group>
                <b-button
                    v-for="(btn, idx) in buttons"
                    :key="idx"
                    :pressed.sync="btn.state"
                    variant="light"
                >
                    {{ btn.caption }}
                </b-button>
                </b-button-group>
            </div>

            <div class="col-6 mb-2">
                <b-button block variant="danger" :to="'listing/add-listing'"><span><b-icon icon="plus" aria-hidden="true"></b-icon></span> Proyek Baru</b-button>
            </div>

            <div class="col-6 mb-2">
                <b-button block variant="outline-danger"><span><b-icon icon="person-badge" aria-hidden="true"></b-icon></span> Auto Assign</b-button>
            </div>
        </div>

        <div class="my-4">
            <div class="card">
                <!-- <div class="leads-status-card bg-success px-3 py-1"><p class="mb-0 text-white font-weight-bold">Baru</p><span class="text-white"><small>13-12-2021</small></span></div> -->
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                             <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image" class="my-3"></b-img>
                        </div>
                        <div class="col-md-9">
                            <p class="text-secondary temp"><b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon> Pancoran Selatan, Jakarta City, Indonesia</p>
                            <h5 class="mt-2 font-weight-bold text-dark">Apartemen 33</h5>
                            <h5 class="card-subtitle mb-2 text-danger">2 M<small class="text-muted" style="font-size: 13px;"> (Tanpa PPN)</small></h5>
                            <div class="row mt-3"><div class="col-md-6"><span class="border border-secondary p-1 px-3 ">Apartemen</span><span class="border border-secondary p-1 px-3 ml-2">2021</span></div></div>
                            <p class="border border-danger d-inline-block p-2 mt-2 text-danger font-weight-normal text-uppercase mr-2">Komisi Agen SQM: 1%</p>
                            <p class="border border-danger d-inline-block p-2 mt-2 text-danger font-weight-normal text-uppercase">Referral Fee Member: 1%</p>
                        </div>
                        <!-- <div class="col-md-2">

                        </div> -->
                        
                    </div>
                    <div class="d-flex align-items-center justify-content-between row">
                        <div class="col-xs-12 col-md-6 mb-2">
                            <span class="text-muted mr-2" data-tip="Tanggal pembuatan">
                                <b-icon icon="calendar2-week" aria-hidden="true" class="mr-2"></b-icon>
                                <small>11-06-2021</small>
                            </span>
                            <span class="text-muted"><i class="typcn icon typcn-pin-outline"></i><small data-tip="Tanggal publish">11-06-2021</small></span>
                            <br>
                            <span class="badge badge-success text-white text-uppercase mt-1" style="font-size: 14px;">AKTIF</span>
                            <span class="ml-2">
                                <!-- <b-icon icon="eye-fill" aria-hidden="true"></b-icon> -->
                                <router-link
                                :to="'listing/detail-listing'"
                                >
                                <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                                </router-link>
                            </span>
                            <span class="ml-2">
                                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            </span>
                        </div>
                        
                        <div class="d-flex mt-3 col-md-6" style="justify-content: right;">
                            <div class="">
                                <div class="mb-2 mr-2">
                                    <!-- <div class="text-right"><button size="sm" class="btn btn-block btn-xs btn-outline-danger"><i class="typcn icon typcn-video-outline"></i> E-Appointment</button></div> -->
                                    <div class="text-right"><b-button variant="outline-danger" size="sm" :to="'listing/appointment'"><b-icon icon="camera-video" aria-hidden="true" block></b-icon> E-Appointment</b-button></div>
                                </div>
                            </div>
                            <div class="">
                                <div class="mb-2 mr-2">
                                    <!-- <div class="text-right"><button class="btn btn-block btn-xs btn-outline-success"><i class="typcn icon typcn-stopwatch"></i> Live Stock</button></div> -->
                                    <div class="text-right"><b-button variant="outline-success" size="sm"><b-icon icon="easel-fill" aria-hidden="true"></b-icon> Live Stock</b-button></div>
                                </div>
                            </div>
                            <div class="">
                                <div class="mb-2 mr-2">
                                    <!-- <div class="text-right"><a class="btn btn-primary btn-block btn-xs" href="/developer/my-listing/edit/723"><i class="typcn icon typcn-edit"></i> Update</a></div> -->
                                    <div class="text-right"><b-button variant="danger" size="sm"><b-icon icon="pencil-square" aria-hidden="true"></b-icon> Update</b-button></div>
                                </div>
                            </div>
                            
                           
                            <!-- <div>
                                <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                            </div> -->
                            <!-- <div>
                                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="my-4">
            <div class="card">
                <!-- <div class="leads-status-card bg-success px-3 py-1"><p class="mb-0 text-white font-weight-bold">Baru</p><span class="text-white"><small>13-12-2021</small></span></div> -->
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                             <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image" class="my-3"></b-img>
                        </div>
                        <div class="col-md-9">
                            <p class="text-secondary temp"><b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon> Pancoran Selatan, Jakarta City, Indonesia</p>
                            <h5 class="mt-2 font-weight-bold text-dark">Apartemen 33</h5>
                            <h5 class="card-subtitle mb-2 text-danger">2 M<small class="text-muted" style="font-size: 13px;"> (Tanpa PPN)</small></h5>
                            <div class="row mt-3"><div class="col-md-6"><span class="border border-secondary p-1 px-3 ">Apartemen</span><span class="border border-secondary p-1 px-3 ml-2">2021</span></div></div>
                            <p class="border border-danger d-inline-block p-2 mt-2 text-danger font-weight-normal text-uppercase mr-2">Komisi Agen SQM: 1%</p>
                            <p class="border border-danger d-inline-block p-2 mt-2 text-danger font-weight-normal text-uppercase">Referral Fee Member: 1%</p>
                        </div>
                        <!-- <div class="col-md-2">

                        </div> -->
                        
                    </div>
                    <div class="d-flex align-items-center justify-content-between row">
                        <div class="col-xs-12 col-md-6 mb-2">
                            <span class="text-muted mr-2" data-tip="Tanggal pembuatan">
                                <b-icon icon="calendar2-week" aria-hidden="true" class="mr-2"></b-icon>
                                <small>11-06-2021</small>
                            </span>
                            <span class="text-muted"><i class="typcn icon typcn-pin-outline"></i><small data-tip="Tanggal publish">11-06-2021</small></span>
                            <br>
                            <span class="badge badge-secondary text-white text-uppercase mt-1" style="font-size: 14px;">Draft</span>
                            <span class="ml-2">
                                <!-- <b-icon icon="eye-fill" aria-hidden="true"></b-icon> -->
                                <router-link
                                :to="'listing/detail-listing'"
                                >
                                <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                                </router-link>
                            </span>
                            <span class="ml-2">
                                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            </span>
                        </div>
                        
                        <div class="d-flex mt-3 col-md-6" style="justify-content: right;">
                            <!-- <div class="">
                                <div class="mb-2 mr-2">
                                    <div class="text-right"><b-button variant="outline-danger" size="sm"><b-icon icon="camera-video" aria-hidden="true" block></b-icon> E-Appointment</b-button></div>
                                </div>
                            </div> -->
                            <!-- <div class="">
                                <div class="mb-2 mr-2">
                                    <div class="text-right"><b-button variant="outline-success" size="sm"><b-icon icon="easel-fill" aria-hidden="true"></b-icon> Live Stock</b-button></div>
                                </div>
                            </div> -->
                            <div class="">
                                <div class="mb-2 mr-2">
                                    <!-- <div class="text-right"><a class="btn btn-primary btn-block btn-xs" href="/developer/my-listing/edit/723"><i class="typcn icon typcn-edit"></i> Update</a></div> -->
                                    <div class="text-right"><b-button variant="danger" size="sm"><b-icon icon="pencil-square" aria-hidden="true"></b-icon> Update</b-button></div>
                                </div>
                            </div>
                            
                           
                            <!-- <div>
                                <b-icon icon="eye-fill" aria-hidden="true"></b-icon>
                            </div> -->
                            <!-- <div>
                                <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
export default {
    data() {
        return {
            buttons: [
          { caption: 'Semua', state: true },
          { caption: 'Aktif', state: false },
          { caption: 'Menunggu', state: true },
          { caption: 'Ditolak', state: false },
          { caption: 'Draft', state: false }
        ]
        }
    }
}
</script>