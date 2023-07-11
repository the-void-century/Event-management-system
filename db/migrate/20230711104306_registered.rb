class Registered < ActiveRecord::Migration[7.0]
  def change
    create_table :your_table_name do |t|
      t.references :profileuser, foreign_key: true
      t.references :event, foreign_key: true

      t.timestamps
    end
  end
end
