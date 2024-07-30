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

}