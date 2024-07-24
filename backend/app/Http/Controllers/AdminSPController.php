<?php

namespace App\Http\Controllers;

use App\Http\Resources\sanpham_resource;
use App\Models\sanpham;
use Illuminate\Http\Request;

class AdminSPController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $sp = sanpham::create($request-> all());
        $data = new sanpham_resource($sp);
        return response()-> json($data);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $sp = sanpham::find($id);

        $sp->ten_sp  =  $request->ten_sp;
        $sp->gia     =  $request->gia;
        $sp->id_loai =  $request->id_loai;
        $sp->save();

        $data = new sanpham_resource($sp);
        return response()->json($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
    
        sanpham::find($id)->delete();
        return response()-> json([]);
        
    
    }
}
