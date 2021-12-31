<template>
    <div>
        <h5 class="font-weight-bolder">Buat Proyek Baru</h5>

        <div class="my-4">
            <b-card class="alert-bg p-0 ">
                <p>Peringatan</p>
                <small>
                Developer tidak diperbolehkan memasukan informasi kontak pada informasi proyek baik melalui judul, deskripsi, foto atau lainnya karena SQM Property adalah marketplace referral untuk memastikan data dari member & afiliasi agen terproteksi
                </small>
            </b-card>
        </div>

        <div>
            <b-tabs content-class="" card class="mb-0">
                <!-- This tabs content will always be mounted -->
                <b-tab title="Informasi Properti">
                    <b-card>
                        <div>
                        <b-form-group id="input-group-2" label="Nama Pengembang" label-for="input-2">
                            <b-form-input
                            id="input-2"
                            placeholder="Nama Pengembang?"
                            required
                            disabled
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group
                            id="input-group-1"
                            label="Nama Proyek/Judul Listing"
                            label-for="input-1"
                            description="Maksimal 60 karakter"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Masukkan Proyek"
                            required
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group
                            id="input-group-1"
                            label="Tahun Serah Terima"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Masukkan Tahun"
                            required
                            ></b-form-input>
                        </b-form-group>
                        
                        <b-form-group 
                        id="textarea-deskripsi" 
                        label="Deskripsi"
                        description="Maksimal 1500 karakter">
                            <b-form-textarea
                            id="deskripsi"
                            v-model="text"
                            placeholder="Masukkan Deskripsi..."
                            rows="3"
                            max-rows="6"
                            
                            ></b-form-textarea>
                        </b-form-group>

                        <div class="row">
                            <div class="col-sm-6">
                                <b-form-group id="select-properti" label="Tipe Properti">
                                    <b-form-select id="properti" v-model="selected" :options="options" size="sm">
                                        <b-form-select-option value=''>Pilih Tipe Properti</b-form-select-option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-sm-6">
                                <b-form-group id="select-properti" label="Jenis Sertifikat">
                                    <b-form-select id="properti" v-model="selected1" :options="options1" size="sm">
                                        <b-form-select-option value=''>Pilih Jenis Sertifikat</b-form-select-option>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                        </div>

                        <p>Tempat Upload Foto Cover</p>

                        </div>
                    </b-card>
                </b-tab>

                <!-- This tabs content will not be mounted until the tab is shown -->
                <!-- and will be un-mounted when hidden -->
                <b-tab title="Tipe Unit" lazy>
                    <b-card>
                        <b-form-group
                            id="input-group-1"
                            label="Nama Unit"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Masukkan Nama Unit"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <b-form-group 
                        id="textarea-promo" 
                        label="Promo & Informasi Lainnya">
                            <b-form-textarea
                            id="promo"
                            placeholder="Contoh: Full Furnish/ Free AC/ Free 1 Tahun IPL"
                            rows="3"
                            
                            ></b-form-textarea>
                        </b-form-group>
                        
                        <div class="row">

                            <div class="col-md-4">
                                <label for="harga">Harga Mulai</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon3">Rp</span>
                                    </div>
                                <input type="text" class="form-control" id="harga" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="cicilan">Cicilan Mulai</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon3">Rp</span>
                                    </div>
                                <input type="text" class="form-control" id="cicilan" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <label for="cicilan">Cicilan Mulai</label>
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="basic-addon3">Rp</span>
                                    </div>
                                <input type="text" class="form-control" id="cicilan" aria-describedby="basic-addon3">
                                </div>
                            </div>
                            <div class="col-md-2">
                                    <label for="dp">DP</label>
                                    <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="basic-addon3">Rp</span>
                                        </div>
                                    <input type="text" class="form-control" id="cicilan" aria-describedby="basic-addon3">
                                    </div>
                            </div>
                        </div>

                        <p>upload gambar facade</p>

                    </b-card>
                
                </b-tab>
                <b-tab title="Fasilitas" lazy>
                    <b-card>
                        <div class="col-12">
                            <b-row>
                                <b-col cols="11" class="px-0">
                                    <b-form-group
                                        id="input-group-1"
                                        label="Fitur Utama & Fasilitas"
                                        label-for="input-1"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        placeholder="Masukkan Fasilitas"
                                        required
                                        ></b-form-input>
                                    </b-form-group>
                                </b-col>
                                <b-col cols="1">
                                    <b-button variant="danger" size="sm" style="margin-top: 30px;">+</b-button>
                                </b-col>
                            </b-row>
                        </div>
                        <p>Fasilitas Sekitar</p>
                        <div>
                            <b-row>
                                <div class="col-md-3">
                                    <b-form-group
                                    id="input-group-1"
                                    label="Kategori"
                                    label-for="kategori"
                                        >
                                        <b-form-select v-model="selected3" :options="options3" size="sm" id="kategori"></b-form-select>
                                    </b-form-group>
                                </div>
                                <div class="col-md-3">
                                    <b-form-group
                                        id="input-group-1"
                                        label="Nama"
                                        label-for="input-1"
                                    >
                                        <b-form-input
                                        id="input-1"
                                        type="text"
                                        placeholder="Nama Fasilitas"
                                        required
                                        ></b-form-input>
                                    </b-form-group>
                                </div>
                                <div class="col-md-3 col-6">
                                    <label for="jarak">Jarak</label>
                                    <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="jarak" aria-describedby="basic-addon3">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon3">KM</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-6">
                                    <label for="jarak">Waktu Tempuh</label>
                                    <div class="input-group mb-3">
                                    <input type="text" class="form-control" id="jarak" aria-describedby="basic-addon3">
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon3">Menit</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div>
                                        <b-button block variant="danger" size="sm">Tambah Fasilitas</b-button>
                                    </div>
                                </div>
                            </b-row>
                        </div>
                    </b-card>
                </b-tab>
                <b-tab title="Lokasi" lazy>
                    <b-card>
                        <div class="row">
                            <div class="col-md-3">
                                <b-form-group
                                id="input-group-1"
                                label="Negara"
                                label-for="Negara"
                                    >
                                    <b-form-select v-model="selected4" size="sm" id="Negara">
                                        <!-- <b-form-select-option value="a">Option A</b-form-select-option> -->
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>-Pilih Negara</b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-3">
                                <b-form-group
                                id="input-group-1"
                                label="Provinsi"
                                label-for="Provinsi"
                                    >
                                    <b-form-select v-model="selected5" size="sm" id="Provinsi">
                                        <!-- <b-form-select-option value="a">Option A</b-form-select-option> -->
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>-Pilih Provinsi</b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-3">
                                <b-form-group
                                id="input-group-1"
                                label="Kota"
                                label-for="Kota"
                                    >
                                    <b-form-select v-model="selected6" size="sm" id="Kota">
                                        <!-- <b-form-select-option value="a">Option A</b-form-select-option> -->
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>-Pilih Kota/Kab</b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                            <div class="col-md-3">
                                <b-form-group
                                id="input-group-1"
                                label="Kecamatan"
                                label-for="Kecamatan"
                                    >
                                    <b-form-select v-model="selected7" size="sm" id="Kecamatan">
                                        <!-- <b-form-select-option value="a">Option A</b-form-select-option> -->
                                        <template #first>
                                            <b-form-select-option :value="null" disabled>-Pilih Kecamatan</b-form-select-option>
                                        </template>
                                    </b-form-select>
                                </b-form-group>
                            </div>
                        </div>
                        <b-form-group
                            id="input-group-1"
                            label="Alamat"
                            label-for="input-1"
                        >
                            <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Masukkan Alamat"
                            required
                            ></b-form-input>
                        </b-form-group>

                        <p>Disini ada Maps</p>
                    </b-card>
                </b-tab>
                <b-tab title="Komisi" lazy>
                    <b-card>
                        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Tampilkan Listing Untuk Afiliasi Agen SQM</b-form-checkbox>
                        <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">Tampilkan Listing Untuk Member SQM</b-form-checkbox>
                        <hr/>

                        <div class="row mb-4">
                            <div class="col-md-6">
                                <label for="Komisi">Komisi Agen SQM</label>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" id="Komisi" aria-describedby="basic-addon3">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon3">%</span>
                                    </div>
                                </div>
                                <div class="text-ket">
                                    Komisi yang diberikan kepada Agen SQM apabila terjadi transaksi dari leads Agen SQM. Tidak termasuk komisi sqm sebagai lead agen atas afiliasi agen sqm
                                </div>
                            </div>
                            <div class="col-md-6">
                                <label for="Closing">Closing Fee</label>
                                <div class="input-group mb-3">
                                <input type="text" class="form-control" id="Closing" aria-describedby="basic-addon3">
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="basic-addon3">Rp</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <b-form-group 
                        id="textarea-syarat" 
                        label="Syarat dan Ketentuan Closing Fee"
                        >
                            <b-form-textarea
                            id="Syarat"
                            v-model="text"
                            placeholder="..."
                            rows="3"
                            max-rows="6"
                            
                            ></b-form-textarea>
                        </b-form-group>

                        <b-form-group 
                        id="textarea-reward" 
                        label="Syarat dan Ketentuan Closing Fee"
                        >
                            <b-form-textarea
                            id="Syarat"
                            v-model="text"
                            placeholder="..."
                            rows="3"
                            max-rows="6"
                            ></b-form-textarea>
                        </b-form-group>
                        
                        <p>Kalkulasi Komisi dan Referal Fee</p>
                        <small>Disini harusnya ada kalkulasi cuma gak ada contohnyaa</small>
                    </b-card>
                </b-tab>
                <b-tab title="Lampiran" lazy>
                    <b-card>
                        <div class="row">
                            <div class="col-md-4">
                                <p class="font-weight-bolder">Brosur (Format PDF)</p>
                                <small>Dilihat oleh Member & Afiliasi</small>
                                Ada upload file PDF disini
                            </div>
                            <div class="col-md-4">
                                <p class="font-weight-bolder">Pricelist (Format PDF)</p>
                                <small>Dilihat oleh Member & Afiliasi</small>
                                Ada upload file PDF disini
                            </div>
                            <div class="col-md-4">
                                <p class="font-weight-bolder">Pricelist (Format PDF)</p>
                                <small>Dilihat oleh Member & Afiliasi</small>
                                Ada upload file PDF disini
                            </div>
                        </div>
                    </b-card>
                </b-tab>
            </b-tabs>
        </div>

    </div>
