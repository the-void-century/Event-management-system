class AddUniqemailToProfileuser < ActiveRecord::Migration[7.0]
  def change
    add_index :profileusers, :email, :unique => true
  end
end
