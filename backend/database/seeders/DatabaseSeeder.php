<?php

namespace Database\Seeders;

use App\Models\sanpham;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);

        $sp_arr = [
            [
                "ten_sp" => "Asus TUF Gaming 75",
                "gia" => 18490000, "id_loai" => "1"
            ],
            [
                "ten_sp" => "Acer Gaming Aspire",
                "gia" => 16990000, "id_loai" => "2"
            ],
            [
                "ten_sp" => "MSI Gaming GF63 15",
                "gia" => 16990000, "id_loai" => "4"
            ],
            [
                "ten_sp" => "Lenovo Ideapad 55H",
                "gia" => 15990000, "id_loai" => "3"
            ],
            [
                "ten_sp" => "Acer Gaming Nit i7",
                "gia" => 21990000, "id_loai" => "2"
            ],
            [
                "ten_sp" => "Asus Gaming R5 755",
                "gia" => 19290000, "id_loai" => "1"
            ],
            [
                "ten_sp" => "Asus Air 13 M3",
                "gia" => 38490000, "id_loai" => "1"
            ],
            [
                "ten_sp" => "Asus fq5229TU i3",
                "gia" => 10790000, "id_loai" => "1"
            ],
            [
                "ten_sp" => "Acer Aspire 51M",
                "gia" => 11490000, "id_loai" => "2"
            ],
            [
                "ten_sp" => "MSI Gaming Thin 1H",
                "gia" => 16990000, "id_loai" => "4"
            ],
            [
                "ten_sp" => "MSI GF63 12UCX i5",
                "gia" => 17290000, "id_loai" => "4"
            ],
            [
                "ten_sp" => "MSI Sword HX B14G",
                "gia" => 37990000, "id_loai" => "4"
            ],
            [
                "ten_sp" => "MSI HX B14VFKG i7",
                "gia" => 36590000, "id_loai" => "4"
            ],
            [
                "ten_sp" => "Lenovo LOQ i5 12X",
                "gia" => 21490000, "id_loai" => "3"
            ],
            [
                "ten_sp" => "Lenovo Gaming  i5",
                "gia" => 20790000, "id_loai" => "3"
            ],
        ];
        for ($i = 0; $i < count($sp_arr); $i++) sanpham::create($sp_arr[$i]);
    }
}
