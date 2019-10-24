<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    //
    public function login_page()
    {

        if (session()->has('id')) {
            return redirect()->back();
        }
        return view('template.login');
    }

    public function login(Request $request)
    {

        if (session()->has('id')) {
            return redirect()->back();
        }

        $validate = $request->validate([
            "username" => 'required',
            "password" => 'required'
        ], [
            'username.required' => '* username is required',
            'password.required' => '* password is required'
        ]);/*image, language*/

        $admin = DB::table('admins')
            ->join('admin_logins', 'admins.id', 'admin_logins.admin_id')
            ->join('user_groups', 'admins.user_group_id', 'user_groups.id')
            ->where('admin_logins.username', $request['username'])
            ->whereNull('admins.deleted_at')
            ->select('admins.id', 'admins.name', 'admins.email', 'admin_logins.password', 'admins.user_group_id', 'admins.image', 'user_groups.name as group_name')
            ->first();

        if (isset($admin)) {
            if (Hash::check($request['password'], $admin->password)) {

                $admin_token_controller = new AdminTokenController();
                $admin_token_controller->destroy_token($admin->id);
                $token = $admin_token_controller->store_token($admin->id);

//                dd($admin);

                session([
                    "id" => $admin->id,
                    "name" => $admin->name,
                    "user_group_id" => $admin->user_group_id,
                    "user_group_name" => $admin->group_name,
                    "image" => $admin->image,
                    "token" => $token
                ]);

                return redirect('dashboard');
            }
        }

        return redirect()->back()->with('login_status', false);
    }

    public function logout()
    {
        session()->flush();
        return redirect('login');
    }

}
