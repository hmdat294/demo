<?php

namespace App\Http\Controllers;

use App\Http\Resources\sanpham_resource;
use App\Models\sanpham;
use Illuminate\Http\Request;

class SPController extends Controller
{
    function index(){
        $sp =  sanpham::all();
        $data = sanpham_resource::collection($sp);
        return response() -> json($data);
    }
    function chitiet($id){
        $sp = sanpham::find($id);
        $data = new sanpham_resource($sp);
        return response()-> json($data);
    }



    function themsp(Request $request) {
        // Kiểm tra dữ liệu đầu vào
        $validatedData = $request->validate([
            'ten_sp' => 'required|string|max:255',
            'ngay' => 'required|date',
            'id_loai' => 'required|numeric',
        ]);

        // Tạo sản phẩm mới
        $sp = Sanpham::create([
            'ten_sp' => $validatedData['ten_sp'],
            'ngay' => $validatedData['ngay'],
            'id_loai' => $validatedData['id_loai'],
        ]);
    }
}