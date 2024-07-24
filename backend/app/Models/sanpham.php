<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sanpham extends Model
{
    use HasFactory;

    protected $table = 'sanpham';
    public $primaryKey = 'id';
    protected $fillable = ['ten_sp', 'gia', 'id_loai'];
}
