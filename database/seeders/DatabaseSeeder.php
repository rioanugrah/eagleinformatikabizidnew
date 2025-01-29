<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use \Carbon\Carbon;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // User::factory()->create([
        //     'name' => 'Mario',
        //     'username' => 'mario46_',
        //     'email' => 'mariomad2296@gmail.com',
        // ]);

        // collect(range(1, 100))->each(function ($_) {
        //     \App\Models\User::factory()->hasPosts(rand(0, 16))->create();
        // });
        $user = User::factory()->create([
            'name' => 'Administrator',
            'username' => 'administrator',
            'email' => 'admin@admin.com',
            'password' => Hash::make('admin123'),
            'email_verified_at' => Carbon::now()
        ]);

        $permissions = [
            'permission-list',
            'permission-create',
            'permission-edit',
            'permission-update',
            'permission-delete',
            'role-list',
            'role-create',
            'role-edit',
            'role-update',
            'role-delete',
            'user-list',
            'user-create',
            'user-edit',
            'user-update',
            'user-delete',
        ];

        $dataPermission = [];
        foreach ($permissions as $permission) {
            $data = Permission::create(['name' => $permission]);
            $dataPermission[] = $data->name;
        }

        $role = Role::create(['name' => 'Administrator']);
        $role->syncPermissions($dataPermission);

        $user->assignRole(1);
    }
}
