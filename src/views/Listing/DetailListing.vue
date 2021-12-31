<template>
    <div>
        <b-card  class="py-3 ">
            <div class="col-md-12 flex">
                <h4 class="head mb-0">Apartment XX</h4>
                <small>Developer</small>
                <br/>
                <small><b-icon icon="geo-alt-fill" aria-hidden="true"></b-icon> Pancoran, South Jakarta City, Jakarta, Indonesia</small>
                <br class="mt-2"/>
                <small>
                    <a class="text-danger font-weight-bold text-underline" href="/developer/my-listing/live-stock/723">Cek Live Stock</a>
                </small>
                <div class="mt-2">
                    <div class="d-flex">
                        <div class="">
                            <p class="mb-0">
                                <small class="kom">Komisi Agen</small>
                            </p>
                            <h6 class="mb-0 d-inline-block border border-danger p-2 text-danger text-center font-weight-bold" style="width: 66px;">1%</h6>
                        </div>
                        <div class="ml-3">
                            <p class="mb-0">
                                <small class="kom">Referral Fee</small>
                            </p>
                            <h6 class="mb-0 d-inline-block border border-danger p-2 text-danger text-center font-weight-bold" style="width: 66px;">1%</h6>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="col-12 my-4">
                <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image"></b-img>
            </div> -->

            <div class="col-12 my-3">
                <b-carousel
                    id="carousel-no-animation"
                    style="text-shadow: 0px 0px 2px #000"
                    no-animation
                    indicators
                    img-width="1024"
                    img-height="480"
                >
                    <b-carousel-slide
                    caption="First slide"
                    img-src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Second Slide"
                    img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Third Slide"
                    img-src="https://picsum.photos/1024/480/?image=22"
                    ></b-carousel-slide>
                    <b-carousel-slide
                    caption="Fourth Slide"
                    img-src="https://picsum.photos/1024/480/?image=23"
                    ></b-carousel-slide>
                </b-carousel>
            </div>

            <!-- <div class="row ml-0">
                <div class="col-sm-7">
                    <h5 class="font-weight-bold">Deskripsi</h5>
                    <small>Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan </small>
                </div>
                <div class="col-sm-4 mr-0">
                    <b-card>
                        <h6>Detail</h6>
                    </b-card>
                </div>
            </div> -->
            <!-- <div class=""> -->
                <b-row>
                    <b-col md="8" class="my-2">
                        <h5 class="text-dark">Deskripsi</h5>
                        <small>Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan Rumah impian di daerah Jakarta Selatan </small>
                    </b-col>

                    <b-col md="3" offset-md="1" class="my-2">
                        <b-card style="position:sticky !important;">
                            <h5>Detail</h5>

                            <div class="mt-3">
                                <div class="text-dark"><b-icon icon="file-earmark-medical" aria-hidden="true"></b-icon> Sertifikat</div>
                                <small class="font-weight-bold">Hak Milik</small>
                            </div>
                            <div>
                                <div class="text-dark"><b-icon icon="building" aria-hidden="true"></b-icon> Jenis Properti</div>
                                <small class="font-weight-bold">Rumah</small>
                            </div>
                            <div>
                                <div class="text-dark"><b-icon icon="calendar2-check" aria-hidden="true"></b-icon> Tahun Selesai</div>
                                <small class="font-weight-bold">2021</small>
                            </div>
                        </b-card>
                    </b-col>
                </b-row>
            <!-- </div> -->
            <hr/>

            <div class="my-2">
                <div>
                    <h5 class="text-dark ml-3">Tipe A</h5>
                    <b-row>
                        <b-col md="4" class="mb-3">
                            <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image"></b-img>
                        </b-col>
                        <b-col md="8" offset-md="">
                            <dl class="row mb-2">
                                <dt class="col-5">Harga Mulai</dt>
                                <dd class="col-7">Rp 1.000.000.000 (tidak termasuk PPN)</dd>
                                <dt class="col-5">Luas Tanah</dt>
                                <dd class="col-7">100 m2</dd>
                                <dt class="col-5">Luas Bangunan</dt>
                                <dd class="col-7">80 m2</dd>
                                <dt class="col-5">Jumlah Lantai</dt><dd class="col-7">2</dd>
                                <dt class="col-5">Cicilan Mulai</dt><dd class="col-7">Rp 4.000.000</dd>
                                <dt class="col-5">DP</dt>
                                <dd class="col-7">10%</dd>
                                <dt class="col-5">Booking Fee</dt>
                                <dd class="col-7">Rp 10.000.000</dd>
                                <dt class="col-5">Promo &amp; Informasi Lainnya</dt>
                                <dd class="col-7">Free Ac</dd>
                                </dl>
                                <!-- <ul class="pl-3">
                                    <li>
                                        <i class="fa fa-bed" aria-hidden="true"></i>
                                    </li>
                                     <li>
                                        <i class="fa fa-bed" aria-hidden="true"></i>
                                    </li>
                                </ul> -->
                                <div class="d-flex pl-3">
                                    <div>
                                        <i class="fa fa-bed" aria-hidden="true"></i>
                                        <span class="ml-1">9</span>
                                    </div>
                                    <div class="ml-3">
                                        <i class="fa fa-bath" aria-hidden="true"></i>
                                        <span class="ml-1">9</span>
                                    </div>
                                    <div class="ml-3">
                                        <i class="fa fa-car" aria-hidden="true"></i>
                                        <span class="ml-1">9</span>
                                    </div>
                                </div>
                        </b-col>

                    </b-row>
                </div>
            </div>

            <hr/>

            <div class="my-2 card-body">
                <h5 class="text-dark">Fasilitas</h5>
            </div>

            <hr/>
            
            <div class="card-body">
                <h5 class="text-dark">Lokasi</h5>
                <div class="mt-2">
                    <small class="text-dark">Provinsi</small>
                    <h6 class="">Hak Milik</h6>
                </div>
                <div class="mt-2">
                    <small class="text-dark">Kota/Kabupaten</small>
                    <h6 class="">Kabupaten sss</h6>
                </div>
                <div class="mt-2">
                    <small class="text-dark">Kecamatan</small>
                    <h6 class="">Cikupa</h6>
                </div>
                <div class="mt-2">
                    <small class="text-dark">Alamat</small>
                    <h6 class="">Cikupa, Tangerang Regency, Banten, Indonesia</h6>
                </div>

                <h1>Disini Maps</h1>
            </div>
        </b-card>
    </div>
</template>

<style scoped>
.head {
    color: #212529;
}

.kom {
    font-size: 11px;
}

.fa {
    font-size: 20px;
}
/* .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col, .col-auto, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm, .col-sm-auto, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md, .col-md-auto, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg, .col-lg-auto, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl, .col-xl-auto {
    padding-left: 0px;
    padding-right: 0px;
} */

.row {
    margin-left: 0px;
    margin-right: 0px;
}
</style>