<?php

namespace App\Http\Controllers;

use App\Admin;
use App\AdminLogin;
use App\UserGroup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //

        $count = Admin::count();
//        dd($count);
        $name = '';
        if ($request->has('search_admin')) {
            $name = $request['search_admin'];
        }
        $items = 10;
        $admins = Admin::join('user_groups', 'admins.user_group_id', 'user_groups.id')
            ->where('admins.name', 'LIKE', '%' . $name . '%')
            ->select('admins.id', 'admins.name as admin_name', 'email', 'user_groups.name as group_name', 'image')
            ->paginate($items);
        $admins->appends(['search_admin' => $name]);

//        dd($request['page']);
        $i = 1;
        if (!is_null($request['page'])) {
            if ($request['page'] > 1) {
                $i = ($request['page']) * $items - 1;
            }
        }
        foreach ($admins as $admin) {
            $admin->counter = $i;
            $i++;
        }


        return view("admin.view")->with('search', $name)->with('admins', $admins)->with('count', $count);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $user_groups = UserGroup::all();
        return view('admin.add')->with('user_groups', $user_groups);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $status = false;
        $admin_controller_2 = (new AdminController2);

        session([
            "request" => ["admin_name" => $request['admin_name']]
        ]);

        $validate = $request->validate([
            "admin_name" => 'required',
            "admin_email" => 'required|email',
            "admin_image" => 'image',
            "user_group_id" => 'required|notIn:0',
            "admin_username" => 'required',
            "admin_password" => 'required',
        ], [
            'admin_name.required' => '* admin name is required',
            'admin_email.required' => '* email is required',
            'admin_email.email' => '* invalid email',
            'user_group_id.required' => '* user group is required',
            'user_group_id.not_in' => '* invalid user group',
            'admin_username.required' => '* user name is required',
            'admin_password.required' => '* password is required',
            'admin_image.image' => '* invalid image'
        ]);

        $admin = new Admin;
        $admin->name = $request['admin_name'];
        $admin->email = $request['admin_email'];
        $admin->user_group_id = $request['user_group_id'];


        if ($request->hasFile('admin_image')) {
            $image = $request->file('admin_image');
            $image_name = $admin_controller_2->generate_image_name($image);
            $admin->image = $image_name;
        }

        $admin->created_by = session('id');

        $status = $admin->save();

        if ($status) {
            if ($request->hasFile('admin_image')) {
                $admin_controller_2->upload_admin_image($image, $image_name);;
            }

            $admin_login = new AdminLogin;
            $admin_login->admin_id = $admin->id;
            $admin_login->username = $request['admin_username'];
            $admin_login->password = bcrypt($request['admin_password']);
            $status = $admin_login->save();
        }

        return redirect('admin/add')->with('add_admin_status', $status)->with('admin_name', $admin->name);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
        $admin = Admin::join('admin_logins', 'admins.id', 'admin_logins.admin_id')
            ->where('admins.id', $id)
            ->select('admins.id', 'admins.name', 'admins.email', 'admins.image', 'admins.user_group_id', 'admin_logins.username')
            ->first();

        $user_groups = UserGroup::all();

//        dd($admin);

        return view('admin.update')->with('admin', $admin)->with('user_groups', $user_groups);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        $status = false;
        $admin_controller_2 = (new AdminController2);

        $validate = $request->validate([
            "admin_name" => 'required',
            "admin_email" => 'required|email',
            "admin_image" => 'image',
            "user_group_id" => 'required|notIn:0',
            "admin_username" => 'required',
        ], [
            'admin_name.required' => '* admin name is required',
            'admin_email.required' => '* email is required',
            'admin_email.email' => '* invalid email',
            'user_group_id.required' => '* user group is required',
            'user_group_id.not_in' => '* invalid user group',
            'admin_username.required' => '* user name is required',
            'admin_image.image' => '* invalid image'
        ]);

//        dd(is_null($request['admin_password']));

        $admin = Admin::find($id);
        $admin_login = AdminLogin::where('admin_id', $id)->first();
//        dd($admin, $admin_logins);
        if ($admin->name != $request['admin_name']) {
            $admin->name = $request['admin_name'];
        }
        if ($admin->email != $request['admin_email']) {
            $admin->email = $request['admin_email'];
        }
        if ($admin->user_group_id != $request['user_group_id']) {
            $admin->user_group_id = $request['user_group_id'];
        }
        if ($admin->user_group_id != $request['user_group_id']) {
            $admin->user_group_id = $request['user_group_id'];
        }
        if (!is_null($request->file('admin_image'))) {
            $image = $request->file('admin_image');
            $image_name = $admin_controller_2->generate_category_icon_name($image);
            $admin->image = $image_name;
        }
        $admin->updated_by = session('id');

        $status = $admin->save();

        if ($status) {
            if (!is_null($request->file('admin_image'))) {
                $admin_controller_2->upload_category_icon($image, $image_name);;
            }
            if ($admin_login->username != $request['admin_username']) {
                $admin_login->username = $request['admin_username'];
            }
            if (!is_null($request['admin_password'])) {
                $admin_login->password = bcrypt($request['admin_password']);
            }
            $status = $admin_login->save();
        }

        return redirect('admin/' . $admin->id .'/edit')->with('update_admin_status', $status);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return array
     */
    public function destroy($id)
    {
        //
        $status = false;
        $admin = Admin::find($id);

        if (isset($admin)) {
            $result1 = Admin::where('id', $id)->update(["deleted_by" => session('id')]);
            $result2 = $admin->delete();

            if ($result1 && $result2) {
                $status = true;
            }
        }
        $responce = array("status"=>$status, "name"=>$admin->name);
        return $responce;
    }
}
