class Dropuser < ActiveRecord::Migration[7.0]
  def change
    drop_table :Users
  end
end