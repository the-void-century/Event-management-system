class AddRoleToProfileusers < ActiveRecord::Migration[7.0]
  def change
    add_column :profileusers, :role, :string
  end
end