</template>


<script>
export default {
    data: function() {
        return {
            options: [
                // { value: null, text: '' },
                { value: 'a', text: 'Apartemen' },
                { value: 'b', text: 'Perumahan' },
                { value: 'b', text: 'Ruko' },
            ],
            selected:'',
            options1: [
                // { value: null, text: '' },
                { value: 'a', text: 'Hak Milik' },
                { value: 'b', text: 'HGB' },
                { value: 'b', text: 'Strata' },
            ],
            selected1:'',
            options3: [
                { value: null, text: 'Sekolah' },
                { value: '1', text: 'Baru' },
                { value: '2', text: 'Follow up' },
                { value: '3', text: 'Appointment' },
            ],
            selected3: null,
            selected4: null,
            selected5: null,
            selected6: null,
            selected7: null,
        }
    }
}
</script>

<style scoped>
    .alert-bg {
        background-color: #ffc1071a;
        border: 1px solid #ffc10726;
        color: #53535f;
    }
    .card-body {
        padding: 15px;
    }

    .nav-tabs .nav-link {
        border: 0px solid red !important;
    }

    .nav-item a{
        color:  orange;
        background-color: white !important;
    }

    .form-group, .form-control{
        font-size: 13px;
    }

    .form-group input, textarea{
        font-size: 13px;
        /* background-color: #fbfbfb; */
    }

    .input-group-text {
        background-color: #BA1823 !important;
        color: white;
    }

    label {
        font-size: 13px;
    }

    .text-ket{
        font-size: 10px;
    }

    .tab-pane{
        padding-left: 0 !important;
        padding-right: 0 !important;
    }
</style>