class AddUniquserToProfileuser < ActiveRecord::Migration[7.0]
  def change
    add_index :profileusers, :username, :unique => true
  end
end
