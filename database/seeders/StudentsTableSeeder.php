<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StudentsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('students')->insert([
            [
                'kode_siswa' => 'S001',
                'nama' => 'Ali Ahmad',
                'email' => 'ali.ahmad@example.com',
                'status' => 'Aktif',
                'foto' => 'https://example.com/foto/ali.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_siswa' => 'S002',
                'nama' => 'Budi Santoso',
                'email' => 'budi.santoso@example.com',
                'status' => 'Aktif',
                'foto' => 'https://example.com/foto/budi.jpg',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_siswa' => 'S003',
                'nama' => 'Siti Nurhaliza',
                'email' => 'siti.nurhaliza@example.com',
                'status' => 'Nonaktif',
                'foto' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],

        ]);
    }
}
