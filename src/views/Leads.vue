<template>
    <div>
        <h5 class="font-weight-bolder">Status Leads</h5>

        <div class="row mt-4 mb-2">
            <div class="col-sm-5 mb-3">
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
                    size="sm"
                    />
                </b-input-group>
            </div>
            <div class="col-sm-4 mb-3">
                <b-form-select v-model="selected" :options="options" size="sm"></b-form-select>
            </div>
            <div class="col-sm-3 mb-3">
                 <b-button variant="success" size="sm" v-b-modal.modal-auto-assign>Auto Assign Aktif</b-button>
            </div>
        </div>
        <b-modal id="modal-auto-assign" size="sm" hide-footer title="Auto Assign" >
            <small>Auto Assign merupakan fitur yang memungkinkan agar sistem dapat menentukan In-House Agen dari suatu proyek secara otomatis</small>
        <b-button variant="danger" class="my-3"> Matikan Auto Assign</b-button>
        </b-modal>

        <div class="row mb-4">
            <div class="col-6 mb-3">
                <b-form-select v-model="selected1" :options="options1" size="sm"></b-form-select>
            </div>
            <!-- <div class="col-6 col-sm-12 mb-3">
                <b-form-select v-model="selected1" :options="options" size="sm"></b-form-select>
            </div> -->
        </div>

        <div class="my-5 ">
            <div class="card">
                <div class="leads-status-card bg-danger px-3 py-1"><h6 class="mb-0 text-white">Booking Ditolak</h6><span class="text-white"><small>13-12-2021</small></span></div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                             <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image" class="my-3 d-block m-auto img-fluid pointer"></b-img>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="row my-2">
                                <dt class="col-sm-4">Nama Prospek</dt>
                                <dd class="col-sm-8">Test hanif coba</dd>
                                <dt class="col-sm-4">Nomor telepon</dt>
                                <dd class="col-sm-8">622131923192381</dd>
                                <dt class="col-sm-4">In-house Agen</dt>
                                <dd class="col-sm-8">Bagas Afrizal</dd>
                                <dt class="col-sm-4">Properti</dt>
                                <dd class="col-sm-8"><a target="_blank" href="/developer/my-listing/detail/723">Apartment 2</a></dd>
                                <dt class="col-sm-4">Harga</dt>
                                <dd class="col-sm-8">2.000.000.000</dd>
                                <dt class="col-sm-4">Sumber</dt>
                                <dd class="col-sm-8"><b-badge variant="primary">E-appointment</b-badge></dd>
                            </div>
                            <span class=""><h6 role="button" v-b-toggle.collapse-detail><b-badge>Lihat Detail...</b-badge></h6></span>
                            <!-- <b-button pill size="sm">Lihat Lainnya...</b-button> -->
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-light mb-3">
                                <div class="card-body">
                                    <div class="text-center">
                                        <small class="card-text mb-0 d-block">Nomor Kontrak</small>
                                        <small class="card-text mb-0 font-weight-bold">SQM-KR-0013122021</small>
                                        <small class="card-text mb-0 d-block">Tanggal Referensi</small>
                                        <small class="d-block card-text mb-0 font-weight-bold">13-12-2021</small>
                                        <p class="card-text mt-4 mb-0"><small>Kelengkapan Data Prospek</small></p>
                                        <h4 class="card-title mb-0">0%</h4>
                                        <p class="card-text mt-0" role="button" v-b-modal.modal-lg> <u><small>Lihat penilaian</small></u></p>

                                        <b-modal id="modal-lg" size="lg" title="SKOR KELENGKAPAN DATA PROSPEK" hide-footer>
                                            <!-- <h5 class="">SKOR KELENGKAPAN DATA PROSPEK</h5> -->
                                            <div class="my-3">
                                                <small><span class="text-danger">*</span> Data kelengkapan prospek hanya dapat dilihat hanya saat kontrak telah diterima oleh lister dan Anda sebagai lister</small>
                                            </div>

                                            <!-- Informasi Prospek -->
                                            <div>
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-1 variant="light" class="button-accor">
                                                                <span class="float-left">Informasi Prospek</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Nama</dt>
                                                                    <dd class="col-sm-7">Test hanif coba</dd>
                                                                    <dt class="col-sm-5">Telp</dt>
                                                                    <dd class="col-sm-7"><span>2131923192381</span></dd>
                                                                    <dt class="col-sm-5">Email</dt>
                                                                    <dd class="col-sm-7"><span></span></dd>
                                                                    <dt class="col-sm-5">Izin Member kepada prospek</dt>
                                                                    <dd class="col-sm-7">Belum<small class="text-muted fa fa-question-circle ml-3" data-tip="Member telah mengonfirmasi kepada prospek bahwa akan memberikan kontak informasinya kepada agen" currentitem="false"></small></dd>
                                                                    <dt class="col-sm-5">Nama Member</dt>
                                                                    <dd class="col-sm-7">Hanif Test</dd>
                                                                    <dt class="col-sm-5">Tier Member</dt>
                                                                    <dd class="col-sm-7">Silver</dd>
                                                                    <dt class="col-sm-5">Rating Member</dt>
                                                                    <dd class="col-sm-7"><small>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <span>(Belum ada review)</span></small></dd>
                                                                </div>
                                                                <small><span class="text-danger">*</span> Catatan: Prospect from e-appointment</small>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Preferensi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-2 variant="light" class="button-accor">
                                                                <span class="float-left">Preferensi Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Tipe Property</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Jumlah Tempat Tidur</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Lokasi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-3 variant="light" class="button-accor">
                                                                <span class="float-left">Lokasi Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Negara</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Provinsi</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                    <dt class="col-sm-5">Kabupaten/Kota</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Lokasi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-4 variant="light" class="button-accor">
                                                                <span class="float-left">Anggaran</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Harga</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Mertode Pembayaran</dt>
                                                                    <dd class="col-sm-5">-</dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Relasi -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-5 variant="light" class="button-accor">
                                                                <span class="float-left">Relasi</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Hubungan dengan Member</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Pengenalan produk kepada prospek</dt>
                                                                    <dd class="col-sm-5">- 
                                                                        <span class="ml-3">
                                                                            <!-- <b-button id="tooltip-button-variant">Button</b-button> -->
                                                                            <b-icon role="button" id="tooltip-button-variant" icon="question-circle-fill" aria-hidden="true"></b-icon>
                                                                            <b-tooltip target="tooltip-button-variant" variant="dark">Member telah menginformasikan produk listing secara lengkap kepada prospek</b-tooltip>
                                                                        </span>
                                                                    </dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Kecocokan Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-6 variant="light" class="button-accor">
                                                                <span class="float-left">Kecocokan Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Nama Properti</dt>
                                                                    <dd class="col-sm-7"><a target="_blank" href="/developer/my-listing/detail/723">Apartment 2</a></dd>
                                                                    <dt class="col-sm-5">Harga</dt><dd class="col-sm-7">2.000.000.000</dd>
                                                                    <dt class="col-sm-5">Referral Fee</dt>
                                                                    <dd class="col-sm-7">1%</dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>
                                            </div>

                                            <!-- Informasi Properti -->

                                        </b-modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-right">
                             <b-button variant="outline-secondary" size="sm" class="mr-2"><b-icon icon="chat-left-dots" aria-hidden="true"></b-icon> Chat Member</b-button>
                             <b-button variant="info" size="sm" class="mr-2" v-b-modal.modal-re><b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Re-assign In-House Agen</b-button>
                             <!-- <b-button variant="primary" size="sm" class="mr-2"><b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Re-assign In-House Agen</b-button> -->
                        </div>
                        <b-modal id="modal-re" size="md" title="Re-Assign Leads" hide-footer>
                            <div>
                                <table style="color:black; font-size: 14px;">
                                    <tr>
                                        <td>No Kontrak</td>
                                        <td class="px-2">:</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>Nama Leads</td>
                                        <td class="px-2">:</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>No Tlpn</td>
                                        <td class="px-2">:</td>
                                        <td>Mexico</td>
                                    </tr>
                                    <tr>
                                        <td>Property</td>
                                        <td class="px-2">:</td>
                                        <td>Mexico</td>
                                    </tr>
                                </table>
                                <div class="col-12 pl-0 mt-3">
                                    <b-form-group
                                    id="input-group-1"
                                    label="Pilih Agen"
                                    label-for="agen"
                                        >
                                        <b-form-select v-model="selected3" :options="options3" size="sm" id="agen"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-button variant="danger">Proses</b-button>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </div>
                <b-collapse id="collapse-detail">
                    <b-card>
                        <div class="row mb-0">
                            <div class="col-md-4">
                                <dl class="row mb-0">
                                    <dd class="col-12 mb-0">Nama Member</dd>
                                    <dt class="col-12 mb-3">Hanif Test</dt>
                                    <dd class="col-12 mb-0">Nama Agen Upline</dd>
                                    <dt class="col-12 mb-3">Hanif Test</dt>
                                    <dd class="col-12 mb-0">In House Agen</dd>
                                    <dt class="col-12 mb-0">Bagas Afrizal</dt>
                                </dl>
                            </div>
                            <div class="col-md-4">
                                <dl class="row">
                                    <dd class="col-12 mb-0">Nomor Kontrak</dd>
                                    <dt class="col-12 mb-3">SQM-KR-0013122021</dt>
                                    <dd class="col-12 mb-0">Tanggal Referensi</dd>
                                    <dt class="col-12 mb-3">13-12-2021</dt>
                                    <dd class="col-12 mb-0">Kontak In House Agen</dd>
                                    <dt class="col-12 mb-0">624564564564564</dt>
                                </dl>
                            </div>
                            <div class="col-md-4">
                                <dl class="row">
                                    <dd class="col-12 mb-0">Referal Fee Member</dd>
                                    <dt class="col-12 mb-3">1%</dt>
                                    <dd class="col-12 mb-0">Estimasi Referan Fee Member</dd>
                                    <dt class="col-12 mb-3">Rp 20.000.000</dt>
                                </dl>
                            </div>
                        </div>
                    </b-card>
                </b-collapse>
            </div>
        </div>

        <div class="my-5 ">
            <div class="card">
                <div class="leads-status-card bg-success px-3 py-1"><h6 class="mb-0 text-white">Baru</h6><span class="text-white"><small>13-12-2021</small></span></div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                             <b-img src="https://preview.sqmproperty.co.id/cmp/contents/property-product-user/3611/361120210611075856hm7kmbeva6miir31m58ni91f5p_a6814d8a47dd5b7870c568bd159033d1.jpg" fluid alt="Responsive image" class="my-3 d-block m-auto img-fluid pointer"></b-img>
                        </div>
                        <div class="col-md-6 mb-2">
                            <div class="row my-2">
                                <dt class="col-sm-4">Nama Prospek</dt>
                                <dd class="col-sm-8">Test hanif coba</dd>
                                <dt class="col-sm-4">Nomor telepon</dt>
                                <dd class="col-sm-8">622131923192381</dd>
                                <dt class="col-sm-4">In-house Agen</dt>
                                <dd class="col-sm-8">Bagas Afrizal</dd>
                                <dt class="col-sm-4">Properti</dt>
                                <dd class="col-sm-8"><a target="_blank" href="/developer/my-listing/detail/723">Apartment 2</a></dd>
                                <dt class="col-sm-4">Harga</dt>
                                <dd class="col-sm-8">2.000.000.000</dd>
                                <dt class="col-sm-4">Sumber</dt>
                                <dd class="col-sm-8"><b-badge variant="primary">E-appointment</b-badge></dd>
                            </div>
                            <span class=""><h6 role="button" v-b-toggle.collapse-detail><b-badge>Lihat Detail...</b-badge></h6></span>
                            <!-- <b-button pill size="sm">Lihat Lainnya...</b-button> -->
                        </div>
                        <div class="col-md-3">
                            <div class="card bg-light mb-3">
                                <div class="card-body">
                                    <div class="text-center">
                                        <small class="card-text mb-0 d-block">Nomor Kontrak</small>
                                        <small class="card-text mb-0 font-weight-bold">SQM-KR-0013122021</small>
                                        <small class="card-text mb-0 d-block">Tanggal Referensi</small>
                                        <small class="d-block card-text mb-0 font-weight-bold">13-12-2021</small>
                                        <p class="card-text mt-4 mb-0"><small>Kelengkapan Data Prospek</small></p>
                                        <h4 class="card-title mb-0">0%</h4>
                                        <p class="card-text mt-0" role="button" v-b-modal.modal-lg> <u><small>Lihat penilaian</small></u></p>

                                        <b-modal id="modal-lg" size="lg" title="SKOR KELENGKAPAN DATA PROSPEK" hide-footer>
                                            <!-- <h5 class="">SKOR KELENGKAPAN DATA PROSPEK</h5> -->
                                            <div class="my-3">
                                                <small><span class="text-danger">*</span> Data kelengkapan prospek hanya dapat dilihat hanya saat kontrak telah diterima oleh lister dan Anda sebagai lister</small>
                                            </div>

                                            <!-- Informasi Prospek -->
                                            <div>
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-1 variant="light" class="button-accor">
                                                                <span class="float-left">Informasi Prospek</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Nama</dt>
                                                                    <dd class="col-sm-7">Test hanif coba</dd>
                                                                    <dt class="col-sm-5">Telp</dt>
                                                                    <dd class="col-sm-7"><span>2131923192381</span></dd>
                                                                    <dt class="col-sm-5">Email</dt>
                                                                    <dd class="col-sm-7"><span></span></dd>
                                                                    <dt class="col-sm-5">Izin Member kepada prospek</dt>
                                                                    <dd class="col-sm-7">Belum<small class="text-muted fa fa-question-circle ml-3" data-tip="Member telah mengonfirmasi kepada prospek bahwa akan memberikan kontak informasinya kepada agen" currentitem="false"></small></dd>
                                                                    <dt class="col-sm-5">Nama Member</dt>
                                                                    <dd class="col-sm-7">Hanif Test</dd>
                                                                    <dt class="col-sm-5">Tier Member</dt>
                                                                    <dd class="col-sm-7">Silver</dd>
                                                                    <dt class="col-sm-5">Rating Member</dt>
                                                                    <dd class="col-sm-7"><small>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <b-icon icon="star-fill" aria-hidden="true"></b-icon>
                                                                        <span>(Belum ada review)</span></small></dd>
                                                                </div>
                                                                <small><span class="text-danger">*</span> Catatan: Prospect from e-appointment</small>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Preferensi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-2 variant="light" class="button-accor">
                                                                <span class="float-left">Preferensi Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Tipe Property</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Jumlah Tempat Tidur</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Lokasi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-3 variant="light" class="button-accor">
                                                                <span class="float-left">Lokasi Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Negara</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Provinsi</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                    <dt class="col-sm-5">Kabupaten/Kota</dt>
                                                                    <dt class="col-sm-5">-</dt>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Lokasi Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-4 variant="light" class="button-accor">
                                                                <span class="float-left">Anggaran</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Harga</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Mertode Pembayaran</dt>
                                                                    <dd class="col-sm-5">-</dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Relasi -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-5 variant="light" class="button-accor">
                                                                <span class="float-left">Relasi</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Hubungan dengan Member</dt>
                                                                    <dd class="col-sm-7">-</dd>
                                                                    <dt class="col-sm-5">Pengenalan produk kepada prospek</dt>
                                                                    <dd class="col-sm-5">- 
                                                                        <span class="ml-3">
                                                                            <!-- <b-button id="tooltip-button-variant">Button</b-button> -->
                                                                            <b-icon role="button" id="tooltip-button-variant" icon="question-circle-fill" aria-hidden="true"></b-icon>
                                                                            <b-tooltip target="tooltip-button-variant" variant="dark">Member telah menginformasikan produk listing secara lengkap kepada prospek</b-tooltip>
                                                                        </span>
                                                                    </dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>

                                                <!-- Kecocokan Properti -->
                                                <div class="accordion" role="tablist">
                                                    <b-card no-body class="mb-1">
                                                        <b-card-header header-tag="header" class="p-0" role="tab">
                                                            <b-button block v-b-toggle.accordion-6 variant="light" class="button-accor">
                                                                <span class="float-left">Kecocokan Properti</span>
                                                                <span class="float-right">0%</span>
                                                                <!-- <h6 class="float-right">00</h6> -->
                                                            </b-button>
                                                        </b-card-header>
                                                        <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                                                            <b-card-body>
                                                            <b-card-text>
                                                                <div class="row">
                                                                    <dt class="col-sm-5">Nama Properti</dt>
                                                                    <dd class="col-sm-7"><a target="_blank" href="/developer/my-listing/detail/723">Apartment 2</a></dd>
                                                                    <dt class="col-sm-5">Harga</dt><dd class="col-sm-7">2.000.000.000</dd>
                                                                    <dt class="col-sm-5">Referral Fee</dt>
                                                                    <dd class="col-sm-7">1%</dd>
                                                                </div>
                                                            </b-card-text>
                                                            </b-card-body>
                                                        </b-collapse>
                                                    </b-card>
                                                </div>
                                            </div>

                                            <!-- Informasi Properti -->

                                        </b-modal>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 text-right">
                             <b-button variant="outline-secondary" size="sm" class="mr-2"><b-icon icon="chat-left-dots" aria-hidden="true"></b-icon> Chat Member</b-button>
                             <b-button variant="info" size="sm" class="mr-2" v-b-modal.modal-re01><b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Re-assign In-House Agen</b-button>
                             <!-- <b-button variant="primary" size="sm" class="mr-2"><b-icon icon="arrow-counterclockwise" aria-hidden="true"></b-icon> Re-assign In-House Agen</b-button> -->
                        </div>
                        <b-modal id="modal-re01" size="md" title="Re-Assign Leads" hide-footer>
                            <div>
                                <table style="color:black;">
                                    <tr>
                                        <td>Nama</td>
                                        <td>:</td>
                                        <td>Germany</td>
                                    </tr>
                                    <tr>
                                        <td>No Tlpn</td>
                                        <td>:</td>
                                        <td>Mexico</td>
                                    </tr>
                                    <tr>
                                        <td>Property</td>
                                        <td>:</td>
                                        <td>Mexico</td>
                                    </tr>
                                </table>
                                <div class="col-12 pl-0 mt-3">
                                    <b-form-group
                                    id="input-group-1"
                                    label="Pilih Agen"
                                    label-for="agen"
                                        >
                                        <b-form-select v-model="selected3" :options="options3" size="sm" id="agen"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div>
                                    <b-button variant="danger">Proses</b-button>
                                </div>
                            </div>
                        </b-modal>
                    </div>
                </div>
                <b-collapse id="collapse-detail">
                    <b-card>
                        <div class="row mb-0">
                            <div class="col-md-4">
                                <dl class="row mb-0">
                                    <dd class="col-12 mb-0">Nama Member</dd>
                                    <dt class="col-12 mb-3">Hanif Test</dt>
                                    <dd class="col-12 mb-0">Nama Agen Upline</dd>
                                    <dt class="col-12 mb-3">Hanif Test</dt>
                                    <dd class="col-12 mb-0">In House Agen</dd>
                                    <dt class="col-12 mb-0">Bagas Afrizal</dt>
                                </dl>
                            </div>
                            <div class="col-md-4">
                                <dl class="row">
                                    <dd class="col-12 mb-0">Nomor Kontrak</dd>
                                    <dt class="col-12 mb-3">SQM-KR-0013122021</dt>
                                    <dd class="col-12 mb-0">Tanggal Referensi</dd>
                                    <dt class="col-12 mb-3">13-12-2021</dt>
                                    <dd class="col-12 mb-0">Kontak In House Agen</dd>
                                    <dt class="col-12 mb-0">624564564564564</dt>
                                </dl>
                            </div>
                            <div class="col-md-4">
                                <dl class="row">
                                    <dd class="col-12 mb-0">Referal Fee Member</dd>
                                    <dt class="col-12 mb-3">1%</dt>
                                    <dd class="col-12 mb-0">Estimasi Referan Fee Member</dd>
                                    <dt class="col-12 mb-3">Rp 20.000.000</dt>
                                </dl>
                            </div>
                        </div>
                    </b-card>
                </b-collapse>
            </div>
        </div>
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
      size="md"
    ></b-pagination>    
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            rows: 100,
            currentPage: 1,
            perPage: 10,
            options: [
                { value: null, text: 'Semua Proyek' },
                { value: 'a', text: 'Apartemen' },
                { value: 'b', text: 'Perumahan' },
            ],
            options1: [
                { value: null, text: 'Semua Status' },
                { value: '1', text: 'Baru' },
                { value: '2', text: 'Follow up' },
                { value: '3', text: 'Appointment' },
            ],
            selected: null,
            selected1: null,
        }
    }
}
</script>